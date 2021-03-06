const stripe = require('stripe')([
    //aquí van las claves secretas para conectar con stripe
][0]);


const endpoint_secret = [
    //Aquí se escriben las claves secretas para la terminal de stripe
][1]; 

const { ContactsOutlined } = require('@material-ui/icons');
const { admin, storage } = require('../firebase');
var db = admin.firestore();
var thers = db.collection('therapists');
var users = db.collection('users');
var sess = db.collection('sessions');

/**La private key será utilizada con una variable de entorno */

exports.sendPaymentInfo = (req, res) => {

    const { amount, email, payment_method_id, date } = req.body

    users.doc(req.params.uid).get()
    .then(doc => {
        //console.log(payment_method_id);
        let pm = doc.data().payment_met;
        pm.push(payment_method_id);
        
        doc.ref.update({ "payment_met": pm })
        .then(() => {
            console.log("PMs actualizados")
        })
        .catch(er => {
            console.error(er.message);
        })
        thers.doc(doc.data().therapist).get().then(ther => {
            //console.log(ther.data())
            stripe.paymentIntents.create({
                "amount": amount,
                "currency": 'mxn',
                "description": 'Sesión individual',
                "payment_method": payment_method_id,
                "application_fee_amount": 10000,
                "transfer_data": {
                    "destination": ther.data().stripeId,
                },
                "payment_method_types": ['card', 'oxxo'],
                "receipt_email": email,
                "payment_method_options": {
                    //"expires_after_days": 2, // TODO:NESTOR Ver los días a poner según el modelo de negocios
                }
            })
            .then((paymentIntent) => {
            console.log(paymentIntent.receipt_email, "Ticket de pago generado exitosamente api")
            return res.status(200).send({
                "client_secret": paymentIntent.client_secret, 
                    "message": 'Ticket de pago generato exitosamente'
                })
            })
            .catch((error) => {
                console.log('Error al crear el intento de pago',error.message)
                res.status(400).send(error)
            })
            
        })
        .catch((error) => {
            console.log('Error al obtener los datos de el terapeuta del usuario',error.message)
            res.status(400).send(error)
        })
    })
} 

exports.handleStripeEvent = (req, res) => {
    const sig = req.headers['stripe-signature']; // @Signature de la API de Stripe
    
  
    let event = req.body; // * Lee la información enviada

    try { 
        /* 
          * Se construye unevento a traves de stripe pasando como argumentos:
            @ Signature de stripe
            @ secreto del endpoint
            @ Informacion obtenida del POST
        */
        event = stripe.webhooks.constructEvent(req.rawBody, sig, endpoint_secret);
    } catch (err) {
        console.log(err.message)
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch(event.type) {
        case 'payment_intent.succeeded':
            
            console.log("Pago recibido con " + event.data.object["payment_method_types"])
            
            // * Se hizo el pago del voucher del OXXO exitosamente 
            sess.where("pay_met", "==", event.data.object.id).get()
            .then(query => {
                console.log("Iniciando la actualizacion de las sesiones")
                query.forEach(doc => {
                    console.log(`doc: ${doc.data().user_name}`)
                    doc.ref.update({payed: true})
                    .then(() => {
                        return res.status(200).send({ received: true });
                    })
                    .catch(err => {
                        console.log(err.message);
                        return res.status(400).send(err.message);
                    })
                })
            })
            .catch(err => {
                console.log(err.message);
                return res.status(400).send(err.message);
            })
            break;
            
        case 'payment_intent.requires_action':
            
            // * Se genero el voucher del OXXO
            console.log("Voucher generado");
            return res.status(200).send({received: true});

        case 'payment_intent.processing':
            // * Se esta procesando el outcome del pago
            console.log("Voucher en proceso")
            return res.status(200).send({received: true});

        case 'payment_intent.payment_failed':
            // * No se hizo el pago exitosamente :C

            // TODO: Regresar la cita a modo disponible

            console.log("Pago no realizado")
            return res.status(200).send({received: true});
    
        // case 'account_update':
        //     let { id, charges_enabled } = event.data.object;

        //     ther.where(stripeId == id).get()
        //     .then(query => {
        //         query.forEach(doc => {
        //             doc.ref.update({ charges_enabled: charges_enabled })
        //             .then(() => {
        //                 console.log("Cuenta actualizada;")
        //             });
        //             return res.status.send(charges_enabled)
        //         });
        //     });
        
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
            return res.status(200).send({received: true});
    }
}

exports.expressAccount = async (req, res) => {
    console.log('ejecutando función expressAccount')
    const account = await stripe.accounts.create({
        "type": 'express',
        "email":req.body.email,
        "country": 'MX',
        "business_type": 'individual',
        "capabilities": {
            "transfers": {requested:true},
        }
    })
    .then(response => {
        thers.doc(req.params.tid).update({stripeId:response.id, charges_enabled:response.charges_enabled})
        const host = [
            'http://localhost:3000', // * local emulator dev host
            'https://iknelia.app' // * cloud api host
          ][0]
        stripe.accountLinks.create({
            account: response.id,
            refresh_url: `${host}/${req.params.tid}/connectFailed`,
            return_url: `${host}/${req.params.tid}/dashboard`,
            type:"account_onboarding"

        }).then(response1 => {
            
            return res.status(200).send(response1)
        }).then((response) => {
            console.log('response de create links',response)
        }).catch(err => {
            console.error('No ha sido posible enviar el URL')
        })
        //     console.log(response1)
        //     thers.doc(req.params.tid).update({stripeId:response.id, charges_enabled:response.charges_enabled})
        //     .then(() =>{
        //         console.log('Actualización de stripeID completada.');
        //         return res.status(200).send(response1);
        //     }
        //     ).catch(err => {
        //         console.error('no hemos podido actualizar tu id',err)
        //     })
        // })
    })
    .catch(e => {
        console.error('No ha sido posible crear tu cuenta')
        console.error(e)
    })
}

exports.validateStripe = (req,res) => {
    thers.doc(req.params.tid).get().then(doc => {
        console.log(doc.data().stripeId)
        return res.status(200).send(doc.data().stripeId)
    }).catch(e => {
        console.error(e, 'Error al traer tus datos de la base de datos para validar tu estado en stripe')
    })
}

exports.connectFailed = (req,res) => {
    const host = [
        'http://localhost:3000', // * local emulator dev host
        'https://iknelia.app' // * cloud api host
      ][0]

    thers.doc(req.params.tid).get().then(doc => {
        console.log(doc.data().stripeId, 'connectFailedFunction')
        stripe.accountLinks.update({
            account: doc.data().stripeId,
            refresh_url: `${host}/${req.params.tid}/connect`,
            return_url: `${host}/${req.params.tid}/dashboard`,
            type:"account_onboarding"
    
        }).then(response1 => {
        // console.log("Enviando link")
        
            return res.status(200).send(response1)
        })
    }).catch(e => {
        console.error(e)
        return res.status(400)
    })
}

exports.connectReAuth = (req,res) => {
    thers.doc(req.params.tid).get().then(doc => {

        if (doc.data().stripeId === "") {
            console.log('No hay cuenta aún')
            return res.status(200).send(false)
            
        } else  {
            console.log('Se realizará un retrive')
            stripe.accounts.retrieve(
                doc.data().stripeId
            ).then(account => {
            // console.log(account)
             return res.status(200).send(account)
            })
        }
    })
    .catch(e => {
        console.error('No ha sido posible traer tus datos')
        console.error(e)
        return res.status(400).send(e);
    })
}
import React from 'react'
import { Grow, Icon, IconButton, TextField, Tooltip } from '@material-ui/core'
import { format } from 'date-fns'
import { Breadcrumb } from 'app/components'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'

const SessionsHistory = () => {
    const columns = [
        {
            name: '_id',
            label: 'Sesión No.',
            options: {
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">{orderList[dataIndex]._id}</span>
                ),
            },
        },
            {
                name: 'customerName',
            label: 'Terapeuta',
            options: {
                filter: true,
            },
        },
        {
            name: 'productName',
            label: 'Tipo de sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {orderList[dataIndex].productName}
                    </span>
                ),
            },
        },
        {
            name: 'date',
            label: 'Fecha',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {format(orderList[dataIndex].date, 'dd MMM, yyyy')}
                    </span>
                ),
            },
        },
        {
            name: 'status',
            label: 'Estado de la sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let status = orderList[dataIndex].status

                    switch (status) {
                        case 'tomada':
                            return (
                                <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )
                        case 'pendiente':
                            return (
                                <small className="capitalize bg-secondary border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )
                        case 'perdida':
                            return (
                                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )

                        default:
                            break
                    }
                },
            },
        },
        {
            name: 'method',
            label: 'Método de pago',
            options: {
                filter: true,
            },
        },
        {
            name: 'total',
            label: 'Costo de la sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span>${orderList[dataIndex].total.toFixed(2)}</span>
                ),
            },
        },
        {
            name: 'action',
            label: ' ',
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex) => (
                    <div className="flex items-center">
                        <div className="flex-grow"></div>
                        <Tooltip title="Dudas y aclaraciones">
                            <IconButton>
                                <Icon color="error" fontSize="small">
                                    priority_high
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        <Link to={`/invoice/${orderList[dataIndex]._id}`}>
                            <Tooltip title="View Order">
                                <IconButton>
                                    <Icon fontSize="small">
                                        arrow_right_alt
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </div>
                ),
            },
        },
    ]

    return (
        <div className="m-sm-30">
            <div className="overflow-auto">
                <div className="min-w-750">
                    <MUIDataTable
                        title={'Mis sesiones'}
                        data={orderList}
                        columns={columns}
                        options={{
                            filterType: 'textField',
                            responsive: 'standard',
                            elevation: 0,
                            rowsPerPageOptions: [10, 20, 40, 80, 100],
                            onRowsDelete: (data) => console.log(data),
                            customSearchRender: (
                                searchText,
                                handleSearch,
                                hideSearch,
                                options
                            ) => {
                                return (
                                    <Grow appear in={true} timeout={300}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={({ target: { value } }) =>
                                                handleSearch(value)
                                            }
                                            InputProps={{
                                                style: {
                                                    paddingRight: 0,
                                                },
                                                startAdornment: (
                                                    <Icon
                                                        className="mr-2"
                                                        fontSize="small"
                                                    >
                                                        search
                                                    </Icon>
                                                ),
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={hideSearch}
                                                    >
                                                        <Icon fontSize="small">
                                                            clear
                                                        </Icon>
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grow>
                                )
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const orderList = [
    {
        _id: 'lkfjdfjdsjdslgkfjdskjfds',
        date: new Date(),
        customerName: 'Ben Schieldman',
        productName: 'Bit Bass Headphone',
        method: 'PayPal',
        total: 15.25,
        status: 'tomada',
    },
    {
        _id: 'fkjjirewoigkjdhvkcxyhuig',
        date: new Date(),
        customerName: 'Joyce Watson',
        productName: 'Comlion Watch',
        method: 'Tarjeta de crédito',
        total: 75.25,
        status: 'perdida',
    },
    {
        _id: 'fdskjkljicuviosduisjd',
        date: new Date(),
        customerName: 'Kayle Brown',
        productName: 'Beats Headphone',
        method: 'Depósito',
        total: 45.25,
        status: 'pendiente',
    },
    {
        _id: 'fdskfjdsuoiucrwevbgd',
        date: new Date(),
        customerName: 'Ven Helsing',
        productName: 'BMW Bumper',
        method: 'Depósito',
        total: 2145.25,
        status: 'tomada',
    },
]
export default SessionsHistory;

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import { Calendar,Views, globalizeLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import CalendarHeader from './PatientCalendarHeader'
import * as ReactDOM from 'react-dom'
// import { getAllEvents, updateEvent } from './CalendarService'
import EventEditorDialog from './EventEditorDialog'
import globalize from 'globalize'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import ScheduleSession from './ScheduleSession'
import api from 'app/services/api'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    calendar: {
        '& .rbc-event': {
            background: 'rgba(var(--primary),1) !important',
        },
        '& .rbc-selected': {
            background: 'rgba(var(--secondary),1) !important',
        },
        '& .rbc-calendar': {
            height: 'auto',
            flexGrow: 1,
        },
        '& .rbc-header': {
            padding: '12px 16px !important',
            '& a': {
                paddingBottom: '8px !important',
            },
            '& span': {
                fontSize: '15px !important',
                fontWeight: 500,
            },
        },
    },
}))

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const localizer = globalizeLocalizer(globalize)

const DragAndDropCalendar = withDragAndDrop(Calendar)

let viewList = Object.keys(Views).map((key) => Views[key])

const PatientCalendar = ({ sessions, therapist, tid, payed }) => {
    const [events, setEvents] = useState(sessions.map((e) => ({
        title: e.thername,
        start: new Date(e.start),
        end: new Date(e.end),
    })))
    const [newEvent, setNewEvent] = useState(null)
    const [shouldShowEventDialog, setShouldShowEventDialog] = useState(false)
    const headerComponentRef = useRef(null);
    const classes = useStyles();


    const handleDialogClose = () => {
        setShouldShowEventDialog(false)
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
    useEffect(() => {
        setEvents(sessions.map((e) => ({
            title: new Date(e.start).toLocaleTimeString("es-ES", options).slice(28),
            start: new Date(e.start),
            end: new Date(e.end),
        })))
    }, [sessions])

    const openNewEventDialog = ({ action, ...event }) => {
        if (action === 'doubleClick') {
            setNewEvent(event)
            setShouldShowEventDialog(true)
        }
        
    }

    const openExistingEventDialog = (event) => {
        setNewEvent(event)
        setShouldShowEventDialog(true)
    }

    return (
        <div className="m-sm-30">
            {   payed
            ?   <Button
                    className="mb-4 h1"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{
                        height: "55px",
                    }}
                    onClick={() => {
                        openNewEventDialog({
                            action: 'doubleClick',
                            start: new Date(),
                            end: new Date().addHours(1),
                        })
                    }}
                >
                    Agenda una sesión
                </Button>
            :   null
            }
            <div
                className={clsx('h-full-screen flex-column', classes.calendar)}
            >
                <div ref={headerComponentRef} />
                <DragAndDropCalendar
                    selectable
                    localizer={localizer}
                    events={events}
                    defaultView={Views.MONTH}
                    defaultDate={new Date()}
                    startAccessor="start"
                    endAccessor="end"
                    views={viewList}
                    step={60}
                    showMultiDayTimes
                    components={{
                        toolbar: (props) => {
                            return headerComponentRef.current ? (
                                ReactDOM.createPortal(
                                    <CalendarHeader {...props} />,
                                    headerComponentRef.current
                                )
                            ) : (
                                <div>Header component not found</div>
                            )
                        },
                    }}
                    // // onNavigate={handleNavigate}
                    // onSelectEvent={(event) => {
                    //     openExistingEventDialog(event)
                    // }}
                    // onSelectSlot={(slotDetails) => {
                    //     slotDetails.end.addHours(1)
                    //     console.log(slotDetails)
                    //     openNewEventDialog(slotDetails)
                    // }}
                />
            </div>
            {shouldShowEventDialog && (
                <ScheduleSession
                    handleClose={handleDialogClose}
                    open={shouldShowEventDialog}
                    therapist={therapist}
                    tid={tid}
                />
            )}
        </div>
    )
}

export default PatientCalendar

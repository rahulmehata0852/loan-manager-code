import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'
import integractionPlugin from '@fullcalendar/interaction'
// import core from '@fullcalendar/core'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCustomers } from '../../redux/Actions/AdminAction'


const AdminCalender = () => {

    const { totalAddedCustomers, customers } = useSelector(state => state.admin)


    const handleDateClick = e => {
        console.log(e.dateStr);
    }

    const handleEventeList = e => {
        const { name, email } = e.event._def.extendedProps
        return <div className="">
            <strong className='text-red-400 bg-black rounded-2xl px-1'>{name}</strong>
            <br />
            <span></span>
        </div>
    }




    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllCustomers())
    }, [])


    return <>

        <div className="bg-sky-500 p-24">

            <div className=" bg-white p-5 rounded-md">



                <FullCalendar
                    plugins={[daygrid, integractionPlugin]}
                    initialView='dayGridMonth'
                    dateClick={handleDateClick}
                    events={customers}
                    eventContent={handleEventeList}
                />

            </div>


        </div >


    </>


}

export default AdminCalender
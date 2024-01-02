import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EmployeInvalidate } from '../../redux/Slices/EmployeeSlice'

const EmployeeProtected = ({ compo }) => {

    const { employee, logOut } = useSelector(state => state.employee)

    const dispatch = useDispatch()

    useEffect(() => {
        if (logOut) {
            toast.error("Log out successfully")
            dispatch(EmployeInvalidate())
        }
    }, [logOut])


    return employee ? compo : <Navigate to={"/"} />
}

export default EmployeeProtected
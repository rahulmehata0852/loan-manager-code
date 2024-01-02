import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserProtected = ({ compo }) => {

    const { auth } = useSelector(state => state.user)

    return auth ? compo : <>
        <Navigate to={"/"} />
        {toast.error("Log Out Successfully")}
    </>
}

export default UserProtected
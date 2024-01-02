import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../../redux/Slices/UserSlice'
import { toast } from 'react-toastify'

const UserNavbar = () => {

    const { auth } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (!auth) {
            navigate("/")
            toast.error("Log Out sUCCESSFULLY")
        }
    }, [auth])


    return <>



        <div className="navbar bg-pink-100">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/userNavbar"}>Dashboard</Link></li>
                        <li><Link to={"/userNavbar/userInstallMent"}>Customers</Link></li>
                        <li><Link to={"/ph"}>About</Link></li>
                    </ul>
                </div>


                <ul tabIndex={0} className="hidden font-medium  md:flex items-center">
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={"/userNavbar"}>Dashboard</Link></li>
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={"/userNavbar/userInstallMent"}>Installment</Link></li>
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={"/"}>About</Link></li>
                </ul>

            </div>


            <div className="dropdown md:dropdown-hover">

                <label className="md:py-1 hidden md:block font-medium px-4 bg-gradient-to-t from-sky-200 to-orange-400 rounded-md m-1">{auth && auth.name}</label>


                <button className="md:hidden py-1 font-medium px-4 bg-gradient-to-t from-sky-200 capitalize  to-orange-400 rounded-md m-1">{auth && auth.name}</button>

                <ul className="dropdown-content bg-orange-600 z-[1] hover:bg-sky-500  transition-all duration-300 menu px-3 md:py-2  text-white font-medium rounded-box">
                    <button onClick={e => dispatch(logOutUser())} className='w-full cursor-pointer'>Log Out</button>
                </ul>
            </div>
            <div className="navbar-end">







            </div>
        </div>






    </>
}

export default UserNavbar
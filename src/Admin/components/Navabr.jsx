import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOutAdmin } from '../../redux/Slices/AdminSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navabr = () => {



    const [showDropDown, setshowDropDown] = useState(true)

    const dispatch = useDispatch()

    const { auth } = useSelector(state => state.admin)
    const navi = useNavigate()
    useEffect(() => {
        if (!auth) {
            navi("/")
            toast.error("Log Out Successfully")
        }
    }, [auth])



    return <>


        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <div className="dropdown">
                                <button className='btn-sm'>
                                    <svg className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

                                    </svg></button>
                                <div className="sm:hidden dropdown-content z-[1] menu" id="mobile-menu">
                                    <div className="space-y-1 px-2 pb-3 pt-2 bg-slate-600">
                                        <Link to={"/adminNavbar"} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
                                        <Link to={"/adminNavbar/adteam"} className="hover:bg-slate-400 transition-all duration-400 hover:text-black rounded-xl block  px-3 py-2 cursor-pointer font-medium">Team</Link>
                                        <Link to={"/adminNavbar/adreqests"} className="hover:bg-slate-400 transition-all duration-400 hover:text-black rounded-xl block  px-3 py-2 cursor-pointer font-medium">Requests</Link>
                                        <Link to={"/adminNavbar/adcustomers"} className="hover:bg-slate-400 transition-all duration-400 hover:text-black rounded-xl block  px-3 py-2 cursor-pointer font-medium">Customers</Link>
                                        <Link to={"/adminNavbar/adcalender"} className="hover:bg-slate-400 transition-all duration-400 hover:text-black rounded-xl block  px-3 py-2 cursor-pointer font-medium">Calender</Link>
                                        <Link className="hover:bg-slate-400 transition-all duration-400 hover:text-black rounded-xl block  px-3 py-2 cursor-pointer font-medium">Managements</Link>
                                    </div>
                                </div>

                            </div>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className='text-black font-medium border-2 bg-gradient-to-t from-slate-500 to-sky-300 border-slate-500 p-2 rounded-xl hover:bg-sky-400  cursor-pointer'>{auth && auth.name}</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to={"/adminNavbar"} className="bg-gray-900 cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</Link>
                                <Link to={"/adminNavbar/adcustomers"} className="text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Customers</Link>
                                <Link to={"/adminNavbar/adteam"} className="text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</Link>
                                <Link to={"/adminNavbar/adreqests"} className="text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Requests</Link>
                                <Link to={"/adminNavbar/adcalender"} className="text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img onClick={e => setshowDropDown(showDropDown === true ? false : true)} className="dropdown h-8 w-8 rounded-full" src="https://media.istockphoto.com/id/1454133760/photo/blue-currency-icon-symbols-sign-indian-rupee-inr-3d-illustration-blue-background.webp?b=1&s=170667a&w=0&k=20&c=pF5TTvc7Y_DbJjhm4V_r5VLNjJQ2Xo5xyo847F2Tfvk=" alt="" />
                                </button>
                            </div>


                            <div className={`dropdown-content block absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${showDropDown === true && "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <a className="hover:bg-slate-500 transition-all duration-400 hover:text-white rounded-xl block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                <a className="hover:bg-slate-500 transition-all duration-400 hover:text-white rounded-xl block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                <a onClick={e => dispatch(LogOutAdmin())} className="hover:bg-slate-500 transition-all duration-400 hover:text-white rounded-xl block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </nav>







    </>
}

export default Navabr
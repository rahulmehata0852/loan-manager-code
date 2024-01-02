import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PublicNavbar = () => {

    const [navOpen, setNavOpen] = useState(false)
    console.log(navOpen);

    return <>

        <nav className="bg-white text-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={e => navOpen === false ? setNavOpen(true) : setNavOpen(false)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className=" block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>

                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={"/"}>  <img className="cursor-pointer h-11 w-auto rounded-full" src="https://images.unsplash.com/photo-1634757439914-23b8acb9d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Your Company" /></Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to={"/"} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</Link>
                                <Link to={"/*"} className=" hover:from-black bg-gradient-to-br hover:to-sky-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</Link>
                                <Link to={"/login"} className=" hover:from-black bg-gradient-to-br hover:to-sky-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
                                <Link to={"/register"} className=" hover:from-black bg-gradient-to-br hover:to-sky-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Register</Link>
                                <Link to={"/help"} className=" hover:from-black bg-gradient-to-br hover:to-sky-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Help</Link>
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
                                <button type="button" className="relative flex rounded-full bg-gray-800 pt-1 px-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <div className="dropdown">
                                        <label tabIndex={0} className=''>

                                            <img className="h-8 w-8 rounded-full" src="https://media.istockphoto.com/id/1454133760/photo/blue-currency-icon-symbols-sign-indian-rupee-inr-3d-illustration-blue-background.webp?b=1&s=170667a&w=0&k=20&c=pF5TTvc7Y_DbJjhm4V_r5VLNjJQ2Xo5xyo847F2Tfvk=" alt="" />
                                        </label>
                                        <ul tabIndex={0} className=" dropdown-content absolute text-left right-0  mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                            <Link to={"/login"} className="hover:bg-slate-400 hover:text-white transition-all duration-300 hover:rounded-lg block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
                                            <Link to={"/login"} className="hover:bg-slate-600 hover:text-white transition-all duration-300 hover:rounded-lg block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Login</Link>
                                            <Link to={"/register"} className="hover:bg-slate-600 hover:text-white transition-all duration-300 hover:rounded-lg block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Register</Link>
                                            <Link to={"/help"} className="hover:bg-slate-600 hover:text-white transition-all duration-300 hover:rounded-lg block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Help </Link>
                                        </ul>
                                    </div>
                                </button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${navOpen ? "block" : "hidden"}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to={"/"} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
                    <Link to={"/*"} className="bg-gradient-to-tr transition-all duration-300 from-sky-400 to-sky-100  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</Link>
                    <Link to={"/login"} className="bg-gradient-to-tr transition-all duration-300 from-sky-400 to-sky-100  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login</Link>
                    <Link to={"/register"} className="bg-gradient-to-tr transition-all duration-300 from-sky-400 to-sky-100  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Register</Link>
                    <Link to={"/help"} className="bg-gradient-to-tr transition-all duration-300 from-sky-400 to-sky-100  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Help</Link>
                </div>
            </div>
        </nav>









    </>
}

export default PublicNavbar
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EmployeInvalidate, LogOutEmployee } from '../../redux/Slices/EmployeeSlice'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EmployeeNavar = () => {

    const { employee, logOut } = useSelector(state => state.employee)

    const dispoatch = useDispatch()


    const navi = useNavigate()






    return <>







        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/employeeNavbar"}>Dashboard</Link></li>
                        <li><Link to={"/employeeNavbar/emCustomers"}>Customers</Link></li>
                        <li><Link to={""}>About</Link></li>
                    </ul>
                </div>


                <ul tabIndex={0} className="hidden font-medium  md:flex items-center">
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={"/employeeNavbar"}>Dashboard</Link></li>
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={"/employeeNavbar/emCustomers"}>Customers</Link></li>
                    <li className='cursor-pointer  hover:bg-slate-300 hover:text-sky-600 transition-all duration-300 px-3 py-1 rounded-xl'><Link to={""}>About</Link></li>
                </ul>

            </div>


            <div className="dropdown  md:dropdown-hover">
                <label className="py-1 hidden md:block font-medium px-4 bg-slate-200 rounded-md m-1">{employee && employee.name}</label>
                <button className="md:hidden py-1 font-medium px-4 bg-slate-200 rounded-md m-1">{employee && employee.name}</button>
                <ul className="dropdown-content bg-orange-600 z-[1] hover:bg-sky-500  transition-all duration-300 menu px-3 py-2 shadow text-white font-medium rounded-box">
                    <button onClick={e => dispoatch(LogOutEmployee())} className='w-full cursor-pointer'>Log Out</button>
                </ul>
            </div>
            <div className="navbar-end">


            </div>
        </div>





    </>


}
export default EmployeeNavar
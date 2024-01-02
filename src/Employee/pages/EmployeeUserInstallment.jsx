import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HiCheckBadge } from "react-icons/hi2"
import { BsCheckCircleFill, BsStopwatch, BsCoin } from "react-icons/bs"
import { GetEmployeesByEmp } from '../../redux/Actions/EmployeeAction'

const EmployeeUserInstallment = () => {


    const { id } = useParams()

    const [response, setresponse] = useState(false)


    const { customers, employee } = useSelector(state => state.employee)


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(GetEmployeesByEmp({ employeeId: employee.id, by: "employee" }))


    }, [])


    const date = new Date()
    let day = date.getDate()

    day = day > 9 ? day : `0${day}`
    let month = date.getMonth()
    month = month > 9 ? month : `0${month}`
    let year = date.getFullYear()
    const dd = `${year}-${month}-${day}`






    return customers && <>


        <div className="m-3">

            <div className={`cursor-pointer my-5 border-2 rounded-xl border-indigo-800 bg-rose-200`}>
                {
                    customers[id].by === "Admin" ?
                        <span className='text-2xl rounded-full '><HiCheckBadge className='text-yellow-500' /></span>
                        : <></>
                }
                <div

                    className={`p-4 flex flex-col md:flex-row justify-between 
                            `}
                >
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Name:</span> {customers[id].name}
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Email:</span> {customers[id].email}
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Mobile:</span> {customers[id].mobile}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Amount:</span> {customers[id].Amout_of_Loan}
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Interest:</span> {customers[id].interst_percentage}%
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Duration:</span> {customers[id].Month_duration_of_loan} Months
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Total Interest:</span>₹ {customers[id].totalInterest}
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            <span>Total Amount:</span>₹ {customers[id].totalAmount}
                        </div>
                        <div className="text-sm font-medium text-indigo-800">
                            {
                                customers[id].by === "Admin" ?
                                    <h1 className='rounded-full text-end'>By: {customers[id].by}</h1>
                                    : <><span className='rounded-full '>employeeId: {customers[id].employeeId}</span></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>









        <div className="">



            <div className="p-10">
                <div onMouseEnter={e => setresponse(true)} onMouseLeave={e => setresponse(false)} className="bg-gradient-to-r rounded-lg p-5 font-medium transition-all duration-1000 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <div className="flex justify-between items-center">
                        <h1 className=' text-white'> Remaining InstallMent : <span className='text-black'> {customers[id].installment.filter(item => item.status === "pending").length === customers[id].Month_duration_of_loan ? 0 : customers[id].installment.filter(item => item.status === "pending").length}</span></h1>
                        {
                            customers[id] && customers[id].installment.filter(item => item.status === "pending").length === 0 ? <>
                                <h1 className='flex items-center gap-2'>All installment are Payed <BsCoin className={`transition-all duration-300 ${response ? "text-info" : "text-warning"}`} /> </h1>
                            </>
                                : <h1 className=' text-white'> RemainingAmount: <span className='text-danger'>₹ {(customers[id].installment.filter(f => f.status === "pending").length) === 1 ? customers[id].EMI : customers[id].totalAmount - (customers[id].EMI * customers[id].installment.filter(item => item.status !== "pending").length)}</span></h1>
                        }

                    </div>
                    {customers[id] &&
                        customers[id].installment.map((item, i) => {



                            let itemDate = new Date(item.date)
                            let itemDay = itemDate.getDate()
                            let itemMonth = itemDate.getMonth() + 1

                            return <>
                                <div className={`rounded-xl  block transition-all duration-500  my-4  bg-white `}>
                                    <div key={i} className={`p-4 block ${item.status === "bounced" && "bg-red-600"}  ${item.status === "successed" && "alert  alert-success "} rounded-xl `}>
                                        {/* .....{itemDay} */}

                                        <div className={`flex justify-between items-center `}>


                                            <div className="md:flex gap-10 items-center ">
                                                <p>{i + 1}</p>
                                                {/* <p>{auth.date.slice(0, 5)}    {(+(auth.date.slice(5, 7)) + i) > 12 ? `0${i - 2}` : (+(auth.date.slice(5, 7)) + i)}  {auth.date.slice(7)}</p> */}
                                                {/* <p>{YEAR}-{MONTH + i > 12 ? `0${i - 2}` : MONTH + i}-{DAY}</p> */}
                                                <p>Name: <span className='capitalize'>{customers[id].name}</span> </p>

                                                <p>Date: {item.date}</p>
                                                <p>Amount:  ₹ {item.EMI} </p>

                                            </div>


                                            <div className="block">
                                                {
                                                    item.status !== "successed" && <>
                                                        <h1 className='flex items-center gap-2'><BsStopwatch className='text-warning font-bold text-xl' /> Payment Pending</h1>
                                                    </>
                                                }

                                            </div>





                                            {
                                                item.status === "successed" &&
                                                <div className="md:block hidden">
                                                    <span>Payment Received</span>
                                                </div>
                                            }
                                            {
                                                item.status === "bounced" &&
                                                <div className="md:block hidden">
                                                    <span>Bounced</span>
                                                </div>
                                            }
                                        </div>




                                    </div>
                                </div>
                            </>
                        })
                    }



                </div>
            </div >











        </div>





    </>
}

export default EmployeeUserInstallment
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsCheckCircleFill, BsPencilFill } from "react-icons/bs"
import { MdOutlineDangerous } from "react-icons/md"
import { AddCustomerHistory, GetUserRequests, RequestsActions, RequestsSendToDb, Requestsrejected } from '../../redux/Actions/AdminAction'
import { toast } from 'react-toastify'
import { AdminInvalidate } from '../../redux/Slices/AdminSlice'

const AdminRequests = () => {


    const { requests, requestUpdated, requestRejected } = useSelector(state => state.admin)

    const [selectedReq, setSelectedReq] = useState({})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUserRequests())
    }, [])


    useEffect(() => {
        if (requestUpdated) {
            toast.success("Request Approved")
            dispatch(GetUserRequests())
            dispatch(AdminInvalidate())
        }
    }, [requestUpdated])

    useEffect(() => {
        if (requestRejected) {
            toast.error("Request Rejected successfully")
            dispatch(GetUserRequests())
            dispatch(AdminInvalidate())
        }
    }, [requestRejected])



    const date = new Date()
    let day = date.getDate()


    let month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`
    let year = date.getFullYear()
    const dd = `${year}-${month}-${day}`


    console.log(selectedReq);



    return <>







        <header id="up" class="bg-center bg-fixed bg-no-repeat  bg-cover h-screen relative">
            <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center">
                <div class="mx-2 text-center">
                    <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                        <span class="text-white">Right</span> Place To
                    </h1>
                    <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                        Get a <span class="text-white">Finacial Loan</span> , <span class="text-white">Professionals</span> services
                    </h2>
                    <div class="inline-flex">
                        <button class="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">Hire US!</button>
                        <a href="#about"><button class="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">Learn More</button></a>
                    </div>
                </div>
            </div>
        </header >






        <div className="my-28">


            {


                requests && requests.length === 0 ? <>
                    <h1 className='text-4xl w-[75%] mx-auto rounded-lg font-medium text-center text-white bg-info hover:animate-bounce  p-2  transition-all duration-500 '>You  have no Loan requests 🤦‍♂️</h1>
                </>

                    : <>


                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>UserId</th>
                                        <th>Date</th>
                                        <th>Amout_of_Loan</th>
                                        <th>Month_duration</th>
                                        <th>interst_percentage</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {requests && requests.map((item, i) => <>

                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.date}</td>

                                            <td className=' '>
                                                {
                                                    selectedReq.id === item.id ? <>

                                                        <input onChange={e => setSelectedReq({ ...selectedReq, [e.target.name]: e.target.value })} className='input input-xs' value={selectedReq.Amout_of_Loan} type="text" name="Amout_of_Loan" id="" />
                                                    </>
                                                        : <h1 className='flex items-end justify-between'>{item.Amout_of_Loan} <h1 onClick={e => setSelectedReq(item)} className='text-warning text-end'><BsPencilFill /></h1></h1>
                                                }

                                            </td>



                                            <td className=' '>
                                                {
                                                    selectedReq.id === item.id ? <>

                                                        <input onChange={e => setSelectedReq({ ...selectedReq, [e.target.name]: e.target.value })} className='input input-xs' value={selectedReq.Month_duration_of_loan} type="text" name="Month_duration_of_loan" id="" />
                                                    </>
                                                        : <h1 className='flex items-end justify-between'>{item.Month_duration_of_loan} <h1 onClick={e => setSelectedReq(item)} className='text-warning text-end'><BsPencilFill /></h1></h1>
                                                }

                                            </td>
                                            <td className=' '>
                                                {
                                                    selectedReq.id === item.id ? <>

                                                        <input onChange={e => setSelectedReq({ ...selectedReq, [e.target.name]: e.target.value })} className='input input-xs' value={selectedReq.interst_percentage} type="text" name="interst_percentage" id="" />
                                                    </>
                                                        : <h1 className='flex items-end justify-between'>{item.interst_percentage} <h1 onClick={e => setSelectedReq(item)} className='text-warning text-end'><BsPencilFill /></h1></h1>
                                                }

                                            </td>



                                            <td>
                                                <button onClick={e => {
                                                    dispatch(Requestsrejected({ ...item, status: "rejected" }))
                                                }} type="button" class="btn mx-1 btn-sm btn-error btn-outline"><MdOutlineDangerous className='' /></button>




                                                <button onClick={e => {
                                                    if (Object.keys(selectedReq).length === 0) {
                                                        const copy = { ...item }
                                                        const totalAmount = Math.floor(item.totalAmount)
                                                        const EMI = Math.floor(+item.totalAmount / +item.Month_duration_of_loan)

                                                        let installment = [...Array(+item.Month_duration_of_loan).keys()].map((item, i) => {

                                                            // const installmentDate = new Date(year, month, day + i);


                                                            // const formattedDate = installmentDate.toISOString().split('T')[0];

                                                            return {
                                                                date: `${year}-${month}-${+day + i}`,
                                                                status: "pending",
                                                                EMI,
                                                                id: i + 1
                                                            };
                                                        })
                                                        dispatch(RequestsActions({ ...item, status: "succeed" }))
                                                        delete copy.id
                                                        dispatch(RequestsSendToDb({ ...copy, by: "Admin", totalAmount, installment, EMI: Math.floor(+item.totalAmount / +item.Month_duration_of_loan) }));

                                                        dispatch(AddCustomerHistory({ ...copy, by: "Admin", totalAmount, installment, EMI: Math.floor(+item.totalAmount / +item.Month_duration_of_loan) }))
                                                    }
                                                    else {


                                                        const calculateInterest = () => {
                                                            const loanDuration = parseInt(selectedReq.Month_duration_of_loan);

                                                            const dynamicInterestRate = +selectedReq.interst_percentage + (loanDuration - 1) * 0.5;

                                                            const totalInterest = (+selectedReq.Amout_of_Loan * dynamicInterestRate * loanDuration) / 12 / 100;

                                                            return Math.ceil(totalInterest)

                                                        }
                                                        const loanAmount = parseFloat(selectedReq.Amout_of_Loan);
                                                        const totalInterest = calculateInterest();
                                                        const totalAmount = loanAmount + totalInterest;



                                                        const copy = { ...selectedReq }
                                                        // const totalAmount = Math.floor(item.totalAmount)
                                                        const EMI = Math.floor(totalAmount / +selectedReq.Month_duration_of_loan)
                                                        let installment = [...Array(+selectedReq.Month_duration_of_loan).keys()].map((item, i) => {
                                                            // const installmentDate = new Date(year, month, day + i);
                                                            // const formattedDate = installmentDate.toISOString().split('T')[0];

                                                            return {
                                                                date: `${year}-${month}-${+day + i}`,
                                                                status: "pending",
                                                                EMI,
                                                                id: i + 1
                                                            };
                                                        })
                                                        dispatch(RequestsActions({ ...item, status: "succeed" }))
                                                        delete copy.id
                                                        dispatch(RequestsSendToDb({ ...copy, by: "Admin", installment, totalAmount, totalInterest, EMI }));

                                                        dispatch(AddCustomerHistory({ ...copy, by: "Admin", installment, totalAmount, totalInterest, EMI }))

                                                    }
                                                }} type="button" class="btn mx-1 btn-sm btn-success btn-outline"><BsCheckCircleFill /></button>
                                            </td >
                                        </tr >

                                    </>)}


                                </tbody>



                            </table>
                        </div>





                    </>


            }




        </div >










    </>
}

export default AdminRequests
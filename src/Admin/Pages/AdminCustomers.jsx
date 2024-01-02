import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCustomers, GetCustomerHistory } from '../../redux/Actions/AdminAction'
import { Link } from 'react-router-dom'

const AdminCustomers = () => {


    const { customers } = useSelector(state => state.admin)





    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllCustomers())
    }, [])



    return <>




        <div className="">


            <div className="flex w-full flex-col md:flex-row gap-4 items-center p-6">

                <div className="w-full">

                    <img className='shadow-lg rounded-lg' src="https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.webp?b=1&s=170667a&w=0&k=20&c=HAWhzN0Kim1HYbxMy-KhcQUtv6sHfXz15oEnTdGefHc=" alt="" />
                </div>
                <div className="w-full">
                    <h1 className='text-2xl  font-bold'>A space for your team to add internal notes, comments, or observations related to the customer. This facilitates collaboration among team members.</h1>
                </div>



            </div>

        </div>



        {/* table start */}

        <div className="p-1 my-8">



            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Loan_Amt</th>
                            <th>Months  </th>
                            <th>Remaining Installment</th>
                            <th>EMI</th>
                            <th>TotalAmount</th>
                            <th>History</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            customers && customers.map(item => <tr>

                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.Amout_of_Loan}</td>
                                <td>{item.Month_duration_of_loan}</td>
                                <td>{item.installment && item.installment.filter(f => f.status === "pending").length}</td>
                                <td>{item.EMI}</td>
                                <td>{item.totalAmount}</td>
                                <td><Link onClick={e => dispatch(GetCustomerHistory(item.id))} to={"/adminNavbar/adcustomersHistory"} className='btn btn-warning btn-sm'>History</Link></td>


                            </tr>)
                        }




                    </tbody>

                </table>
            </div>


        </div>




        {/* table end */}






    </>
}

export default AdminCustomers
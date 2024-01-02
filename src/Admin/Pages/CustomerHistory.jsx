import React from 'react'
import { useSelector } from 'react-redux'

const CustomerHistory = () => {

    const { customerHistory } = useSelector(state => state.admin)
    console.log(customerHistory);
    return <>
        <div className=" h-screen mt-6 p-4">


            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">

                {
                    customerHistory && customerHistory.map(item => <div className=''>

                        <div className={`card card-compact bg-base-100 shadow-xl ${item.status === "pending" ? "bg-warning" : item.status === "rejected" ? "bg-error" : "bg-green-300"}`}>

                            <div className="card-body">
                                <h2 className="card-title justify-between items-center capitalize">{item.name} <span className='text-xs badge badge-secondary'>{item.date}</span> </h2>
                                <div className="">
                                    <div className="flex mb-2 justify-between ">
                                        <p className='h-5  font-medium text-info my-1'>Amount:{item.Amout_of_Loan}</p>
                                        <p className='h-5  font-medium text-secondary my-1'>Duration: {item.Month_duration_of_loan} Months</p>
                                    </div>

                                    <p className='my-1 font-medium'>Email: {item.email}</p>
                                    <p className='my-1 font-medium'>Mobile: {item.mobile}</p>
                                    <p className='my-1 font-medium'>Interst: {item.interst_percentage}%</p>
                                    <p className='my-1 font-medium'>Interst Amount: ₹ {item.totalInterest}</p>
                                </div>
                                <div className="card-actions  justify-end">
                                    <p className='badge'>Total Amount : ₹ {item.totalAmount}</p>
                                </div>
                            </div>

                        </div>



                    </div>)


                }


            </div>

        </div>






    </>
}

export default CustomerHistory
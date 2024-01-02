import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetEmployeesByEmp } from '../../redux/Actions/EmployeeAction'

const EmployerCustomers = () => {


    const { employee, customers, EmployeeAdded } = useSelector(state => state.employee)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetEmployeesByEmp({ employeeId: employee.id, by: "employee" })
        )
    }, [])

    return <>
        <div className="">

            <Link to={"/employeeNavbar"} className="btn btn-primary m-3">Go Back</Link>
            <div className="hero h-80 rounded-xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-5xl font-bold">The Money Magicians <strong>⭐   </strong> !</h1>
                        <p className="py-6">Our team primary goal is efficiently process loan applications, balancing the need for quick decisions with thorough risk assessment.</p>
                    </div>
                </div>
            </div>
        </div>



        <div className="my-11 mx-3">
            {
                !customers && <>


                    <h1 className='text-4xl font-medium text-info text-center animate-bounce'>You have no customers</h1>
                </>
            }

            <div className="md:grid grid-cols-3 gap-4 flex flex-col">

                {
                    customers && customers.map((item, i) => <>


                        <div className="card card-compact bg-warning  shadow-xl">
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
                                <div className="card-actions my-2 justify-end">
                                    <p className='badge'>Total Amount : ₹ {item.totalAmount}</p>
                                </div>
                            </div>
                        </div>


                    </>)



                }


            </div>






        </div>







    </>
}

export default EmployerCustomers
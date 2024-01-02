import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDymanicForm from '../../hooks/useDynamicForm'
import { AddEmployeesByEmp, GetEmployeesByEmp } from '../../redux/Actions/EmployeeAction'
import { EmployeInvalidate } from '../../redux/Slices/EmployeeSlice'
import { HiCheckBadge } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { AddCustomerHistory, GetAllCustomers } from '../../redux/Actions/AdminAction'


const EmployerDashboard = () => {


    const { employee, customers, EmployeeAdded } = useSelector(state => state.employee)
    const { customers: acustomers } = useSelector(state => state.admin)


    const dispatch = useDispatch()



    const handleClick = e => {

        const calculateInterest = () => {
            const loanDuration = parseInt(state.Month_duration_of_loan);

            const dynamicInterestRate = +state.interst_percentage + (loanDuration - 1) * 0.5;

            const totalInterest = (+state.Amout_of_Loan * dynamicInterestRate * loanDuration) / 12 / 100;

            return Math.ceil(totalInterest)

        }
        const loanAmount = parseFloat(state.Amout_of_Loan);
        const totalInterest = calculateInterest();
        const totalAmount = loanAmount + totalInterest;

        console.log(totalAmount);
        const date = new Date()
        let day = date.getDate()

        day = day > 9 ? day : `0${day}`
        let month = date.getMonth() + 1
        month = month > 9 ? month : `0${month}`
        let year = date.getFullYear()
        const dd = `${year}-${month}-${day}`

        let EMI = Math.ceil(+totalAmount / +state.Month_duration_of_loan)



        let installment = [...Array(+state.Month_duration_of_loan).keys()].map((item, i) => {

            // const installmentDate = new Date(year, month, day + i);


            // const formattedDate = installmentDate.toISOString().split('T')[0];


            return {
                date: `${year}-${month}-${+day + i}`,
                status: "pending",
                EMI,
                id: i + 1
            };
        })

        dispatch(AddEmployeesByEmp({ ...state, totalAmount, totalInterest, EMI, installment, date: dd, by: "employee", employeeId: employee.id }))
        const userId = 1 + acustomers.length




        dispatch(AddCustomerHistory({ ...state, totalAmount, userId, totalInterest, EMI, installment, date: dd, by: "employee", employeeId: employee.id }))

    }



    useEffect(() => {
        dispatch(GetAllCustomers())
    }, [])

    useEffect(() => {
        dispatch(GetEmployeesByEmp({ employeeId: employee.id, by: "employee" }))

    }, [])


    useEffect(() => {
        if (EmployeeAdded) {

            dispatch(GetEmployeesByEmp({ employeeId: employee.id, by: "employee" }))
            dispatch(EmployeInvalidate())
            toast.success("Customer Addedd Successfully")
        }
    }, [EmployeeAdded])





    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "email", type: "email" },
        { fieldName: "password", type: "password" },
        { fieldName: "mobile", type: "number" },
        { fieldName: "Amout_of_Loan", type: "number" },
        { fieldName: "interst_percentage", type: "select", options: ["0.50", "1.00", "2.00", "2.5", "5", "10"] },
        { fieldName: "Month_duration_of_loan", type: "select", options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { fieldName: "Add Customer Loan", value: "Add Employee", type: "submit", onClick: handleClick },
    ]



    const [ui, state, pre] = useDymanicForm(config)




    const Duration = +state.Month_duration_of_loan

    const InterestRate = +state.interst_percentage + (Duration - 1) * 0.5;

    const totaltInt = (+state.Amout_of_Loan * +InterestRate * Duration) / 12 / 100;







    return employee && <>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col items-end lg:flex-row md:gap-5">
                <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" className="w-auto md:h-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Money Magicians!</h1>
                    <p className="py-6">The team's primary goal is to efficiently process loan applications, balancing the need for quick decisions with thorough risk assessment.</p>
                    <div className="ps-2 mt-7">

                        <button onClick={() => window.my_modal_3.showModal()} className="btn btn-primary">Add Customers</button>
                    </div>
                </div>
            </div>
        </div>





        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Interest Avengers"!</h3>
                    <h3 className="font-bold text-lg">ToalIntrest : ₹ {totaltInt || 0}</h3>
                </div>

                {ui}
            </form>
        </dialog>







        {/* Customers print */}


        <div className="bg-gradient-to-r my-5 from-indigo-500 via-indigo-600 to-indigo-700 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg transition-all duration-1000">
                {customers && customers.length === 0 ?
                    <div className="flex justify-between">
                        <h1 className='font-medium text-4xl text-warning animate-bounce'>You Have No Customers !!</h1>
                        <button onClick={() => window.my_modal_3.showModal()} className="btn btn-primary">Add Customers</button>

                    </div>

                    : <>

                        {

                            customers && customers.map((item, index) => (
                                <Link to={`/employeeNavbar/emuserInstallment/${index}`}>
                                    <div key={item.id} className={` my-5 border-2 rounded-xl border-indigo-800 ${index % 2 === 0 ? 'bg-indigo-100' : 'bg-indigo-200'}`}>
                                        {
                                            item.by === "Admin" ?
                                                <span className='text-2xl rounded-full '><HiCheckBadge className='text-yellow-500' /></span>
                                                : <>
                                                </>
                                        }
                                        <div

                                            className={`p-4 flex flex-col md:flex-row justify-between 
                                `}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Name:</span> {item.name}
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Email:</span> {item.email}
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Mobile:</span> {item.mobile}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Amount:</span>₹ {item.Amout_of_Loan}
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Interest:</span> {item.interst_percentage}%
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Duration:</span> {item.Month_duration_of_loan} Months
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Date:</span> {item.date}
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Total Interest:</span> ₹ {item.totalInterest}
                                                </div>
                                                <div className="text-sm font-medium text-indigo-800">
                                                    <span>Total Amount:</span>₹ {item.totalAmount}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}



















                    </>
                }
            </div>
        </div>














    </>
}

export default EmployerDashboard
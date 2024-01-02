import React, { useEffect, useRef } from 'react'
import useDymanicForm from '../../hooks/useDynamicForm'
import { HiCheckBadge } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux'
import { AddCustomerHistory, AddCustomers, GetAllCustomers } from '../../redux/Actions/AdminAction'
import { AdminInvalidate } from '../../redux/Slices/AdminSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { GetAlllDetailsOfComapany } from '../../redux/Actions/UserAction';
import gsap from 'gsap';

const Dashboard = () => {


    const dispatch = useDispatch()
    const { customers, customerAdded, error } = useSelector(state => state.admin)
    const { h_user, h_employees, UserRegistered } = useSelector(state => state.user)

    const date = new Date()

    let day1 = date.getDate()

    day1 = day1 > 9 ? day1 : `0${day1}`
    let month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`
    let year = date.getFullYear()
    let MonthsProfit = 0


    const dd = `${year}-${month}-${day1}`
    useEffect(() => {
        if (customerAdded) {

            dispatch(GetAllCustomers())
            dispatch(AdminInvalidate())
            toast.success("Customer Added Successfully")
        }
    }, [customerAdded])

    useEffect(() => {

        dispatch(GetAllCustomers())
    }, [])


    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])



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


        const date = new Date()

        let day = date.getDate()

        day = day > 9 ? day : `0${day}`

        let month = date.getMonth() + 1
        month = month > 9 ? month : `0${month}`
        let year = date.getFullYear()
        const dd = `${year}-${month}-${day}`

        // TOTAL Monthly EMI
        let EMI = Math.floor(+totalAmount / +state.Month_duration_of_loan)

        let installment = [...Array(+state.Month_duration_of_loan).keys()].map((item, i) => {

            const installmentDate = new Date(year, month, day + i);


            return {
                date: `${year}-${month}-${+day + i}`,
                status: "pending",
                EMI,
                id: i + 1
            };
        })













        const userId = 1 + customers.length




        dispatch(AddCustomers({ ...state, totalAmount, totalInterest, installment, date: dd, EMI, by: "Admin" }))

        dispatch(AddCustomerHistory({ ...state, totalAmount, userId, totalInterest, installment, date: dd, EMI, by: "Admin" }))

    }





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

    const AllMonthsArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];



    const Duration = +state.Month_duration_of_loan

    const InterestRate = +state.interst_percentage + (Duration - 1) * 0.5;

    const totaltInt = (+state.Amout_of_Loan * +InterestRate * Duration) / 12 / 100;




    let ttt = 0
    h_user && h_user.map(item => item.totalInterest ? ttt += item.totalInterest : ttt)

    const newdate = new Date()
    const newMonths = newdate.getMonth()



    h_user && h_user.filter(item => item.totalInterest ? (new Date(item.date).getMonth() === newMonths ? MonthsProfit += item.totalInterest : MonthsProfit) : MonthsProfit)

    let newUserOfToday = 0
    newUserOfToday = h_user && h_user.filter(f => f.date === dd).length


    let newEmployees = 0
    newEmployees = h_employees && h_employees.filter(f => f).length


    const MonthsProfitRef = useRef(null);
    const tttRef = useRef(null);
    const newUserRef = useRef(null);
    const newEmpRef = useRef(null);


    useEffect(() => {
        const animateNumbers = () => {
            // Round the numbers to 0 decimal places
            const roundedMonthsProfit = Math.round(MonthsProfit);
            const roundedTtt = Math.round(ttt || 0);
            const roundednewUser = Math.round(+(h_user && h_user.filter(f => f.date === dd).length) || 0);
            const roundedEmployee = Math.round(+(h_employees && h_employees.filter(f => f).length) || 0);




            gsap.fromTo(
                newEmpRef.current,
                { innerHTML: '0' },
                {
                    duration: 1,
                    innerHTML: `${roundedEmployee}`,
                    ease: 'power2.inOut',
                }
            );

            gsap.fromTo(
                MonthsProfitRef.current,
                { innerHTML: '0' },
                {
                    duration: 2,
                    innerHTML: `${roundedMonthsProfit}`,
                    ease: 'power2.inOut',
                }
            );

            gsap.fromTo(
                tttRef.current,
                { innerHTML: '0' },
                {
                    duration: 2,
                    innerHTML: `${roundedTtt}`,
                    ease: 'power2.inOut',
                }
            );

            gsap.fromTo(
                newUserRef.current,
                { innerHTML: '0' },
                {
                    duration: 1,
                    innerHTML: `${roundednewUser}`,
                    ease: 'power2.inOut',
                }
            );
        };

        animateNumbers();
    }, [MonthsProfit, ttt, newUserOfToday, newEmployees]);


    useEffect(() => {
        dispatch(GetAlllDetailsOfComapany())
    }, [])


    return <>


        <div className="mx-auto  p-9 bg-base-200">
            <div className="">
                <div className="w-full text-center">


                    <h1 className="text-5xl transition-all duration-1000 hover:text-red-600  font-bold hover:animate-ping">Hello there</h1>



                    <p className="pt-12 font-normal font-serif">"Discover our user-friendly loan management website, designed to streamline your financial journey. Enjoy the benefits of low-interest rates while effortlessly managing your loans."</p>



                    {/* statics start */}
                    <div className=" md:px-14 my-4">
                        <div className="stats bg-gradient-to-r from-yellow-500 to-rose-500 md:flex-row flex-col gap-4 flex justify-between items-center w-full h-full my-8 shadow">

                            <div className="border-b border-green-500   stat md:w-[33%]">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="stat-title font-medium">Total Profit In Month</div>
                                <div className="stat-value my-2" ref={MonthsProfitRef}>{MonthsProfit || 0}</div>
                                <div className="stat-desc text-capitalize w-full flex justify-between font-medium"><p>{AllMonthsArr[date.getMonth()]} 1st  - {AllMonthsArr[date.getMonth() + 1]} 1st</p>
                                    <p className='ps-7 font-medium' >Total Profit: <span ref={tttRef}>{ttt}</span></p>  </div>
                            </div>


                            <div className="border-b border-green-500  stat md:w-[33%]">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title font-medium">New Users</div>
                                <div className="stat-value my-2" ref={newUserRef}>{newUserOfToday}</div>
                                <div className="stat-desc flex justify-between font-medium">TotalUsers : {h_user && h_user.filter(f => f).length} <span className='font-medium'> ↗︎ 400 (22%)</span></div>
                            </div>



                            <div className="border-b border-green-500  stat md:w-[33%]">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title font-medium">New Employees</div>
                                <div className="stat-value  my-2" ref={newEmpRef}>{newEmployees}</div>
                                <div className="stat-desc font-medium">↘︎ 90 (14%)</div>
                            </div>

                        </div>
                    </div>
                    {/* statics end */}




                    <div className="text-center">


                        <p className=''><strong>Note:</strong> Your duration of loan is increasing the the interst of your money. So duration is costly for you</p>
                    </div>
                </div>

            </div>
            <h1></h1>
        </div>

        <div className="text-end pe-10 pt-3">
            <button onClick={() => window.my_modal_3.showModal()} className="btn btn-primary ">Add Customer</button>
        </div>


        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <h3 className="font-bold text-lg">ToalIntrest : ₹ {totaltInt || 0}</h3>

                </div>

                {ui}

            </form>
        </dialog>




        <div className="bg-gradient-to-r my-9 from-indigo-500 via-indigo-600 to-indigo-700 min-h-screen ">
            <div className="flex items-center  justify-center">

                <div className="w-full max-w-4xl p-8 my-20 bg-white rounded-lg shadow-lg transition-all duration-1000">
                    {
                        customers && customers.length === 0 && <>

                            <h1 className='text-4xl font-medium text-center text-white bg-gradient-to-tr p-2 from-pink-500 to-sky-200 hover:animate-bounce hover:from-amber-500 transition-all duration-500 '>You company have no customers</h1>
                        </>
                    }
                    {
                        (customers && customers.length !== 0 && customers[0] && !customers[0].Amout_of_Loan) && <>

                            <h1 className='text-4xl font-medium text-center text-white bg-gradient-to-tr p-2 from-pink-500 to-sky-200 hover:animate-bounce hover:from-amber-500 transition-all duration-500 '>You company have no customers</h1>
                        </>
                    }



                    {customers && customers.map((item, index) => (
                        item.Amout_of_Loan &&
                        <Link to={`/adminNavbar/adminInstallMent/${index}`}>

                            <div key={item.id} className={`cursor-pointer my-5 border-2 rounded-xl border-indigo-800 ${index % 2 === 0 ? 'bg-indigo-100' : 'bg-indigo-200'}`}>
                                {
                                    item.by === "Admin" ?
                                        <span className='text-2xl rounded-full '><HiCheckBadge className='text-yellow-500' /></span>
                                        : <></>
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
                                            <span>Amount:</span> {item.Amout_of_Loan}
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
                                            <span>Total Interest:</span>₹ {item.totalInterest}
                                        </div>
                                        <div className="text-sm font-medium text-indigo-800">
                                            <span>Total Amount:</span>₹ {item.totalAmount}
                                        </div>
                                        <div className="text-sm font-medium text-indigo-800">
                                            {
                                                item.by === "Admin" ?
                                                    <h1 className='rounded-full text-end'>By: {item.by}</h1>
                                                    : <><span className='rounded-full '>employeeId: {item.employeeId}</span></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>



    </>
}

export default Dashboard
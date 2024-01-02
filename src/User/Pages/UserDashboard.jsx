import React, { useEffect, useState } from 'react'
import useDymanicForm from '../../hooks/useDynamicForm'
import { useDispatch, useSelector } from 'react-redux'
import { GetRequestLoan, RequestLoan } from '../../redux/Actions/UserAction'
import { toast } from 'react-toastify'
import { userInvalidate } from '../../redux/Slices/UserSlice'

const UserDashboard = () => {

    const { loanRequested, error, auth, requests } = useSelector(state => state.user)


    const [ErrorPrint, setErrorPrint] = useState(false)

    const dispatch = useDispatch()

    const handleClick = e => {

        if (auth.totalAmount && +auth.Month_duration_of_loan !== (auth.installment.filter(f => f.status === "successed").length)) {
            toast.dark(`You can't send loan request After completion of previous loan you can send loan request`)
        } else {



            const calculateInterest = () => {
                const loanDuration = parseInt(state.Month_duration_of_loan);

                const dynamicInterestRate = +state.interst_percentage + (loanDuration - 1) * 0.5;

                const totalInterest = (+state.Amout_of_Loan * dynamicInterestRate * loanDuration) / 12 / 100;

                return totalInterest

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


            dispatch(RequestLoan({ ...state, totalAmount, totalInterest, date: dd, userId: auth.id, status: "pending" }))
            dispatch(userInvalidate())
        }
    }






    useEffect(() => {
        if (loanRequested) {
            dispatch(GetRequestLoan(auth.id))
            toast.success("Loan requested successfully")
        }
    }, [loanRequested])

    useEffect(() => {
        dispatch(GetRequestLoan(auth.id))

    }, [])


    useEffect(() => {
        if (error) {
            setErrorPrint(true)
        }
    }, [error])

    const ErrorPrintFn = e => {

        return <>

            <div className={`bg-light transition-all duration-1000 w-48 inline-block fixed bottom-9 left-4 ${ErrorPrint ? "opacity-95" : "opacity-0"}`}>
                <div className="px-2 rounded-md bg-success border-2 border-pink-500  text-light">
                    <h1 onClick={e => setErrorPrint(false)} className='text-end text-danger font-medium cursor-pointer'>x</h1>
                    <h1 className='p-1 pb-4 font-normal'>{error}</h1>
                </div>
            </div>

        </>
    }


    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "email", type: "email" },
        { fieldName: "password", type: "password" },
        { fieldName: "mobile", type: "number" },
        { fieldName: "Amout_of_Loan", type: "number" },
        { fieldName: "interst_percentage", type: "select", options: ["0.50", "1.00", "2.00", "2.5", "5", "10"] },
        { fieldName: "Month_duration_of_loan", type: "select", options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
        { fieldName: "Add Loan Request", value: "Add Employee", type: "submit", onClick: handleClick },
    ]



    const [ui, state, pre] = useDymanicForm(config)


    return <>

        {Error && <ErrorPrintFn />}

        <div className="">


            <div className="">

                <div className="mx-auto max-w-2xl md:py-20 py-48 ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3  text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding. <a className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Stay On Top of Your Loans, Stress-Free.</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Loan Management at Your Fingertips, Anytime, Anywhere. Efficient Loan Tracking for a Brighter Financial Future.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a onClick={() => window.my_modal_3.showModal()} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                            <a className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        {auth &&
            auth.Amout_of_Loan &&
            +auth.Month_duration_of_loan !== (auth.installment.filter(f => f.status === "successed").length) ? <>
            <div className="p-5">
                <h1 className='text-center animate-bounce text-2xl text-info font-medium'>Active Loan</h1>

                <div className={` my-5 border-2 rounded-xl border-rose-400 shadow-lg  bg-green-400`}>

                    <div

                        className={`p-4 flex flex-col md:flex-row justify-between 
                    `}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Name:</span> {auth.name}
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Email:</span> {auth.email}
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Mobile:</span> {auth.mobile}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Amount:</span> {auth.Amout_of_Loan}
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Interest:</span> {auth.interst_percentage}%
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Duration:</span> {auth.Month_duration_of_loan} Months
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Date:</span> {auth.date}
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Total Interest:</span>₹ {auth.totalInterest}
                            </div>
                            <div className="text-sm font-medium text-indigo-800">
                                <span>Total Amount:</span>₹ {auth.totalAmount}
                            </div>


                        </div>
                    </div>
                </div>





            </div>


        </>

            : <div className='p-16 text-center '>
                <h1 className='text-4xl font-medium animate-bounce text-warning'>You Have No Active Loan</h1>

            </div>
        }






        {/* Requests */}

        {
            requests ? <>


                <div className="m-6">
                    <h1 className='text-center my-5 text-5xl font-medium text-info '>Your requests</h1>
                    <h1 className='text-right my-5'>
                        <a onClick={() => window.my_modal_3.showModal()} className="rounded-md bg-success px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Add Requests</a>

                    </h1>

                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4">

                        {
                            requests && requests.map(item => <div className=''>

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
                                            <h1 className={`font-bold ${item.status === "pending" ? "text-white" : item.status === "rejected" ? "text-black" : "text-success"}`}>Status : {item.status}</h1>
                                        </div>
                                    </div>

                                </div>



                            </div>)


                        }


                    </div>



                </div>


            </>

                : <>
                    <h1 className='text-center w-full font-semibold text-5xl my-10 text-info'> You Have no request</h1>
                    <div className="text-end me-4 my-2">

                        <h1 onClick={() => window.my_modal_3.showModal()} className={`cursor-pointer rounded-md btn btn-primary  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>Add Loan Request</h1>
                    </div>

                </>

        }












        <dialog id="my_modal_3" className="modal bg-cover bg-[url('https://media.istockphoto.com/id/1495348546/photo/signature-contract-and-deal-with-hands-of-business-people-for-partnership-meeting-and.webp?b=1&s=170667a&w=0&k=20&c=cYrvSnUHosQysLk6cynIi99sTecOzUdELqeMxGqmEfw=')]">
            <form method="dialog" className="modal-box bg-gradient-to-t from-orange-500 to-sky-500">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>

                <div className="">{ui}</div>

            </form>
        </dialog>




















    </>
}

export default UserDashboard
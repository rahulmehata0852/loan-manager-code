import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsCheckCircleFill, BsCashCoin, BsCash, BsCoin } from "react-icons/bs"
import { UserInstallmentPay, UserLogin, userInstallmentBounced } from '../../redux/Actions/UserAction'
import { userInvalidate } from '../../redux/Slices/UserSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const UserInstallment = () => {

    const { auth, UserInstallMentPay } = useSelector(state => state.user)


    useEffect(() => {
        if (!auth) {
            navi("/")
        }
    }, [auth])





    const [response, setresponse] = useState(false)

    const date = new Date()
    let day = date.getDate()

    day = day > 9 ? day : `${day}`
    let month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`
    let year = date.getFullYear()
    const dd = `${year}-${month}-${day}`

    const dispatch = useDispatch()

    useEffect(() => {
        if (UserInstallMentPay) {
            dispatch(UserLogin({ email: auth.email, password: auth.password, role: "user" }))
            dispatch(userInvalidate())
            toast.success("InstallMent Paid successFully")
        }
    }, [UserInstallMentPay])


    const navi = useNavigate()





    const handleInstallmentPay = (item, index, itemDay) => {
        if (itemDay == day) {
            // This installment has already been paid, do nothing

            const updatedItem = { ...item, status: "successed" }
            const updatedInstallment = [...auth.installment]
            updatedInstallment[index] = updatedItem

            const updatedAuth = { ...auth }
            updatedAuth.installment = updatedInstallment

            delete updatedAuth.id


            dispatch(UserInstallmentPay({
                ...updatedAuth, userId: auth.id
            }))

        }
        else {
            toast.dark(" Please make the payment on the scheduled due date.")
        }

    };



    const copy = { ...auth }
    delete copy.id

    let updatedInstallment = []

    if (auth.installment) {

        updatedInstallment = [...auth.installment]
    }



    return auth.totalAmount ? <>

        <div className="p-10 transition-all duration-500">
            <div onMouseEnter={e => setresponse(true)} onMouseLeave={e => setresponse(false)} className="bg-gradient-to-r rounded-lg p-5 font-medium transition-all duration-1000 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="flex justify-between items-center">
                    <h1 className=' text-white'> Remaining InstallMent : <span className='text-black'> {((auth.installment.filter(f => f.status !== "successed")).length) || 0}</span></h1>
                    {
                        auth.installment === +auth.Month_duration_of_loan ? <>
                            <h1 className='flex items-center gap-2'>All installment are Payed <BsCoin className={`transition-all duration-300 ${response ? "text-info" : "text-warning"}`} /> </h1>
                        </>
                            : <h1 className=' text-white'> RemainingAmount: <span className='text-danger'>₹ {(auth.totalAmount - (auth.EMI * auth.installment.filter(f => f.status === "successed").length) || auth.totalAmount)}</span></h1>
                    }

                </div>


                {auth &&
                    auth.installment.map((item, i) => {


                        let itemDate = new Date(item.date)
                        let itemDay = itemDate.getDate()
                        let itemMonth = itemDate.getMonth() + 1


                        console.log(itemDay);
                        useEffect(() => {

                            if (itemMonth <= month && itemDay < day && item.status !== "successed") {

                                const updatedItem = { ...item, status: "bounced" }

                                updatedInstallment[i] = updatedItem

                                copy.installment = updatedInstallment


                                dispatch(userInstallmentBounced(copy))
                            }
                        }, [])

                        return <>
                            <div className={`rounded-xl  block transition-all duration-500  my-4  bg-white `}>

                                <div key={i} className={`p-4 block ${itemMonth <= month && itemDay < day && item.status !== "successed" && "bg-red-600"}  ${item.status === "successed" && "alert  alert-success "} rounded-xl `}>
                                    {/* .....{itemDay} */}

                                    <div className={`flex justify-between items-center `}>


                                        <div className="md:flex gap-10 items-center ">
                                            <p>{i + 1}</p>
                                            {/* <p>{auth.date.slice(0, 5)}    {(+(auth.date.slice(5, 7)) + i) > 12 ? `0${i - 2}` : (+(auth.date.slice(5, 7)) + i)}  {auth.date.slice(7)}</p> */}
                                            {/* <p>{YEAR}-{MONTH + i > 12 ? `0${i - 2}` : MONTH + i}-{DAY}</p> */}
                                            <p>Name: <span className='capitalize'>{auth.name}</span> </p>

                                            <p>Date: {item.date}</p>
                                            <p>Amount:  ₹ {item.EMI} </p>

                                        </div>


                                        <div className="block">

                                            <button onClick={e => handleInstallmentPay(item, i, itemDay)
                                            } type="button" className={`btn ${itemMonth <= month && itemDay < day && item.status !== "successed" && "btn-disabled"}  ${item.status === "successed" ? "btn-warning btn-disabled" : "btn-outline btn-success"} `}><BsCheckCircleFill /></button>

                                        </div>





                                        {
                                            item.status === "successed" &&
                                            <div className="md:block hidden">
                                                <span>Paid Successfully</span>
                                            </div>
                                        }
                                        {
                                            itemMonth <= month && itemDay < day && item.status !== "successed" &&
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

    </>
        : <>

            <h1 className='p-11 text-center text-4xl hover:animate-bounce text-info font-medium'>You Have No Active Loan</h1>

        </>

}




export default UserInstallment
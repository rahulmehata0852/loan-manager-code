import React from 'react'

const Help = () => {
    return <>

        <div className="w-100 text-center mx-auto">


            <div className="p-32 text-center h-72  bg-[url('https://plus.unsplash.com/premium_photo-1672582776172-fd4c2e10bd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D')]">
                <h1 className='text-center text-5xl font-bold text-white  '>Help center</h1>            </div>




            <div className="md:mx-64 p-5 text-left">

                <h1 className='font-bold my-4' >Admin:</h1>
                <p>
                    <li>Admin email & password  :
                        <li className='ms-12 font-semibold'>email: rahulmahato0852@gmail.com</li>
                        <li className='ms-12 font-semibold'>password: 123 </li>

                    </li>

                </p>
                <p className='mt-4'>
                    <li>Descriptiopn:
                        <li className='ms-12'>Admin is the owner of This loan management site. </li>
                        <li className="ms-12">Admin can add Employee or Loan Customers,</li>
                        <li className="ms-12">In Admin panel 5 Components.</li>


                    </li>
                </p>
                <li style={{ listStyleType: "number" }} className=" ms-20">Dashboard</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Team</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Customers</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Requests</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Calender</li>


                <li className='ms-10 mt-2'>In Dashboard Page Admin can see a users loan and user loan payment history. </li>
                <li className="ms-10 mt-1">Team page shows number of Employee or Team member. Admin can see employee loan users and how many customers added by each employee</li>
                <li className='ms-10 mt-1'>Customers page is shown the Total number of customers and customer loans. </li>
                <li className="ms-10 mt-1">Request page shows the Total requests of customer loans sent by customer for loan approval.</li>
                <li className="ms-10 mt-1">Calender page have Full calender in which customer name is print in calender as his loan date</li>

            </div>




            <div className="md:mx-64 p-5 text-left">

                <h1 className='font-bold my-4' >Employee:</h1>
                <p>
                    <li>Employee email & password  : Employee email & password is created by admin when admin add's employee.

                    </li>

                </p>
                <p className='mt-4'>
                    <li>Descriptiopn:
                        <li className='ms-12'>Employee is the employee of This loan management site. </li>
                        <li className="ms-12">Employee can add  Loan Customers.</li>
                        <li className="ms-12">In Employee panel 3 Components.</li>


                    </li>
                </p>
                <li style={{ listStyleType: "number" }} className=" ms-20">Dashboard</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Customers</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">About</li>


                <li className='ms-10 mt-2'>In Dashboard Page employee can see a users loan and user loan payment history. </li>

                <li className='ms-10 mt-1'>Customers page is shown the Total number of customers and customer loans and customer payment history. </li>

                <li className="ms-10 mt-1">Their is nothing in feature I will add data on This page.</li>

            </div>


            <div className="md:mx-64 p-5 text-left">

                <h1 className='font-bold my-4' >Customer:</h1>
                <p>
                    <li className='font-semibold'>Customer email & password  : Customer email & password is created by admin when admin add's Admin or Employee or Register method.

                    </li>

                </p>
                <p className='mt-4'>
                    <li>Descriptiopn:
                        <li className='ms-12'>Customer is the customer or user of This loan management site. </li>
                        <li className="ms-12">Customer can send  Loan request to admin.</li>
                        <li className="ms-12">In Employee panel 3 Components.</li>


                    </li>
                </p>
                <li style={{ listStyleType: "number" }} className=" ms-20">Dashboard</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">Installment</li>
                <li style={{ listStyleType: "number" }} className=" ms-20">About</li>


                <li className='ms-10 mt-2'>In Dashboard Page Customer can see a his loan and his loan payment history. </li>

                <li className='ms-10 mt-1'>Installment page is shown the his loan amout installments when user can not make payment on due date his installment got bounced . </li>

                <li className="ms-10 mt-1">Their is nothing in feature I will add data on This page.</li>


                <li className='font-bold my-11'>Note : Their is not a real payment fake payment can send on user data, we will provide real payment in future.</li>

            </div>









        </div>






    </>
}

export default Help
import React, { useEffect, useRef } from 'react'
import { BsFillStarFill, BsStarFill } from "react-icons/bs"
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAlllDetailsOfComapany } from '../redux/Actions/UserAction'
import { userInvalidate } from '../redux/Slices/UserSlice'
import { motion, useScroll } from "framer-motion"


const PublicHero = () => {



    const { h_user, h_employees, UserRegistered } = useSelector(state => state.user)




    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(GetAlllDetailsOfComapany())
    }, [])


    useEffect(() => {
        if (UserRegistered) {
            dispatch(GetAlllDetailsOfComapany())
            dispatch(userInvalidate())
        }
    }, [])


    const AllMonthsArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];



    const date = new Date()
    let day = date.getDate()

    day = day > 9 ? day : `0${day}`
    let month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`
    let year = date.getFullYear()
    const dd = `${year}-${month}-${day}`


    // const totalProfit = h_user && h_user.map(item => item.totalInterest += totalProfit)


    let ttt = 0
    h_user && h_user.map(item => item.totalInterest ? ttt += item.totalInterest : ttt)

    const newdate = new Date()
    const newMonths = newdate.getMonth()


    let MonthsProfit = 0


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



    return <>

        <motion.div
            className="">


            <div className="p-2 bg-stone-50">

                <div className="my-12 ">


                    <motion.div
                        initial={{ marginBottom: "200px" }}
                        animate={{ marginBottom: "0" }}
                        transition={{ duration: 2 }}
                        className="mx-auto md:px-36">
                        <h1 className='text-center font-bold text-3xl md:text-5xl'>Welcome to Your Financial Future: Explore Our Loan Services You Want</h1>
                    </motion.div>

                </div>







                {/* statics start */}
                <div className=" md:px-14 my-4">
                    <div className="stats bg-gradient-to-r from-rose-500 to-yellow-300 md:flex-row flex-col gap-4 flex justify-between items-center w-full h-full my-8 shadow">

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



                <p class=" sm:mt-10 md:w-[80%] mx-auto text-center text-gray-400 font-normal  text-sm sm:text-lg">Discover a world of financial possibilities with our comprehensive loan services. Whether you're looking for a mortgage, personal loan, or business financing</p>


                <div class="flex justify-center my-5 items-center">
                    <Link to={"/login"} class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</Link>
                </div>

            </div>











            <div class="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">


                <div class="relative w-full md:flex-row flex-col justify-center flex  items-center">

                    <div class="w-full  md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div class="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Pay as you go</div>
                        <div class="block sm:flex md:block lg:flex items-center justify-center">
                            <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                                <div class="inline-flex items-center">
                                    <span class="text-3xl font-medium">1.4%</span>
                                    <span class="text-xl text-gray-600 ml-2">+</span>
                                    <span class="text-xl ml-2">20p</span>
                                </div>
                                <span class="block text-sm text-gray-600 mt-2">for European cards</span>
                            </div>
                            <div class="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                                <div class="inline-flex items-center">
                                    <span class="text-3xl font-medium">2.9%</span>
                                    <span class="text-xl text-gray-600 ml-2">+</span>
                                    <span class="text-xl ml-2">20p</span>
                                </div>
                                <span class="block text-sm text-gray-600 mt-2">for non-European cards</span>
                            </div>
                        </div>
                        <div class="flex justify-center mt-3">
                            <ul>
                                <li class="flex items-center">
                                    <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">No setup, monthly, or hidden fees</span>
                                </li>
                                <li class="flex items-center mt-3">
                                    <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" /><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" /></svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Pay only for what you use</span>
                                </li>
                                <li class="flex items-center mt-3">
                                    <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z" /><path class="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z" /></svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Real-time fee reporting</span>
                                </li>
                            </ul>
                        </div>
                        <Link class=" flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" to={"/register"}>
                            <span>Create account</span>
                            <span class="font-medium text-gray-700 ml-2">➔</span>
                        </Link>
                    </div>

                    <div class="w-full md:w-1/2 relative z-0  md:px-0 md:py-16">
                        <div class="w-full  bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div class="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">Enterprise</div>
                            <div class="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                                Stripe offers everything needed to run an online business at scale. Get in touch for details.
                            </div>
                            <div class="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Account management</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">Volume discounts</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Migration assistance</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4">Dedicated support</div>
                            </div>
                            <a class=" flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"  >
                                <Link to={"/login"}>Explore Your Loan</Link>
                                <span class="font-medium text-gray-300 ml-2">➔</span>
                            </a>
                        </div>
                    </div>




                </div>


            </div >
            {/*  */}




            {/*  */}



            {/* our services */}


            <div className="m-7">


                <h1 className='p-10 text-4xl text-center font-semibold text-info text-capitalize'>Our Services</h1>



                <div className="flex flex-col md:flex-row h-full gap-6 items-center justify-center">
                    <div className="h-[33%]">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://media.istockphoto.com/id/943331302/photo/finance-and-investment-concept.webp?b=1&s=170667a&w=0&k=20&c=31PXF2tzH0AHxSGOwIr_dNYF-XT4ErTI9OyHfrvZ-NQ=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Loan Origination:!</h2>
                                <p>Assisting borrowers in the application process, evaluating their creditworthiness, and determining the terms and conditions of the loan.</p>                            <div className="card-actions justify-end">
                                    <button className="btn btn-warning"><BsStarFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[33%]">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://media.istockphoto.com/id/1300434912/photo/young-business-woman-got-overjoyed-by-good-news-and-started-celebrating-while-working-on.webp?b=1&s=170667a&w=0&k=20&c=wFK6B8R_U78Z-1h0vo6kIoC45CgL4iN3DAHfOgbNaKs=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Personal Loans!</h2>
                                <p>Providing unsecured loans for personal expenses, often used for debt consolidation, medical bills, vacations, or other non-specific needs.</p>                            <div className="card-actions justify-end">
                                    <button className="btn btn-warning"><BsStarFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[33%]">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://media.istockphoto.com/id/915586882/photo/exchange-agreement-with-indian-rupees.webp?b=1&s=170667a&w=0&k=20&c=lvptImQ5dsQv2rClh0eoAsY0xX6QYX5yWrXTD0th8d4=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Loan Approval</h2>
                                <p>Assessing the creditworthiness of borrowers and determining interest rates based on their credit history. approved loan funds to the borrower</p>                            <div className="card-actions justify-end">
                                    <button className="btn btn-warning"><BsStarFill /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <div className="my-28 text-center">

                <h1 className='text-center text-3xl font-semibold'>Personal Loan Calculator</h1>
                <p className='mt-3 text-blue-600 text-center text-xl'>Use our online personal loan calculator to estimate your loan's EMI before applying.</p>

            </div>




            {/* chose your loan amount start */}


            <div className="flex md:flex-row flex-col border-2 items-center">

                <div className=" h-[400px] w-100 bg-cover  bg-[url('https://www.kotak811.com/open-zero-balance-savings-account/_next/image?url=https%3A%2F%2Fdnjyu6ncwtikt.cloudfront.net%2F8df1f8fa-ad65-4bd4-845c-64b663fb8f04.jpg&w=1920&q=75')]">
                    <h1 className='text-center mt-28 text-slate-100 font-bold text-3xl' >Low interest %</h1>
                    <h2 className='text-center mt-6  font-bold text-slate-50 text-xl' >Personal loan at attractively low interest rate</h2>
                </div>
                <div className=" h-[400px] w-100  bg-gradient-to-tr from-blue-500 to-sky-400 bg-cover " style={{ backgroundImage: "url('https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/investment/images/how-does-fixed-deposit-work.jpg')" }} >
                    <h1 className='text-center mt-28  text-white font-bold text-3xl' >No paperwork</h1>
                    <h2 className='text-center mt-6  font-extrabold text-yellow-800   shadow-md text-2xl' ><span className='text-white'>Apply</span> online with a 100% digital process</h2>

                </div>

            </div>



            {/* chose your loan amount end */}



            {/* persolnal loan detail start */}

            <div className="flex my-10  justify-center items-center">

                <div className=" w-[50%]   ">

                    <p className='my-8'>Personal loans are an ideal solution to fund your personal requirements. Kotak811 gives you personal loans for any financial need that you may have.</p>
                    <p className='my-8'>
                        personal loan can help you to pay for your next trip, plan a wedding, or cover unexpected medical expenses.                </p>

                    <p className='my-8'>
                        Get a personal loan up to ₹40 lakhs without any collateral, with flexible repayment tenures and attractive low interest rates. Get your loan disbursed in minutes and with minimum documentation.
                    </p>

                    <h2 className='font-semibold text-3xl'>How Personal loans work? </h2>
                    <p className='my-3'>
                        When you apply for a personal loan, the bank gives you the option to repay the amount over a period of time, along with the interest.                 </p>
                    <p className='my-3'>
                        For example: If you apply for a loan of ₹5 lakhs with an interest rate of 12% per annum for 5 years. The monthly EMI that you have to pay will be ₹11,112 per month.                </p>
                    <h2 className='font-semibold my-4 text-3xl'>Benefits of our Personal Loans </h2>
                    <li className='font-semibold my-2 text-lg'>Affordable interest rates </li>
                    <p className='my-2'>The our personal loan is affordable; the loan interest rates start at 10.99% p.a. only.</p>
                    <li className='font-semibold my-2 text-lg'>wide range </li>
                    <p className='my-2'>Don’t worry about providing for your financial needs; Kotak811 offers personal loans ranging from ₹50,000 up to ₹40 lakhs.</p>
                    <li className='font-semibold my-2 text-lg'>Flexible payment </li>
                    <p className='my-2'>The personal loan repayment tenure ranges between 12 and 60 months. Choose the tenure that best suits you. You can also prepay a part of the loan during the tenure of the loan.</p>
                    <li className='font-semibold my-2 text-lg'>Collateral-free loans</li>
                    <p className='my-2'>Kotak811 personal loans are collateral-free, and you don’t have to pledge any security to avail a personal loan. The loan is unsecured and is issued based on income and other personal loan eligibility criteria.</p>
                    <li className='font-semibold my-2 text-lg'>Digital application and minimum documentation</li>
                    <p className='my-2'>Applying for a Kotak811 personal loan is simple, and the loan is offered with minimal paperwork. You can get approval and have the loan sanctioned.</p>


                    <h1 className='mt-5 mb-1 text-base font-semibold '>Disclaimers:</h1>
                    <p>Applicable for Resident Indian Individuals only w.e.f. Jun 13, 2022, daily balances in Savings Account above Rs. 50 lakhs will earn 4% interest p.a. Daily balances in Savings Account up to Rs. 50 lakhs will continue to earn 3.50% interest p.a. These interest rates are applicable for Resident Accounts only.</p>

                </div>


            </div>



            {/* persolnal loan detail end */}

            <br />

            <footer className="footer  p-10 bg-base-200 text-base-content">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to={"/adminlogin"} className="font-medium link link-hover p-1 px-2 bg-orange-400 rounded-lg">Admin</Link>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>


        </motion.div>


    </>
}

export default PublicHero
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminLoginAct } from '../redux/Actions/AdminAction'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import useDymanicForm from '../hooks/useDynamicForm'
import { GetEmployees } from '../redux/Actions/EmployeeAction'
import { UserLogin } from '../redux/Actions/UserAction'
import { EmployeInvalidate } from '../redux/Slices/EmployeeSlice'
import { userInvalidate } from '../redux/Slices/UserSlice'
import { motion } from "framer-motion"

const Login = () => {


    const { auth: uauth, loading, error: uerror } = useSelector(state => state.user)
    const { employee, loading: emloading, error: emerror } = useSelector(state => state.employee)

    const dipsatch = useDispatch()

    const handleClick = e => {

        if (!state.role) {
            toast.warn("Please select role")
        } else
            if (state.role === "employee") {
                dipsatch(GetEmployees(state))
            } else if (state.role === "user") {
                dipsatch(UserLogin(state))
            }
    }

    const config = [
        { fieldName: "email", type: "email" },
        { fieldName: "password", type: "password" },
        { fieldName: "role", type: "radio", options: ["user", "employee"] },
        { value: "Log In Now", type: "submit", onClick: handleClick }
    ]
    const navi = useNavigate()




    useEffect(() => {
        if (employee) {
            toast.success("Employee Login success")
            navi("/employeeNavbar")
        }

    }, [employee])

    useEffect(() => {
        if (uauth) {
            toast.success(`${uauth.name} Login success`)
            navi("/userNavbar")
        }

    }, [uauth])

    useEffect(() => {
        if (emerror) {
            toast.error(emerror)
            dipsatch(EmployeInvalidate())
        }
    }, [emerror])

    useEffect(() => {
        if (uerror) {
            toast.error(uerror)
            dipsatch(userInvalidate())
        }
    }, [uerror])




    const [ui, state, pre] = useDymanicForm(config)


    if (loading) return <><span className="loading loading-spinner loading-md"></span>
    </>


    return <>

        <motion.div

            className="pt-3  bg-[url('https://media.istockphoto.com/id/1435518101/photo/brick-wall-antique-old-grunge-white-texture-background.webp?b=1&s=170667a&w=0&k=20&c=QENe-iNXPiykvBrHZOn1abYs844RFVUp3S30y06qWbM=')] bg-cover h-screen ">
            <div className="absolute md:left-44 md:top-12">


                <Link to={"/"} type="button" class="btn self-auto md:mt-10 mt-0 btn-warning">Go Back</Link>
            </div>
            <div className=" flex justify-center w-full items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}

                    className="mt-14 transition-all duration-300 bg-[url('https://images.unsplash.com/photo-1464639351491-a172c2aa2911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBjaGVja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')] text-slate-400 shadow-2xl border-2 border-opacity-70 border-slate-400 rounded-xl p-3  w-[70%] md:w-[40%]">
                    <h1 className='text-center text-warning mb-4 font-medium text-2xl'>Log In</h1>
                    {ui}
                    <h1 className='font-medium text-center my-2'>Do Not have account? <span className='text-green-400 font-medium'><Link to={"/register"}>Regiter</Link></span></h1>
                </motion.div>
            </div>


        </motion.div>

    </>
}

export default Login
import React, { useEffect } from 'react'
import useDymanicForm from '../../hooks/useDynamicForm'
import { useDispatch, useSelector } from 'react-redux'
import { AddEmployee, GetEmployees, GetTotalnumberOfByEmpCustomers } from '../../redux/Actions/AdminAction'
import { AdminInvalidate } from '../../redux/Slices/AdminSlice'
import { toast } from 'react-toastify'

const AdminTeam = () => {


    const { employees, EmployeAdded, error, totalAddedCustomers } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const handleClick = e => {
        console.log(state);
        dispatch(AddEmployee({ ...state, role: "employee" }))
    }



    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "email", type: "email" },
        { fieldName: "password", type: "password" },
        { fieldName: "mobile", type: "number" },
        { fieldName: "Year_Of_Experience", type: "number" },
        { fieldName: "Add Employee", value: "Add Employee", type: "submit", onClick: handleClick },
    ]






    const [ui, state, pre] = useDymanicForm(config)

    useEffect(() => {
        dispatch(GetEmployees())
        dispatch(AdminInvalidate())
        dispatch(GetTotalnumberOfByEmpCustomers())
    }, [EmployeAdded])



    useEffect(() => {
        if (EmployeAdded) {
            toast.success("Employe Addedd successfully")
        } if (error) {
            toast.error(error)
        }

    }, [EmployeAdded, error])

    let y

    let x = totalAddedCustomers && totalAddedCustomers.filter(item => item.employeeId === 1)

    return <>

        {/* Mian st */}
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-2 lg:flex-row">
                <img src="https://media.istockphoto.com/id/1188452509/photo/successful-business-team-smiling-teamwork-corporate-office-colleague.webp?b=1&s=170667a&w=0&k=20&c=__8eZGXIiYEjehMEoPrw1G00AB86cOWZc4sMj-2rWPA=" className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold mt-10 p-1 pt-3">"An important part of our team who always helps us do well with hard work and skill"!</h1>
                    <p className="py-6">"Team members are the individuals who work together to achieve common goals. They collaborate, share ideas, and support each other to accomplish tasks and projects efficiently. Their unique skills and contributions strengthen the team and drive its success.".</p>
                    <div className="text-end md:mt-10">

                        <button onClick={() => window.my_modal_3.showModal()} className="btn btn-primary md:mt-6">Add Employees</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Mian end */}


        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>

                <div className="">{ui}</div>
            </form>
        </dialog>




        <div className="my-14 bg-warning p-10">



            <div className="overflow-x-auto my-1 rounded-xl">
                <table className="table table-info shadow-md">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Year_Of_Experience</th>
                            <th>Customers</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees && employees.map(item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.Year_Of_Experience}</td>

                                <td>{totalAddedCustomers && totalAddedCustomers && totalAddedCustomers.filter(e => e.employeeId === +item.id).length

                                }</td>
                            </tr>)
                        }



                    </tbody>





                </table>
            </div>








        </div>







    </>
}

export default AdminTeam
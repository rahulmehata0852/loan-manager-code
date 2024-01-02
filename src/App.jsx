import React from 'react'
import Login from './share/Login'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navabr from './Admin/components/Navabr'
import AdminTeam from './Admin/Pages/AdminTeam'
import Dashboard from './Admin/Pages/Dashboard'
import Footer from './Footer'
import EmployeeNavar from './Employee/compo/EmployeeNavar'
import EmployeeProtected from './Employee/compo/EmployeeProtected'
import EmployerDashboard from './Employee/pages/EmployerDashboard'
import EmployerCustomers from './Employee/pages/EmployerCustomers'
import UserDashboard from './User/Pages/UserDashboard'
import UserNavbar from './User/compo/UserNavbar'
import AdminRequests from './Admin/Pages/AdminRequests'
import Register from './share/Register'
import AdminCalender from './Admin/Pages/AdminCalender'
import UserInstallment from './User/Pages/UserInstallment'
import AdminUserInstallMents from './Admin/Pages/AdminUserInstallMents'
import PublicNavbar from './share/PublicNavbar'
import PublicHero from './share/PublicHero'
import EmployeeUserInstallment from './Employee/pages/EmployeeUserInstallment'
import AdminLogin from './share/AdminLogin'
import AdminCustomers from './Admin/Pages/AdminCustomers'
import UserProtected from './User/compo/UserProtected'
import CustomerHistory from './Admin/Pages/CustomerHistory'
import PageNotFound from './share/PageNotFound'
import Help from './share/Help'

const App = () => {
  return <>

    <BrowserRouter>

      <ToastContainer position='bottom-left' theme='dark' />
      <Routes>

        <Route path='/login' element={<><Login /></>} />
        <Route path='/register' element={<><Register /></>} />
        <Route path='/adminLogin' element={<><AdminLogin /></>} />


        <Route path='/adminNavbar' element={<><Navabr /><Outlet /></>}>
          <Route index element={<><Dashboard /></>} />
          <Route path='/adminNavbar/adteam' element={<><AdminTeam /></>} />
          <Route path='/adminNavbar/adreqests' element={<><AdminRequests /></>} />
          <Route path='/adminNavbar/adcalender' element={<><AdminCalender /></>} />
          <Route path='/adminNavbar/adcustomers' element={<><AdminCustomers /></>} />
          <Route path='/adminNavbar/adcustomersHistory' element={<><CustomerHistory /></>} />
          <Route path='/adminNavbar/adminInstallMent/:id' element={<><AdminUserInstallMents /></>} />

        </Route>







        <Route path='/employeeNavbar' element={<EmployeeProtected compo={<><EmployeeNavar /> <Outlet /></>} />}>
          <Route index element={<><EmployerDashboard /></>} />
          <Route path='/employeeNavbar/emCustomers' element={<><EmployerCustomers /></>} />
          <Route path='/employeeNavbar/emuserInstallment/:id' element={<><EmployeeUserInstallment /></>} />

        </Route>


        <Route path='/userNavbar' element={<UserProtected compo={<><UserNavbar /> <Outlet /></>} />} >
          <Route index element={<><UserDashboard /></>} />
          <Route path='/userNavbar/userInstallMent' element={<><UserInstallment /></>} />
        </Route>


        <Route path='/' element={<><PublicNavbar /> <Outlet /> </>}>
          <Route index element={<><PublicHero /></>} />
          <Route path='/help' element={<Help />} />

        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>


      <Footer />

    </BrowserRouter>



  </>
}

export default App
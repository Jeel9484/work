import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Table from './pages/Table'
import Billing from './pages/Biling/Billing.jsx'
import RTL from './pages/Rtl.jsx'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tables" element={<Table />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/rtl' element={<RTL />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
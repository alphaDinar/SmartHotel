import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/FrontDesk/Dashboard'
import Test from './Test'
import AddGuest from './Pages/FrontDesk/AddGuest'
import CheckIns from './Pages/FrontDesk/CheckIns'
import Payments from './Pages/FrontDesk/Payments'

function App() {
  return (
    <>
      <Routes>
        <Route path='/frontDesk' element={<Dashboard />} />
        <Route path='/frontDesk/addGuest' element={<AddGuest/>} />
        <Route path='/frontDesk/checkIns' element={<CheckIns/>} />
        <Route path='/frontDesk/payments' element={<Payments/>} />

        <Route path='test' element={<Test/>} />
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import Home from './Components/home'
import LoginForm from './Components/auth/LoginForm'
import RegisterForm from './Components/auth/RegisterForm'
import Layout from './Components/layout'
import EmployeeList from './Components/employee/EmployeeList'
import EmployeeForm from './Components/employee/EmployeeForm'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Layout />}>
          <Route path='/employees' element={<EmployeeList />} />
          <Route path="/employees/create" element={<EmployeeForm />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

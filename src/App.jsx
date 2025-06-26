import { BrowserRouter, Route, Routes } from "react-router-dom"
import CompLayout from "./layout"
import CompShowEmployees from "./components/employees/ShowEmployees"
import CompCreateEmployee from "./components/employees/CreateEmployee"
import CompEditEmployee from "./components/employees/EditEmployee"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompLayout />}>
            <Route path="/employees" element={<CompShowEmployees />} />
            <Route path="/employees/create" element={<CompCreateEmployee />} />
            <Route path="/employees/edit/:id" element={<CompEditEmployee />} />
          </Route>
        </Routes>
        {/* <h1>Sistema de Gestión de Nómina</h1> */}
      </BrowserRouter>
    </>
  )
}

export default App

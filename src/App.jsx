import { BrowserRouter, Route, Routes } from "react-router-dom"
import CompLayout from "./layout"
import CompShowEmployees from "./components/employees/ShowEmployees"
import CompCreateEmployee from "./components/employees/CreateEmployee"
import CompEditEmployee from "./components/employees/EditEmployee"
import CompShowNews from "./components/news/showNews"
import CompCreateNew from "./components/news/CreateNew"
import CompEditNew from "./components/news/EditNew"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompLayout />}>
            <Route path="/employees" element={<CompShowEmployees />} />
            <Route path="/employees/create" element={<CompCreateEmployee />} />
            <Route path="/employees/edit/:id" element={<CompEditEmployee />} />
            <Route path="/news" element={<CompShowNews />} />
            <Route path="/news/create" element={<CompCreateNew />} />
            <Route path="/news/edit/:id" element={<CompEditNew />} />
          </Route>
        </Routes>
        {/* <h1>Sistema de Gestión de Nómina</h1> */}
      </BrowserRouter>
    </>
  )
}

export default App

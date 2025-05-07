import { useEffect, useState } from "react";
import employeesExample from "../../../../employeesExample";
import { NavLink } from "react-router-dom";


export default function EmployeeList(){
    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        //consulta a la api


        setEmployees(employeesExample);

    }, []);

    console.log(employees)

    return(
        <div className="employeeListSection">
            <h2>Lista de empleados</h2>
            <NavLink className="btn" to='/employees/create'>+ Nuevo</NavLink>
            <ul className="empoyeeList">
                {
                    employees.map((emp) =>(
                        <NavLink to={`/employees/${emp.id}`} className="employeeItemList" key={emp.id}>
                            <span>{emp.nombre}</span>
                            <span>{emp.cargo}</span>
                            <span>{emp.salario}</span>
                        </NavLink>
                    ))
                }
            </ul>
        </div>
    )
}
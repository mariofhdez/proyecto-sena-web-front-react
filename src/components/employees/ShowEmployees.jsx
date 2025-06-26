import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CompShowEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const response = await axios.get("http://localhost:3005/api/employee");
        const data = await response.data;
        setEmployees(data);
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:3005/api/employee/${id}`);
        getEmployees();
    }

    return (
        <div className="container-fluid w-75 text-bg-light mt-6">
            <div className="row">
                <div className="col-12">
                    <h3 className="mt-3 p-4 mb-3 text-center">Listado de empleados</h3>
                    <NavLink to="/employees/create" className="btn btn-primary mb-3 float-end"><i className="fa-solid fa-plus"></i> Nuevo empleado</NavLink>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Apellido</th>
                                <th className="text-center">Salario</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr 
                                    key={employee.id}
                                    className="text-center"
                                >
                                    <td>{employee.firstName}</td>
                                    <td>{employee.firstSurname}</td>
                                    <td>{employee.salary}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <NavLink to={`/employees/edit/${employee.id}`} className="btn btn-secondary"><i className="fa-solid fa-pen-to-square"></i></NavLink>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
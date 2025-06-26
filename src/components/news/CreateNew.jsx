import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompCreateNew() {
    const [date, setDate] = useState('');
    const [quantity, setQuantity] = useState('');
    const [value, setValue] = useState('');
    const [concept, setConcept] = useState('');
    const [employee, setEmployee] = useState('');
    const [factor, setFactor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3005/api/settlement-news', {
            date: date,
            quantity: quantity,
            value: value,
            concept: concept,
            employee: employee,
        });
        navigate('/news');
    }

    return (
        <div className="container-fluid w-50 text-bg-light mt-8">
            <div className="row">
                <div className="col-12">
                    <h3 className="mt-3 p-4 mb-3 text-center fs-2">Crear novedad</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-row gap-4">
                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="date" className="form-label fs-4">Fecha</label>
                                <input
                                    type="date"
                                    className="form-control fs-4"
                                    id="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>

                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="employee" className="form-label fs-4">Empleado</label>
                                <input
                                    type="text"
                                    className="form-control fs-4"
                                    id="employee"
                                    value={employee}
                                    onChange={e => setEmployee(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-4">
                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="concept" className="form-label fs-4">Concepto</label>
                                <input
                                    type="text"
                                    className="form-control fs-4"
                                    id="concept"
                                    value={concept}
                                    onChange={e => setConcept(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="value" className="form-label fs-4">Valor</label>
                                <input
                                    type="number"
                                    className="form-control fs-4"
                                    id="value"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                />
                            </div>
                            
                        </div>
                        <div className="d-none flex-row gap-4">
                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="factor" className="form-label fs-4">Factor</label>
                                <input
                                    type="text"
                                    className="form-control fs-4"
                                    id="factor"
                                    value={factor}
                                    onChange={e => setFactor(e.target.value)}
                                    disabled
                                />
                            </div>
                            <div className="mb-3 px-4 w-50">
                                <label htmlFor="quantity" className="form-label fs-4">Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control fs-4"
                                    id="quantity"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                />
                            </div>
                            
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <button className="btn btn-primary fs-4" type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeForm() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular guardar
    console.log('Empleado creado:', nombre);
    navigate('/employees');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Empleado</h2>
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <button type="submit">Guardar</button>
    </form>
  );
}
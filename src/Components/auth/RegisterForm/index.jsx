import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      // Simular registro
      navigate('/login');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro de usuario</h2>
            <input type="text" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Registrarse</button>
        </form>
    )
}
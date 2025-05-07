import { useState } from "react";
import { useAuth } from '../../../Context/AuthContext'
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Mecanismo de autenticación de la API
      login({ email });
      navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
        </form>
    )
}
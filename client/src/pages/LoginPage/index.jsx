import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/validations/login";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue.toLowerCase())
        
        if (validateEmail(emailValue)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }else if(emailValue === ''){
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Este campo es requerido' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Ingresa un correo válido' }));
        }
    }
    const handleChangePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue)

        if (validatePassword(passwordValue)) {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        } else if(passwordValue === ''){
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Este campo es requerido' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Entre 5 a 15 caracteres' }));
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrors({
                email: 'Este campo es obligatorio',
                password: 'Este campo es obligatorio',
            });
            return;
        }
        if (!validateEmail(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Ingresa un correo válido' }));
            return;
        }
        if (!validatePassword(password)) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Entre 5 a 15 caracteres' }));
            return;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <div>
                <label>Correo electrónico</label>
                <div>
                    <input 
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    onBlur={handleChangeEmail}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
            </div>
            <br/>
            <div>
                <label>Contraseña</label>
                <div>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChangePassword}
                    onBlur={handleChangePassword}
                    />
                    <button
                        type="button" 
                        onClick={toggleShowPassword}
                    >{showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                    {errors.password && <p>{errors.password}</p>}
                </div>
            </div>
            <br></br>
            <button type="submit">Entrar</button>
        </form>
    )
}

export default Login;

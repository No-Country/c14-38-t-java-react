import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validations/formValidation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChangeEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue.toLowerCase());

    if (validateEmail(emailValue)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    } else if (emailValue === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Este campo es requerido',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Ingresa un correo válido',
      }));
    }
  };
  const handleChangePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (validatePassword(passwordValue)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    } else if (passwordValue === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Este campo es requerido',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Ingresa una contraseña válida',
      }));
    }
  };
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden px-2 sm:flex w-full bg-blue-gradient items-center justify-center flex-col">
          <h1 className="text-center font-['Poppins'] text-5xl font-bold text-custom-white mt-3">
            Bienvenido a Stockwise
          </h1>
          <p className="text-2xl text-center text-custom-white mt-4 w-80 font-medium">
            Una plataforma creada para optimizar tu negocio
          </p>
          <img className="mt-4" src="/images/login-image.svg" alt="Imagen" />
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-sm m-4 sm:bg-[white] px-10 py-10 rounded sm:shadow-md">
            <h1 className="flex sm:hidden text-3xl bg-clip-text text-transparent bg-blue-gradient font-bold mt-2">
              Stockwise
            </h1>
            <h1 className="sm:text-3xl text-lg font-normal">Inicia Sesión</h1>
            <p className="text-xs mt-2 mb-3">
              ¿Eres un usuario nuevo?{' '}
              <span className="text-custom-blue text-left mb-2 cursor-pointer underline">
                <Link to="/signup">Crear una cuenta</Link>
              </span>
            </p>
            <div>
              <div
                className={`mt-2.5 mb-2.5 flex rounded-lg shadow-sm ring-1 ring-inset ${
                  errors.email ? 'ring-custom-red' : 'ring-custom-gray'
                } focus-within:ring-2 focus-within:ring-inset ${
                  errors.email
                    ? 'focus-within:ring-custom-red'
                    : 'focus-within:ring-custom-blue'
                } sm:max-w-md`}
              >
                <input
                  type="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={handleChangeEmail}
                  onBlur={handleChangeEmail}
                  placeholder="usuario@mail.com"
                  required
                />
              </div>
              {/* {errors.email && <span className='text-custom-red'>{errors.email}</span>} */}
              <div
                className={`mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ${
                  errors.password ? 'ring-custom-red' : 'ring-custom-gray'
                } focus-within:ring-2 focus-within:ring-inset ${
                  errors.password
                    ? 'focus-within:ring-custom-red'
                    : 'focus-within:ring-custom-blue'
                } sm:max-w-md`}
              >
                <input
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={handleChangePassword}
                  onBlur={handleChangePassword}
                  placeholder="Contraseña"
                  required
                />
              </div>
              {/* {errors.password && (<span className="text-custom-red">{errors.password}</span>)} */}
            </div>
            <p className="mb-2.5 text-xs text-right text-custom-dark-gray cursor-pointer underline">
              ¿Has olvidado tu contraseña?
            </p>
            <button className="mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

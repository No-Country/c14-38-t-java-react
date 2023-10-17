import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validations/formValidation';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e, input) => {
    const value = e.target.value;
    switch (input) {
      case 'email':
        setEmail(value.toLowerCase());
        if (validateEmail(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: '* Ingrese un correo',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: '* Ingrese un correo válido',
          }));
        }
        break;

      case 'password':
        setPassword(value);
        if (validatePassword(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: '* Ingrese una contraseña',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: '* Ingrese una contraseña de 5 a 15 caracteres',
          }));
        }
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        if (value === password) {
          setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '* Repita la contraseña',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '* Las contraseñas no coinciden',
          }));
        }
        break;
      default:
        break;
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
          <div className="w-full max-w-sm m-4 sm:bg-custom-white px-10 py-10 rounded sm:shadow-md">
             {/* barra de progreso*/}
            <div class="flex mb-1 items-center w-1/2 mx-auto mt-1">
              <div class="w-2/3 h-2 bg-[#3058bf] rounded-l-full "></div>
              <div class="w-1/3 h-2 bg-[#bebdbd] rounded-r-full "></div>
            </div>
            <p className="text-xs mt-3">Paso 1/2</p>
            <h1 className="text-3xl font-normal">Crea tu cuenta</h1>
            <p className="text-xs mt-2 mb-4">
              ¿Ya sos usuario?{' '}
              <span className="text-custom-blue text-left mb-2 cursor-pointer underline">
                <Link to="/login">Inicia Sesión</Link>
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
                  onChange={(e) => handleChange(e, 'email')}
                  onBlur={(e) => handleChange(e, 'email')}
                  placeholder="usuario@mail.com"
                  required
                />
              </div>

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
                  onChange={(e) => handleChange(e, 'password')}
                  onBlur={(e) => handleChange(e, 'password')}
                  placeholder="Contraseña"
                  required
                />
              </div>

              <div
                className={`mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ${
                  errors.confirmPassword
                    ? 'ring-custom-red'
                    : 'ring-custom-gray'
                } focus-within:ring-2 focus-within:ring-inset ${
                  errors.confirmPassword
                    ? 'focus-within:ring-custom-red'
                    : 'focus-within:ring-custom-blue'
                } sm:max-w-md`}
              >
                <input
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  value={confirmPassword}
                  onChange={(e) => handleChange(e, 'confirmPassword')}
                  onBlur={(e) => handleChange(e, 'confirmPassword')}
                  placeholder="Confirma la contraseña"
                  required
                />
              </div>

              {errors &&
                Object.values(errors).map((value, index) => (
                  <p key={index} className="text-custom-red text-xs">
                    {value}
                  </p>
                ))}
            </div>
              <Link to="/signup-step" className="mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue flex justify-center">
                Continuar
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;

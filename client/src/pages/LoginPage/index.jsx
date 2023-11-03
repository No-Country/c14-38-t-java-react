import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { loginUser } from '../../utils/auth';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validations/formValidation';
import useAuthContext from '../../hooks/useAuthContext';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    login: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //componente loading

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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (errors.email || errors.password) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await loginUser(email, password);
      setErrors((prevErrors) => ({ ...prevErrors, login: '' }));
      login(data.token);
    } catch (error) {
      // if (error.response && error.response.status === 403) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        login: 'Email o password inválidos.',
      }));
      // } else {
      //   setErrors((prevErrors) => ({
      //     ...prevErrors,
      //     login: 'Error inesperado, intentelo nuevamente.',
      //   }));
      // }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className='sm:hidden flex justify-center items-center h-44 bg-blue-gradient rounded-b-[65px] pb-4'>
        <h1 className="text-center font-['Poppins'] text-3xl font-bold text-custom-white mt-3">
          Stockwise
        </h1>
      </div>
      <div className='flex w-full h-screen'>
        <div className='hidden px-2 sm:flex w-full bg-blue-gradient items-center justify-center flex-col'>
          <h1 className="text-center font-['Poppins'] text-5xl font-bold text-custom-white mt-3">
            Bienvenido a Stockwise
          </h1>
          <p className='text-2xl text-center text-custom-white mt-4 w-80 font-medium'>
            Una plataforma creada para optimizar tu negocio
          </p>
          <img className='mt-4' src='/images/login-image.svg' alt='Imagen' />
        </div>

        <div className='flex w-full sm:items-center justify-center'>
          <form
            onSubmit={handleLogin}
            className='flex flex-col w-full max-w-sm m-4 sm:bg-[white] sm:p-10 rounded sm:shadow-md'
          >
            {/* <h1 className='flex sm:hidden text-3xl bg-clip-text text-transparent bg-blue-gradient font-bold'>
              Stockwise
            </h1> */}
            {/* <h1 className='sm:text-3xl text-lg font-normal mb-5 mt-3'>
              <span className='sm:hidden'>Bienvenido. </span>Inicia Sesión
            </h1> */}
            <h1 className='text-2xl font-normal'>Inicia sesión</h1>
            <p className='text-xs mt-2 mb-3'>
              ¿Eres un usuario nuevo?{' '}
              <span className='text-custom-blue text-left mb-2 cursor-pointer underline'>
                <Link to='/signup'>Crear una cuenta</Link>
              </span>
            </p>
            <div>
              <div
                className={`mb-4 flex rounded-lg shadow-sm ring-1 ring-inset ${
                  errors.email ? 'ring-custom-red' : 'ring-custom-gray'
                } focus-within:ring-2 focus-within:ring-inset ${
                  errors.email
                    ? 'focus-within:ring-custom-red'
                    : 'focus-within:ring-custom-blue'
                } sm:max-w-md`}
              >
                <input
                  type='email'
                  className='block flex-1 border-0 bg-transparent sm:py-1.5 py-3 px-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6'
                  value={email}
                  onChange={handleChangeEmail}
                  onBlur={handleChangeEmail}
                  placeholder='usuario@mail.com'
                  tabIndex='1'
                  required
                />
              </div>
              {/* {errors.email && <span className='text-custom-red'>{errors.email}</span>} */}
              <div
                className={`mb-4 flex items-center rounded-lg shadow-sm ring-1 ring-inset ${
                  errors.password ? 'ring-custom-red' : 'ring-custom-gray'
                } focus-within:ring-2 focus-within:ring-inset ${
                  errors.password
                    ? 'focus-within:ring-custom-red'
                    : 'focus-within:ring-custom-blue'
                } sm:max-w-md relative`}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='block flex-1 border-0 bg-transparent sm:py-1.5 py-3 px-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6'
                  value={password}
                  onChange={handleChangePassword}
                  onBlur={handleChangePassword}
                  placeholder='Contraseña'
                  tabIndex='2'
                  required
                />
                <button
                  type='button'
                  className='hidden sm:block absolute right-3 text-custom-icon'
                  aria-label={
                    showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                  }
                  onMouseUp={() => setShowPassword(false)}
                  onMouseDown={() => setShowPassword(true)}
                >
                  {showPassword ? (
                    <EyeIcon className='h-5 w-5' />
                  ) : (
                    <EyeSlashIcon className='h-5 w-5' />
                  )}
                </button>
              </div>
              {/* {errors.password && (<span className="text-custom-red">{errors.password}</span>)} */}
              {errors.login && (
                <span className='text-custom-red text-xs'>{errors.login}</span>
              )}
            </div>
            {/* <p className="mb-2.5 text-xs text-right text-custom-dark-gray cursor-pointer underline">
              ¿Has olvidado tu contraseña?
            </p> */}
            <button
              type='submit'
              className={`${
                Object.values(errors).every((value) => value === '')
                  ? 'bg-blue-gradient text-custom-white'
                  : 'text-custom-blue border border-custom-blue'
              } mt-5 w-full bg-none rounded-full text-sm py-3 px-4 font-normal border flex justify-center`}
            >
              Continuar
            </button>
            {isLoading && <Loading />}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import { Link } from 'react-router-dom';
import { authenticateUser } from '../../utils/auth';
import { useState } from 'react';

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();

    setIsError(false);
    setIsLoading(true);

    try {
      const { email, password } = loginForm;
      const { token } = await authenticateUser(email, password);
      localStorage.setItem('token', token);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
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
            <form onSubmit={login}>
              <div className="mt-2.5 mb-2.5 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md">
                <input
                  type="email"
                  onChange={handleOnChange}
                  name="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="usuario@mail.com"
                />
              </div>
              <div className="mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md">
                <input
                  onChange={handleOnChange}
                  name="password"
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>
              <p className="mb-2.5 text-xs text-right text-custom-dark-gray cursor-pointer underline">
                ¿Has olvidado tu contraseña?
              </p>
              <button
                disabled={isLoading}
                className="mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue"
              >
                Ingresar
              </button>
            </form>

            {isError && <p className="text-red-500">Error al iniciar sesión</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

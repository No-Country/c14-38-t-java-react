// import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden px-2 sm:flex w-full gradient-main-bottom items-center justify-center flex-col">
          <h1 className="text-center font-['Poppins'] text-5xl font-bold text-white mt-3">
            Bienvenido a Stockwise
          </h1>
          <p className="text-2xl text-center text-white mt-4 w-80 font-medium">
            Una plataforma creada para optimizar tu negocio
          </p>
          <img className="mt-4" src="/images/login-image.svg" alt="Imagen" />
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-sm bg-white px-10 py-10 rounded shadow-md">
            <h1 className="text-3xl font-normal">Inicia Sesión</h1>
            <p className="text-xs mt-2 mb-3">¿Eres un usuario nuevo? <span className='text-[#3E43C7] text-left mb-2 cursor-pointer underline'>Crear una cuenta</span></p>
            <div>
              <div className="mt-2.5 mb-2.5 flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="usuario@mail.com"
                />
              </div>
              <div className="mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <p className="mb-2.5 text-xs text-right text-[#5D5D5D] cursor-pointer underline">¿Has olvidado tu contraseña?</p>
            <button className="mt-3 w-full gradient-main-bottom rounded-full text-white text-sm py-2 px-4 font-normal">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

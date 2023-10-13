import { Link } from 'react-router-dom';

const SignUpPage = () => {
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
            <p className="text-xs">Paso 1/2</p>
            <h1 className="text-3xl font-normal">Crea tu cuenta</h1>
            <p className="text-xs mt-2 mb-4">
              ¿Ya sos usuario?{' '}
              <span className="text-custom-blue text-left mb-2 cursor-pointer underline">
                <Link to="/login">Inicia Sesión</Link>
              </span>
            </p>
            <div>
              <div className="mt-2.5 mb-2.5 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md">
                <input
                  type="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="usuario@mail.com"
                />
              </div>
              <div className="mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md">
                <input
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>
              <div className="mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md">
                <input
                  type="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Confirma la contraseña"
                />
              </div>
            </div>

            <button className="mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;

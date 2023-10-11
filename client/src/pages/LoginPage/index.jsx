import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div className='flex w-full h-screen'>

        <div className="hidden sm:flex w-full bg-gradient-to-b from-[#3058BF] to-[#6F30B3] items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white mt-3">Bienvenido a Stockwise</h1>
          <p className="text-lg text-white mt-4">Una plataforma creada para optimizar tu negocio</p>
          <img className="mt-4" src="/images/login-image.svg" alt="Imagen" />
        </div>

        <div className='flex w-full items-center justify-center lg:w-1/2'>
          <div className='bg-white px-10 py-10 rounded-3xl shadow-md'> 
            <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-t  from-[#3058BF] to-85% to-[#6F30B3] font-bold mt-2'>
              Stockwise
            </h1>
            <h4>Bienvenido. Inicia Sesión</h4>
            <p>¿Eres un nuevo usuario? Crear una cuenta</p>

            <div className='mt-3'>
                <div>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-2 mt-6 bg-transparent focus:border-bg-gradient-to-b from-[#3058BF] to-[#6F30B3]' placeholder='Correo Electrónico'></input>
                </div>
                <div>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-2 mt-6 bg-transparent  focus:border-bg-gradient-to-b from-[#3058BF] to-[#6F30B3]' placeholder='Contraseña' type='password'></input>
                </div>

                <div className='flex justify-end'>
                    <label className='text-[#5D5D5D] text-left mb-2 cursor-pointer underline '>¿Haz olvidado tu contraseña?</label>
                </div>
                
                <Link
                  to="/products"
                  className="flex justify-center items-center border border-[#6C63FF] font-semibold text-[#3058BF] rounded-[100px] px-6 py-2"
                >
                  Ingresar
                </Link>

            </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default LoginPage;
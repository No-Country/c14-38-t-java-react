import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const SignUpPageStep = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
    // Realiza solicitud de la API para obtener la lista de países
    axios
    .get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
    .then((res) => {
        // Almacena los países
        setCountries(res.data);
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
}, []);


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

        {/* card de registro*/}
        <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-sm mt-2 sm:bg-custom-white px-10 py-10 rounded sm:shadow-md">
        {/* barra de progreso*/}
                <div class="flex mb-2 items-center justify-center ">
                    <div class="w-2/3 h-2 bg-[#3058bf] rounded-full mb-4"></div>
                </div>
            <p className="text-xs">Paso 2/2</p>
            <h1 className="text-3xl font-normal">Crea tu cuenta</h1>
            <p className="text-xs mt-2 mb-4">
            ¿Ya sos usuario?{' '}
            <span className="text-custom-blue text-left mb-2 cursor-pointer underline">
                <Link to="/login">Inicia Sesión</Link>
            </span>
            </p>
            {/* Formulario de usuario*/}
            <div className="rounded-lg bg-gray-100 shadow-md p-2 mb-4"> 
                <div className="w-312 h-40">
                    <div className="select-container flex flex-col space-y-4">
                    <input className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265] " type='text' placeholder='Nombre completo de administrado'>
                    </input>
                    <input className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"  type='text' placeholder='Nombre de la Empresa'>
                    </input>
                    <input className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"  type='text' placeholder='Sector de la Sucursal'>
                    </input>
                </div>
            </div>
        </div>


    {/* Formulario de paises, moneda e idioma*/}
    <div className="rounded-lg bg-gray-100 shadow-md p-2"> 
            <div className="w-312 h-40">
                <div className="select-container flex flex-col space-y-4">
                
                <select className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]">
                <option value="" disabled selected>
                Selecciona un país
                </option>
                {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                    {country.name}
                    </option>
                ))}
                </select>

                <select className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]">
                <option value="" disabled selected>Moneda base</option>
                <option value="ARS">Peso Argentino</option>
                <option value="CLP">Peso Chileno</option>
                <option value="EUR">Euro</option>
                <option value="USD">Dólar Estados Unidos</option>
                </select>

                <select className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]">
                <option value="Español">Español</option>
                </select>
                </div>
            </div>
            </div>
                <Link to="/products" className="mt-4 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue flex justify-center">
                Finalizar
                </Link>
            </div>
        </div>
    </div>
    </>
);
};

export default SignUpPageStep;

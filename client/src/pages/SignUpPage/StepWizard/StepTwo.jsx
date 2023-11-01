import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
//import Loading from '../../components/Loading';

const COUNTRIES_API =
  'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json';

const StepTwo = ({ submitForm }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Realiza solicitud de la API para obtener la lista de países
    axios
      .get(COUNTRIES_API)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form>
      <div className="rounded-lg bg-gray-100 shadow-md p-2 mb-4">
        <div className="w-312 h-40">
          <div className="select-container flex flex-col space-y-4">
            <input
              className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265] "
              type="text"
              placeholder="Nombre completo de administrado"
            ></input>
            <input
              className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"
              type="text"
              placeholder="Nombre de la Empresa"
            ></input>
            <input
              className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"
              type="text"
              placeholder="Sector de la Sucursal"
            ></input>
          </div>
        </div>
      </div>
      {/* Formulario de paises, moneda e idioma*/}
      <div className="rounded-lg bg-gray-100 shadow-md p-2">
        <div className="w-312 h-40">
          <div className="select-container flex flex-col space-y-4">
            <select
              defaultValue=""
              className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"
            >
              <option value="" disabled>
                Selecciona un país
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <select
              defaultValue=""
              className="border-b border-t-0 border-l-0 border-r-0 bg-gray-100 border-[#9f9f9f] text-[#626265]"
            >
              <option value="" disabled>
                Moneda base
              </option>
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
      <button
        onClick={submitForm}
        className="mt-4 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue flex justify-center"
      >
        Finalizar
      </button>
    </form>
  );
};

export default StepTwo;

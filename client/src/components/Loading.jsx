import { useState, useEffect } from 'react';

const LoadingComponent = () => {
  // Estado para controlar el ancho de la barra de carga
  const [loadingWidth, setLoadingWidth] = useState(50);

  // Simula un efecto de carga
  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingWidth < 100) {
        setLoadingWidth((prevWidth) => {
          const newWidth = prevWidth + 10;
          return newWidth > 100 ? 100 : newWidth;
        });
      }
    }, 20);
    return () => clearInterval(interval);
  }, [loadingWidth]);

  return (
    <div className="loader absolute top-0 left-0 bg-white w-full">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-custom-blue">Stockwise</p>
        </div>
        {/* Agregamos la clase "rounded-full" para el borde redondo */}
        <div className="w-32 h-4 bg-gray-300 rounded-full relative">
          <div
            className="h-full bg-custom-blue transition-width ease-in-out duration-500 rounded-full"
            style={{ width: `${loadingWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
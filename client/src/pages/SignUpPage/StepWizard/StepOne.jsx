import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
//import Loading from '../../components/Loading';

const StepOne = ({ handleChange, signupValues, errors, nextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNextStep = () => {
    if (
      !signupValues.email ||
      !signupValues.password ||
      !signupValues.confirmPassword
    ) {
      return;
    }

    if (errors.email || errors.password || errors.confirmPassword) {
      return;
    }

    nextStep();
  };

  return (
    <form autoComplete='off'>
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
          type='email'
          name='email'
          className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6'
          value={signupValues.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Correo electrónico'
          required
        />
      </div>

      <div
        className={`mt-2.5 mb-1 flex items-center rounded-lg shadow-sm ring-1 ring-inset ${
          errors.password ? 'ring-custom-red' : 'ring-custom-gray'
        } focus-within:ring-2 focus-within:ring-inset ${
          errors.password
            ? 'focus-within:ring-custom-red'
            : 'focus-within:ring-custom-blue'
        } sm:max-w-md relative`}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 relative'
          value={signupValues.password}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Contraseña'
          required
        />
        <button
          type='button'
          className='absolute right-3 text-custom-icon'
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

      <div
        className={`mt-2.5 mb-1 flex items-center rounded-lg shadow-sm ring-1 ring-inset ${
          errors.confirmPassword ? 'ring-custom-red' : 'ring-custom-gray'
        } focus-within:ring-2 focus-within:ring-inset ${
          errors.confirmPassword
            ? 'focus-within:ring-custom-red'
            : 'focus-within:ring-custom-blue'
        } sm:max-w-md relative`}
      >
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name='confirmPassword'
          className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 relative'
          value={signupValues.confirmPassword}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Confirma la contraseña'
          required
        />
        <button
          type='button'
          className='absolute right-3 text-custom-icon'
          aria-label={
            showConfirmPassword
              ? 'Ocultar confirmar contraseña'
              : 'Mostrar confirmar contraseña'
          }
          onMouseUp={() => setShowConfirmPassword(false)}
          onMouseDown={() => setShowConfirmPassword(true)}
        >
          {showConfirmPassword ? (
            <EyeIcon className='h-5 w-5' />
          ) : (
            <EyeSlashIcon className='h-5 w-5' />
          )}
        </button>
      </div>

      {errors &&
        Object.values(errors).map((value, index) => (
          <p key={index} className='text-custom-red text-xs'>
            {value}
          </p>
        ))}

      <button
        onClick={handleNextStep}
        className='mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue flex justify-center'
      >
        Continuar
      </button>
    </form>
  );
};

export default StepOne;

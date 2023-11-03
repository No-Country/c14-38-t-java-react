import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';

const StepOne = ({
  handleChange,
  signupValues,
  setSignupValues,
  setErrors,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
    setErrorMessage('');
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
    // setIsLoading(true);

    axios
      .post('/api/signup', {
        email: signupValues.email,
        password: signupValues.password,
      })
      .then(() => {
        // setIsLoading(false);
        navigate('/signin');
      })
      .catch(() => {
        setSignupValues({
          email: '',
          password: '',
          confirmPassword: '',
        });
        setErrors({
          email: '',
          password: '',
          confirmPassword: '',
        });
        setErrorMessage('El correo ya existe.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      });
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
          className='block flex-1 border-0 bg-transparent p-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6'
          value={signupValues.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Correo electrónico'
          tabIndex='1'
          autoComplete='new-email'
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
          className='block flex-1 border-0 bg-transparent p-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 relative'
          value={signupValues.password}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Contraseña'
          tabIndex='2'
          autoComplete='new-password'
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
          className='block flex-1 border-0 bg-transparent p-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 relative'
          value={signupValues.confirmPassword}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder='Confirma la contraseña'
          tabIndex='3'
          autoComplete='new-password'
          required
        />
        <button
          type='button'
          className='hidden sm:block absolute right-3 text-custom-icon'
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
      {errorMessage && <p className='text-custom-red'>{errorMessage}</p>}

      <button
        onClick={handleNextStep}
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
  );
};

export default StepOne;

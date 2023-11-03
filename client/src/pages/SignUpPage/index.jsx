import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validations/formValidation';

import StepOne from './StepWizard/StepOne';
//import Loading from '../../components/Loading';

const SignUpPage = () => {
  const [signupValues, setSignupValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const totalSteps = 2;
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false); //componente loading
  const nextStep = () => {
    if (step === totalSteps) return;
    setStep(step + 1);
  };

  const handleSignUpChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    switch (input) {
      case 'email':
        setSignupValues((prevValues) => ({
          ...prevValues,
          email: value.toLowerCase(),
        }));
        if (validateEmail(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: '* Ingrese un correo',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: '* Ingrese un correo válido',
          }));
        }
        break;

      case 'password':
        setSignupValues((prevValues) => ({ ...prevValues, password: value }));
        if (validatePassword(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: '* Ingrese una contraseña',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: '* Ingrese una contraseña de 5 a 15 caracteres',
          }));
        }
        break;

      case 'confirmPassword':
        setSignupValues((prevValues) => ({
          ...prevValues,
          confirmPassword: value,
        }));
        if (value === signupValues.password) {
          setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
        } else if (value === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '* Repita la contraseña',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '* Las contraseñas no coinciden',
          }));
        }
        break;
      default:
        break;
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
          <div className='flex flex-col w-full max-w-sm m-4 sm:bg-[white] sm:p-10 rounded sm:shadow-md'>
            {/* <h1 className='text-4xl font-semibold bg-blue-gradient text-transparent bg-clip-text mb-4'>
              <span>Stockwise</span>
            </h1> */}
            <h1 className='text-2xl font-normal'>Crea tu cuenta</h1>
            <p className='text-xs mt-3 mb-2'>
              <span>¿Ya eres usuario?</span>
              <span className='ml-1 text-custom-blue text-left mb-2 cursor-pointer underline'>
                <Link to='/login'>Inicia Sesión</Link>
              </span>
            </p>
            {/* <p className='sm:hidden text-xs mt-2 mb-5'>
              <span>Registrate y comienza a crear tu inventario</span>
            </p> */}
            {/* <p className='text-xs mt-2 mb-3'>
              ¿Ya tienes una cuenta?{' '}
              <span className='text-custom-blue text-left mb-2 cursor-pointer underline'>
                <Link to='/signin'>Inicia sesión</Link>
              </span>
            </p> */}
            <StepOne
              handleChange={handleSignUpChange}
              signupValues={signupValues}
              errors={errors}
              nextStep={nextStep}
              setErrors={setErrors}
              setSignupValues={setSignupValues}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;

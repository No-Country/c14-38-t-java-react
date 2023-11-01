import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validations/formValidation';

import StepOne from './StepWizard/StepOne';
import StepTwo from './StepWizard/StepTwo';
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
  const [isLoading, setIsLoading] = useState(false);//componente loading
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

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      // Realiza solicitud de la API para crear el usuario
      alert(
        "Simulando que pasó todas las valicaciones, se redirige a '/branch'\n\n" +
          'Estos datos se van a enviar en el formulario\n' +
          JSON.stringify(signupValues, null, 2),
      );
      // navigate('/branches');
    } catch (err) {
      console.log(err);
    }
  };

  function renderStep(step) {
    switch (step) {
      case 1:
        return (
          <StepOne
            handleChange={handleSignUpChange}
            signupValues={signupValues}
            errors={errors}
            nextStep={nextStep}
          />
        );
      case 2:
        return <StepTwo submitForm={submitForm} />;
      default:
        return null;
    }
  }

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
            <ProgressBar step={step} totalSteps={totalSteps} />
            <p className="text-xs mt-3">Paso {step}/2</p>
            <h1 className="text-3xl font-normal">Crea tu cuenta</h1>
            <p className="text-xs mt-2 mb-4">
              ¿Ya sos usuario?{' '}
              <span className="text-custom-blue text-left mb-2 cursor-pointer underline">
                <Link to="/login">Inicia Sesión</Link>
              </span>
            </p>
            {renderStep(step)}
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;

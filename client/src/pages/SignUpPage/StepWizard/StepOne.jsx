const StepOne = ({ handleChange, signupValues, errors, nextStep }) => {
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
    <form autoComplete="off">
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
          type="email"
          name="email"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
          value={signupValues.email}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Correo electrónico"
          required
        />
      </div>

      <div
        className={`mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ${
          errors.password ? 'ring-custom-red' : 'ring-custom-gray'
        } focus-within:ring-2 focus-within:ring-inset ${
          errors.password
            ? 'focus-within:ring-custom-red'
            : 'focus-within:ring-custom-blue'
        } sm:max-w-md`}
      >
        <input
          type="password"
          name="password"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
          value={signupValues.password}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Contraseña"
          required
        />
      </div>

      <div
        className={`mt-2.5 mb-1 flex rounded-lg shadow-sm ring-1 ring-inset ${
          errors.confirmPassword ? 'ring-custom-red' : 'ring-custom-gray'
        } focus-within:ring-2 focus-within:ring-inset ${
          errors.confirmPassword
            ? 'focus-within:ring-custom-red'
            : 'focus-within:ring-custom-blue'
        } sm:max-w-md`}
      >
        <input
          type="password"
          name="confirmPassword"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6"
          value={signupValues.confirmPassword}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder="Confirma la contraseña"
          required
        />
      </div>

      {errors &&
        Object.values(errors).map((value, index) => (
          <p key={index} className="text-custom-red text-xs">
            {value}
          </p>
        ))}

      <button
        onClick={handleNextStep}
        className="mt-3 w-full sm:bg-blue-gradient bg-none rounded-full sm:text-custom-white text-sm py-2 px-4 font-normal border border-custom-blue text-custom-blue flex justify-center"
      >
        Continuar
      </button>
    </form>
  );
};

export default StepOne;

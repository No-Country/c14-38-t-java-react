const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="flex mb-1 items-center w-1/2 mx-auto mt-1 bg-[#bebdbd] rounded-full overflow-hidden">
      <div
        className="h-2 bg-[#3058bf]"
        style={{ width: `${(step / totalSteps) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;

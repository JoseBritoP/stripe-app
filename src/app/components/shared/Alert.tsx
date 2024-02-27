type AlertMessage = {
  message: string;
  error: boolean;
};

const AlertComponent = ({ message, error }: AlertMessage) => {
  const value = error === true ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ) : (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" className="h-6 w-6"><path fill="green" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" id="mainIconPathAttribute"></path></svg>
  )
  return (
    <div className={`${
      error ? 'bg-red-400 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-green-300 text-emerald-700 dark:bg-emerald-800 dark:text-green-400'
    } flex justify-left pl-4 items-center rounded-md shadow-md w-full gap-2 m-2`}>
      {value}
      <h1 className={`text-left block my-3 uppercase text-base font-bold `}>{message}</h1>
    </div>
  );
};

export default AlertComponent;
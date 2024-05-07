import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';

const FormFieldEmpty = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonDark, setIsButtonDark] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Please enter your email');
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
    }

    if (!name) {
      setNameError('Please enter your name');
    }

    // Add additional validation rules as needed

    if (name && email && emailPattern.test(email)) {
      navigate("/success")
    }
  };
  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-[1440px] bg-white max-w-full h-[800px] overflow-hidden">
      <img
        className="absolute top-[0px] left-[111px] w-[1218px] h-[800px] object-cover hidden"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute top-[31.9px] left-[52.2px] w-[127.9px] h-[47.4px] overflow-hidden object-cover"
        alt=""
        src="/frame-1261155216@2x.png"
      />
      <main className="absolute top-[141px] left-[426px] flex flex-col items-center justify-start gap-[62px] text-left text-17xl text-mediumseagreen font-covered-by-your-grace">
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[110%] font-normal font-inherit">
            Registration Form
          </h3>
          <h1 className="m-0 w-[588px] relative text-37xl tracking-[-0.02em] leading-[120%] font-semibold font-manrope text-gray1-300 text-center flex items-center justify-center">

            Start your success Journey here!
          </h1>
        </div>
        <form className="m-0 flex flex-col items-start justify-start gap-[47px]" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <input
              className="[outline:none] font-medium font-manrope text-xl bg-whitesmoke-300 w-[417px] rounded-45xl box-border overflow-hidden flex flex-col items-start justify-start py-6 px-9 text-gray1-200 border-[1px] border-solid border-gray1-500"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <div className="text-red-600">{nameError}</div>}
            <input
              className="[outline:none] font-medium font-manrope text-xl bg-whitesmoke-300 w-[417px] rounded-45xl box-border overflow-hidden flex flex-col items-start justify-start py-6 px-9 text-gray1-200 border-[1px] border-solid border-gray1-500"
              placeholder="Enter your email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="text-red-600"><ErrorIcon/> {emailError}</div>}
          </div>
          <button
            type="submit"
            disabled={!name || !email}
            className={`w-[417px] rounded-[107.06px] bg-black flex flex-row items-center justify-center py-[26.11111068725586px] pr-[49.61111068725586px] pl-[41.77777862548828px] box-border cursor-pointer ${(!name || !email) ? 'opacity-50 pointer-events-none' : ''
              }`}
          >
            <div className="relative text-lg capitalize font-semibold font-manrope text-white text-center">
              Submit
            </div>
          </button>
        </form>
      </main>
      <button
        className="cursor-pointer p-4 bg-[transparent] absolute top-[32px] left-[1324px] rounded-21xl flex flex-row items-start justify-start border-[1px] border-solid border-lightgray-400"
        onClick={onFrameButtonClick}
      >
        <div className="overflow-hidden flex flex-row items-start justify-start relative gap-[13.333333969116211px]">
          <CloseIcon className="text-[#000000] text-[24px] font-bold" />
        </div>
      </button>
    </div>
  );
};

export default FormFieldEmpty;

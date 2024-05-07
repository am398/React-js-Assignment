import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Success = () => {
  return (
    <div className="w-full relative bg-white h-[800px] overflow-hidden text-left text-17xl text-mediumseagreen font-covered-by-your-grace">
      <img
        className="absolute top-[31.9px] left-[52.2px] w-[127.9px] h-[47.4px] overflow-hidden"
        alt=""
        src="/frame-1261155216.svg"
      />
      <div className="absolute top-[calc(50%_-_179px)] left-[calc(50%_-_359px)] w-[718px] flex flex-col items-center justify-start gap-[41px]">
        <div className="flex flex-row items-start justify-start">
          <CheckCircleOutlineIcon fontSize="large" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="relative tracking-[-0.02em] leading-[110%]">
            Success Submitted
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-center text-37xl text-gray1-300 font-manrope">

            <div className="relative tracking-[-0.02em] leading-[120%] font-semibold">
              Congratulations
            </div>
            <div className="self-stretch relative text-[27px] leading-[130%] font-medium text-dimgray">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[732px] left-[calc(50%_-_359px)] text-xl leading-[130%] text-center flex items-center w-[718px] text-dimgray font-manrope">
        <span className="w-full">
          <span>
            <span>Redirecting you to Homepage in</span>
            <span className="font-medium font-manrope">{` `}</span>
          </span>
          <b className="text-gray1-300">5 Seconds</b>
        </span>
      </div>
    </div>
  );
};

export default Success;

const Footer = () => {
  return (
    <footer className="w-[1376px] rounded-21xl bg-whitesmoke-100 h-36 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[60px] box-border text-left text-lg text-gray1-300 font-manrope">

      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[668px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
              <h4 className="m-0 relative text-inherit leading-[110%] font-medium font-inherit">
                Talup 2023. All rights reserved
              </h4>
            </div>
            <div className="flex flex-row items-start justify-start gap-[52px]">
              <h4 className="m-0 relative text-inherit [text-decoration:underline] leading-[110%] font-normal font-inherit">{`Terms & Conditions`}</h4>
              <h4 className="m-0 relative text-inherit [text-decoration:underline] leading-[110%] font-normal font-inherit">
                Privacy Policy
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

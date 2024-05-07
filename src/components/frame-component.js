const FrameComponent = () => {
  return (
    <div className="w-[1440px] relative bg-white h-[813px] overflow-hidden shrink-0 text-left text-13xl text-darkgray-200 font-covered-by-your-grace">
      <div className="absolute top-[32px] left-[calc(50%_-_688px)] rounded-21xl bg-whitesmoke-400 w-[1376px] h-[749px] overflow-hidden">
        <img
          className="relative w-[491px] h-[514.6px] opacity-[0.4]"
          alt=""
          src="/union.svg"
        />
        <div className="absolute top-[80px] left-[calc(50%_-_593.5px)] flex flex-col items-start justify-center gap-[20px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[110%] font-normal font-inherit">
            What’s on your mind
          </h3>
          <h1 className="m-0 relative text-41xl tracking-[-0.01em] leading-[110%] font-semibold font-manrope text-gray1-300">
            Ask Questions
          </h1>
        </div>
        <div className="absolute top-[137px] left-[721px] w-[581px] flex flex-col items-start justify-start gap-[36px] text-xl text-gray1-300 font-manrope">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <h4 className="m-0 relative text-inherit leading-[140%] font-semibold font-inherit">
                Do you offer freelancers?
              </h4>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightgray-100" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <h4 className="m-0 relative text-inherit leading-[140%] font-semibold font-inherit">
                <p className="m-0">
                  What’s the guarantee that I will be satisfied
                </p>
                <p className="m-0">with the hired talent?</p>
              </h4>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightgray-100" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <h4 className="m-0 relative text-inherit leading-[140%] font-semibold font-inherit">
                Can I hire multiple talents at once?
              </h4>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <h5 className="m-0 self-stretch relative text-mini leading-[160%] font-normal font-inherit text-gray-600 inline-block h-[78px] shrink-0">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </h5>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightgray-100" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <h4 className="m-0 relative text-inherit leading-[140%] font-semibold font-inherit">
                Why should I not go to an agency directly?
              </h4>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightgray-100" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <h4 className="m-0 w-[446px] relative text-inherit leading-[140%] font-semibold font-inherit flex items-center shrink-0">
                <span className="w-full">
                  <p className="m-0">Who can help me pick a right skillset</p>
                  <p className="m-0">and duration for me?</p>
                </span>
              </h4>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="w-[582px] relative box-border h-px hidden border-t-[1px] border-solid border-lightgray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

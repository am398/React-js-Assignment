import { Button } from "@mui/material";

const Documentation = () => {
  return (
    <div className="w-[568px] h-[1352px] bg-white max-w-full overflow-hidden flex flex-col items-center justify-start pt-[134px] px-5 pb-[134.2px] box-border gap-[31.8px] leading-[normal] tracking-[normal] text-left text-xl text-gray1-400 font-manrope mq450:gap-[16px]">
      <div className="flex flex-row items-start justify-start pt-0 pb-[35.2px] pr-[54px] pl-[53px] box-border max-w-full text-21xl text-gray1-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-semibold font-inherit">
          Primary CTA
        </h1>
      </div>
      <div className="w-[330px] flex flex-col items-start justify-start pt-0 px-0 pb-[16.2px] box-border gap-[9px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
          <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[120px] mq450:text-base mq450:leading-[19px]">
            Default State
          </div>
        </div>
        <div className="rounded-81xl [background:linear-gradient(#1c1c1c,_#1c1c1c),_linear-gradient(97.55deg,_#1c1c1c,_#454444)] flex flex-row items-start justify-start py-[30.5px] px-10 gap-[16px] text-center text-white">
          <div className="relative capitalize font-semibold mq450:text-base">
            Meet your Candidates
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="w-6 h-6 relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]">
              <img
                className="absolute h-[65%] w-[66.67%] top-[17.5%] right-[16.67%] bottom-[17.5%] left-[16.67%] max-w-full overflow-hidden max-h-full [transform:_rotate(180deg)]"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[332px] flex flex-row items-start justify-start pt-0 px-px pb-[54.2px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
            <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[107px] mq450:text-base mq450:leading-[19px]">
              Hover State
            </div>
          </div>
          <div className="rounded-81xl [background:linear-gradient(#4e4e4e,_#4e4e4e),_linear-gradient(97.55deg,_#1c1c1c,_#454444)] flex flex-row items-start justify-start py-[30.5px] px-10 gap-[16px] text-center text-white hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1]">
            <div className="relative capitalize font-semibold mq450:text-base">
              Meet your Candidates
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <div className="w-6 h-6 relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]">
                <img
                  className="absolute h-[65%] w-[66.67%] top-[17.5%] right-[16.67%] bottom-[17.5%] left-[16.67%] max-w-full overflow-hidden max-h-full [transform:_rotate(180deg)]"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[332px] h-[186.2px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full text-21xl text-gray1-300">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-semibold font-inherit">
            Secondary CTA
          </h1>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[46px] text-xl text-gray1-400 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[37px] pl-[33px]">
                <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[120px] whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                  Default State
                </div>
              </div>
              <Button
                className="self-stretch flex-1"
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "18",
                  borderColor: "#eaeaea",
                  borderRadius: "107.05555725097656px",
                  "&:hover": { borderColor: "#eaeaea" },
                }}
              >
                Get projects
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[332px] flex flex-row items-start justify-start pt-0 px-[71px] pb-[37px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
          <div className="flex flex-row items-start justify-start py-0 px-9">
            <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[107px] mq450:text-base mq450:leading-[19px]">
              Hover State
            </div>
          </div>
          <Button
            className="self-stretch h-[77.2px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "18",
              background: "#f1f1f1",
              border: "#eaeaea solid 1.3px",
              borderRadius: "107.05555725097656px",
              "&:hover": { background: "#f1f1f1" },
              height: 77.2,
            }}
          >
            Get projects
          </Button>
        </div>
      </div>
      <div className="w-[332px] flex flex-row items-start justify-center pt-0 pb-[16.4px] pr-0 pl-[7px] box-border max-w-full text-21xl text-gray1-300">
        <div className="w-[167px] flex flex-col items-start justify-start gap-[29px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-semibold font-inherit">
            Carousel
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-[19px] text-xl text-gray1-400">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[119px] shrink-0 [debug_commit:1de1738] mq450:text-base mq450:leading-[19px]">
                Normal State
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[33px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738]">
                  <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-mediumseagreen" />
                  <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-gainsboro" />
                  <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-gainsboro" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[332px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <div className="relative tracking-[-0.02em] leading-[120%] font-medium inline-block min-w-[107px] shrink-0 [debug_commit:1de1738] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1] mq450:text-base mq450:leading-[19px]">
            Hover State
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-6 pl-[27px]">
            <div className="flex flex-row items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738]">
              <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-mediumseagreen" />
              <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-lightgray-200" />
              <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-gainsboro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;

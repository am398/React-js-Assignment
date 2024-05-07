import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onFrameDiv1Click = useCallback(() => {
    navigate("/form-field-empty");
  }, [navigate]);

  return (
    <nav className="m-0 absolute top-[24px] left-[24px] rounded-[65.28px] bg-gray1-400 [backdrop-filter:blur(31.33px)] box-border w-[1392px] flex flex-row items-center justify-between py-[16.97222328186035px] pr-[20.88888931274414px] pl-[52.22222137451172px] text-center text-lg text-gray1-300 font-manrope border-[1px] border-solid border-whitesmoke-500">

      <img
        className="w-[127.9px] relative h-[47.4px] overflow-hidden shrink-0 object-cover z-[0]"
        alt=""
        src="/frame-1261155216@2x.png"
      />
      <div className="flex flex-row items-center justify-end gap-[15.666666984558105px] z-[1]">
        <div
          className="rounded-[107.06px] flex flex-row items-center justify-center py-[26.11111068725586px] px-[41.77777862548828px] cursor-pointer border-[1.3px] border-solid border-whitesmoke-500"
          onClick={onFrameDiv1Click}
        >
          <h2 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Get projects
          </h2>
        </div>
        <div className="rounded-[107.06px] [background:linear-gradient(#1c1c1c,_#1c1c1c),_linear-gradient(97.55deg,_#1c1c1c,_#454444)] flex flex-row items-center justify-center py-[26.11111068725586px] pr-[49.61111068725586px] pl-[41.77777862548828px] text-white">
          <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit">
            Onboard Talent
          </h2>
        </div>
      </div>
      <img
        className="w-[25.4px] absolute !m-[0] top-[35.6px] left-[1759.6px] h-[25.5px] object-contain z-[2]"
        alt=""
        src="/group-1171281504@2x.png"
      />
    </nav>
  );
};

export default Navbar;

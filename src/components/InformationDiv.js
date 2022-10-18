import LeftBar from "./infoFolder/LeftBar";
import MiddleBar from "./infoFolder/MiddleBar";
import RightBar from "./infoFolder/RightBar";

const InformationDiv = () => {
  return (
    <div className="h-78vh d-flx flx-x x-x-jc-sb x-y-s flx-wrp">
      <div className="m-0-20px">
        <LeftBar />
      </div>

      <div className="m-0-10px flx-1 h-100%">
        <MiddleBar />
      </div>

      <div data-right-bar-container className="m-0-20px h-100% w-30%">
        <RightBar />
      </div>
    </div>
  );
};

export default InformationDiv;

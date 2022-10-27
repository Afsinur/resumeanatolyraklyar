import LeftBar from "./infoFolder/LeftBar";
import MiddleBar from "./infoFolder/MiddleBar";
import RightBar from "./infoFolder/RightBar";

const InformationDiv = () => {
  return (
    <div className="w-95% h-83vh d-flx flx-x x-x-jc-sb x-y-s flx-wrp">
      <div data-left-container className="m-0-20px">
        <LeftBar />
      </div>

      <div className="flx-1 h-100%">
        <MiddleBar />
      </div>

      <div data-right-bar-container className="m-0-20px h-100% w-26%">
        <RightBar />
      </div>
    </div>
  );
};

export default InformationDiv;

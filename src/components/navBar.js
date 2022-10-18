//img
import menuBarImg from "./img/menu-bar.png";
import searchIcon from "./img/searchIcon.png";
import github from "./img/github.png";
import phone from "./img/phone.png";
import whatsapp from "./img/whatsapp.png";

//json data
import jsonData from "./json/data.json";

//js files
import selectors from "./js/selectors";

const NavBar = () => {
  let { qs_a } = selectors;

  let right3img = [whatsapp, phone, github];
  let profileImage = jsonData.basics.profileImage;
  let fullName = `${jsonData.basics.firstName} ${jsonData.basics.lastName}`;

  const handleSrchClick = () => {
    qs_a("[data-nav-src-txt]")[0].focus();
  };

  return (
    <nav className="d-flx flx-x x-x-jc-sb x-y-c p-25px flx-wrp">
      <div className="d-flx flx-x x-x-c x-y-c ps-r flx-wrp">
        <span>
          <img src={menuBarImg} alt="menu-bar.png" className="w-40px" />
        </span>

        <span className="p-0-30px-0-30px fs-1.25rem fw-500 cl-#1f1c2e">
          Portfolio
        </span>

        <div data-nav-src-txt-container className="w-400px ps-r m-0-0-10px-0">
          <input
            data-nav-src-txt
            type="text"
            className="b-rds-20px br-none bg#-#fff p-10px bx-shd-0-2px-10px-2px-rgba(0,0,0,0.10) w-100%"
          />

          <span
            onClick={handleSrchClick}
            className="crs-p ps-a t-50% r-0"
            style={{
              transform: "translate(-50%, -45%)",
            }}
          >
            <img src={searchIcon} alt="searchIcon.png" className="w-20px" />
          </span>
        </div>
      </div>

      <div className="d-flx flx-x x-x-c x-y-c">
        <div className="d-flx flx-x x-x-c x-y-c">
          {right3img.map((src, i) => (
            <span className="crs-p m-0-10px cl-#4a4a4a" key={i}>
              <a href="#">
                <img src={src} alt={src} className="w-30px" />
              </a>
            </span>
          ))}
        </div>

        <div className="br-1px-solid-#ccc h-35px"></div>

        <div className=" d-flx flx-x x-x-c x-y-c">
          <img
            src={profileImage}
            alt="profile image"
            className="m-0-5px-0-10px w-32px b-rds-50%"
          />
          <span className="fw-600 cl-#1f1c2e">{fullName}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

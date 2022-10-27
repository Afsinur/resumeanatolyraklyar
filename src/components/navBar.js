import ReactTooltip from "react-tooltip";

//img
import searchIcon from "./img/searchIcon.png";
import phone_ from "./img/phone.png";
import whatsapp_ from "./img/whatsapp.png";
import cv_ from "./img/cv.png";

import me from "./img/me.jpg";

//json data
import jsonData from "./json/data.json";

//js files
import selectors from "./js/selectors";

const NavBar = () => {
  let { qs_a } = selectors;
  let { basics } = jsonData;
  let { socialLinks } = basics;
  let { whatsapp, phone } = socialLinks;

  let right3img = [
    { src: whatsapp_, tip: "whatsapp", href: whatsapp },
    { src: phone_, tip: "phone", href: phone },
    { src: cv_, tip: "cv" },
  ];

  let fullName = `${jsonData.basics.firstName} ${jsonData.basics.lastName}`;

  const handleSrchClick = () => {
    qs_a("[data-nav-src-txt]")[0].focus();
  };

  return (
    <nav className="w-95% d-flx flx-x x-x-jc-sb x-y-c p-25px flx-wrp">
      <div className="d-flx flx-x x-x-c x-y-c ps-r flx-wrp">
        <div className="d-flx flx-y y-x-c y-y-c">
          <div className="h-2px w-12px bg-#000"></div>
          <div className="h-2px w-26px bg-#000 m-4px-0"></div>
          <div className="h-2px w-12px bg-#000"></div>
        </div>

        <span className="p-0-30px-0-30px fs-1.2rem fw-500 cl-#1f1c2e">
          Portfolio
        </span>

        <div data-nav-src-txt-container className="w-480px ps-r">
          <input
            data-nav-src-txt
            type="text"
            className="fs-1.02rem b-rds-20px br-none bg#-#fff p-8px-20px bx-shd-0-2px-10px-2px-rgba(0,0,0,0.10) w-100%"
            placeholder="Search"
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

      <div className="d-flx flx-x x-x-c x-y-c p-0-10px-0-0">
        <div data-nav-contact-img className="d-flx flx-x x-x-c x-y-c">
          {right3img.map(({ src, tip, href }, i) => (
            <span className="crs-p m-0-6px cl-#4a4a4a" key={i}>
              {i == 2 ? (
                <a href="./json/data.json" download>
                  <img
                    data-tip={tip}
                    data-for="nvBr"
                    src={src}
                    alt={src}
                    className="w-26px"
                  />
                </a>
              ) : (
                <a href={href}>
                  <img
                    data-tip={tip}
                    data-for="nvBr"
                    src={src}
                    alt={src}
                    className="w-28px"
                  />
                </a>
              )}
            </span>
          ))}
        </div>

        <div className="br-1px-solid-#ccc h-35px"></div>

        <div className=" d-flx flx-x x-x-c x-y-c">
          <img
            src={me}
            alt="profile image"
            className="m-0-5px-0-10px w-32px b-rds-50%"
          />
          <span className="fw-600 cl-#1f1c2e">{fullName}</span>
        </div>
      </div>

      <ReactTooltip id="nvBr" />
    </nav>
  );
};

export default NavBar;

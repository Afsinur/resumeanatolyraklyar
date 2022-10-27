import ReactTooltip from "react-tooltip";

import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import twitter_ from "../img/twitter.png";
import instagram from "../img/instagram.png";
import github_ from "../img/github.png";

//json
import jsonData from "../json/data.json";

const LeftBar = () => {
  let { basics } = jsonData;
  let { socialLinks } = basics;
  let { fb, linkedIn, twitter, insta, github } = socialLinks;

  let left4img = [
    { src: facebook, tip: "facebook", href: fb },
    { src: linkedin, tip: "linkedin", href: linkedIn },
    { src: twitter_, tip: "twitter", href: twitter },
    { src: instagram, tip: "instagram", href: insta },
    { src: github_, tip: "github", href: github },
  ];

  return (
    <div>
      <ul data-social-links-ul className="li-0 m-60px-0">
        {left4img.map(({ src, tip, href }, i) => {
          return (
            <li className="m-30px-0 crs-p" key={i}>
              <a href={href}>
                <img
                  data-tip={tip}
                  data-for="leftBr"
                  src={src}
                  alt={src}
                  className="w-36px"
                />
              </a>
            </li>
          );
        })}
      </ul>

      <ReactTooltip id="leftBr" />
    </div>
  );
};

export default LeftBar;

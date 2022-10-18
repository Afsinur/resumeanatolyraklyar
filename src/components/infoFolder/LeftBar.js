import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";

const LeftBar = () => {
  let left4img = [facebook, linkedin, twitter, instagram];

  return (
    <div>
      <ul data-social-links-ul className="li-0 m-80px-0">
        {left4img.map((src, i) => {
          return (
            <li className="m-20px-0 crs-p" key={i}>
              <a href="#">
                <img src={src} alt={src} className="w-40px" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftBar;

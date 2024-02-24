import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import { download } from "../assets/icons";
import UmakantShindeCV from "../assets/umakantshinderesume.pdf" ;

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2024 <strong>Umakant Shinde</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
          <a href={UmakantShindeCV} download>
            <img
              className="w-6 h-6 object-contain"
              src={download}
              alt="Download CV"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

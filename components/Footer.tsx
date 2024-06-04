import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues.</p>
        <p className="footer_copyright_textTwo">Feel free to copy.</p>
        <p className="footer_copyright_textThree">
          Link to previous
          <span onClick={() => window.open("http://", "_blank")}> version</span>
        </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img src={Github.src} alt="" onClick={() => window.open("https://github.com/dev0715", "_blank")} />
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/devninja/", "_blank")}
          />
          <img
            src={Instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/dev_ninja/", "_blank")}
          />
          <img src={Gmail.src} alt="" onClick={() => window.open("mailto:webdev0715@gmail.com", "_blank")} />
        </div>
      </div>
    </footer>
  );
};

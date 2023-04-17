import style from "./NavBar.module.css";
import LINKEDIN from "../../Media/linkedin.svg";
import GITHUB from "../../Media/github.svg";
import RESUME from "../../Media/resume.svg";
import CV from "../../Media/CV.pdf";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.scrollLinks}>
        <a className={style.scrollLink}>
          Skills
        </a>
        <a className={style.scrollLink}>
          Projects
        </a>
        <a className={style.scrollLink}>
          About
        </a>
        <a className={style.scrollLink}>
          Contact
        </a>
      </div>
      <div className={style.linksContainer}>
        <a
          href="https://www.linkedin.com/in/felipe-siravegna/"
          target="_blank"
          className={style.link}
        >
          <img src={LINKEDIN} className={style.navbarImages} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/FelipeSiravegna"
          target="_blank"
          className={style.link}
        >
          <img src={GITHUB} className={style.navbarImages} alt="GitHub" />
        </a>
        <a href={CV} download="Felipe Siravegna Resume">
          <img src={RESUME} className={style.navbarImages} alt="Resume" />
        </a>
      </div>
    </div>
  );
}

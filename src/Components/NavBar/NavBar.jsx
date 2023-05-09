import style from "./NavBar.module.css";
import LINKEDIN from "../../Media/linkedin.svg";
import GITHUB from "../../Media/github.svg";
import RESUME from "../../Media/resume.svg";
import CV from "../../Media/CV.pdf";
import SKILLS from "../../Media/skills.svg";
import PROJECTS from "../../Media/projects.svg";
import ABOUT from "../../Media/about.svg";
import CONTACT from "../../Media/contact.svg";

export default function NavBar() {
  return (
    <nav className={style.container}>
      <div className={style.scrollLinksMobile}>
        <a href="#skills" className={style.scrollLink}>
          <img src={SKILLS} className={style.navbarImages} alt="Skills" />
        </a>
        <a href="#projects" className={style.scrollLink}>
          <img src={PROJECTS} className={style.navbarImages} alt="Projects" />
        </a>
        <a href="#about" className={style.scrollLink}>
          <img src={ABOUT} className={style.navbarImages} alt="About" />
        </a>
        <a href="#contact" className={style.scrollLink}>
          <img src={CONTACT} className={style.navbarImages} alt="Contact" />
        </a>
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
      <div className={style.scrollLinksPC}>
        <div className={style.scrollLinksInside}>
          <a href="#skills" className={style.scrollLink}>
            <h4>Skills</h4>
          </a>
          <a href="#projects" className={style.scrollLink}>
            <h4>Projects</h4>
          </a>
          <a href="#about" className={style.scrollLink}>
            <h4>About</h4>
          </a>
          <a href="#contact" className={style.scrollLink}>
            <h4>Contact</h4>
          </a>
        </div>
        <div className={style.scrollLinksOutside}>
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
    </nav>
  );
}

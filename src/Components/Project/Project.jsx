import style from "./Project.module.css";
import ProjectLink from "../ProjectLink/ProjectLink";
import DEPLOY from "../../Media/eye.svg";
import CODE from "../../Media/code.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project({
  name,
  screenshot,
  description,
  technologies,
  deployURL,
  codeURL1,
  codeURL2,
}) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <article data-aos="zoom-in" className={style.projectBox}>
      <h3 className={style.projectTitle}>{name}</h3>
      <img
        className={style.projectScreenshot}
        src={screenshot}
        alt={name}
        aria-label={name}
      />
      <div className={style.projectTechnologies}>{technologies}</div>
      <p className={style.projectDescription}>{description}</p>
      {codeURL2 === "" ? (
        <div className={style.links}>
          <ProjectLink url={deployURL} image={DEPLOY} alt="DEPLOY" />
          <ProjectLink url={codeURL1} image={CODE} alt="CODE" />
        </div>
      ) : (
        <div className={style.links}>
          <ProjectLink url={deployURL} image={DEPLOY} alt="DEPLOY" />
          <ProjectLink url={codeURL2} image={CODE} alt="CODE" />
          <ProjectLink url={codeURL1} image={CODE} alt="CODE" />
        </div>
      )}
    </article>
  );
}

import style from "./Projects.module.css";
import GAMEGEIST from "../../Media/Projects/gamegeist.png";
import THECORNERMOVIES from "../../Media/Projects/the corner movies.png";
import POSTGRESQL from "../../Media/Skills/postgresql.svg";
import SEQUELIZE from "../../Media/Skills/sequelize.svg";
import NODEJS from "../../Media/Skills/nodejs.svg";
import EXPRESS from "../../Media/Skills/express.svg";
import HTML from "../../Media/Skills/html.svg";
import CSS from "../../Media/Skills/css.svg";
import JAVASCRIPT from "../../Media/Skills/javascript.svg";
import REACT from "../../Media/Skills/react.svg";
import REDUX from "../../Media/Skills/redux.svg";
import BOOTSTRAP from "../../Media/Skills/bootstrap.svg";
import MATERIALUI from "../../Media/Skills/materialui.svg";
import DEPLOY from "../../Media/eye.svg";
import CODE from "../../Media/code.svg";

const technologies = [
  { icon: POSTGRESQL, name: "Postgresql" },
  { icon: SEQUELIZE, name: "Sequelize" },
  { icon: NODEJS, name: "Nodejs" },
  { icon: EXPRESS, name: "Express" },
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: JAVASCRIPT, name: "JavaScript" },
  { icon: REACT, name: "React" },
  { icon: REDUX, name: "Redux" },
];

const technologiesHTML = technologies.map((technology) => (
  <img
    className={style.tech}
    src={technology.icon}
    alt={technology.name}
    aria-label={technology.name}
    key={technology.name}
  />
));

export default function Projects() {
  return (
    <section id="projects" className={style.container}>
      <div className={style.insideContainer}>
        <h2 className={style.projectsTitle}>Projects</h2>
        <div className={style.projectsContainer}>
          <article className={style.projectBox}>
            <h3 className={style.projectTitle}>Gamegeist</h3>
            <img
              className={style.projectScreenshot}
              src={GAMEGEIST}
              alt="Gamegeist"
              aria-label="Gamegeist"
            />
            <div className={style.projectTechnologies}>{technologiesHTML}</div>
            <p className={style.projectDescription}>
              Web application focused on video games using the rawg.io API. In
              this application, users can view a list of video games that they
              can sort and filter, and also create a new game. Users also have
              access to a detail page of each videogame where they can see the
              videogame rating, a description, where they can play it and more.
            </p>
            <div className={style.links}>
              <a href="https://gamegeist.vercel.app/" target="_blank">
                <img
                  className={style.link}
                  src={DEPLOY}
                  alt="Deploy"
                  aria-label="Deploy"
                />
              </a>
              <a
                href="https://github.com/FelipeSiravegna/PI-Videogames"
                target="_blank"
              >
                <img
                  className={style.link}
                  src={CODE}
                  alt="Code"
                  aria-label="Code"
                />
              </a>
            </div>
          </article>
          <article className={style.projectBox}>
            <h3 className={style.projectTitle}>The corner movies</h3>
            <img
              className={style.projectScreenshot}
              src={THECORNERMOVIES}
              alt="The corner movies"
              aria-label="The corner movies"
            />
            <div className={style.projectTechnologies}>
              {technologiesHTML}
              <img
                className={style.tech}
                src={BOOTSTRAP}
                alt="Bootstrap"
                aria-label="Bootstrap"
              />
              <img
                className={style.tech}
                src={MATERIALUI}
                alt="Material UI"
                aria-label="Material UI"
              />
            </div>
            <p className={style.projectDescription}>
              Web application focused on movies where users can view a list of
              movies that they can sort and filter. Additionally, they can see
              details of each movie that contain information about the cast, a
              synopsis, and where they can watch the movie trailer. Users can
              also follow other users, create lists, subscribe to a plan, and
              more.
            </p>
            <div className={style.links}>
              <a href="https://thecornermovies.vercel.app/" target="_blank">
                <img
                  className={style.link}
                  src={DEPLOY}
                  alt="Deploy"
                  aria-label="Deploy"
                />
              </a>
              <a
                href="https://github.com/FelipeSiravegna/ProyectoGrupal-Backend"
                target="_blank"
              >
                <img
                  className={style.link}
                  src={CODE}
                  alt="Code"
                  aria-label="Code"
                />
              </a>
              <a
                href="https://github.com/FelipeSiravegna/ProyectoGrupal-Frontend"
                target="_blank"
              >
                <img
                  className={style.link}
                  src={CODE}
                  alt="Code"
                  aria-label="Code"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
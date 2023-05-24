import style from "./Projects.module.css";
import Project from "../Project/Project";
import GAMEGEIST from "../../Media/Projects/gamegeist.png";
import THECORNERMOVIES from "../../Media/Projects/the corner movies.png";
import CALCULATORAPP from '../../Media/Projects/calculator app.png';
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

const technologiesGamegeist = [
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

const technologiesHTMLGamegeist = technologiesGamegeist.map((technology) => (
  <img
    className={style.tech}
    src={technology.icon}
    alt={technology.name}
    aria-label={technology.name}
    key={technology.name}
  />
));

const technologiesTCM = [
  { icon: POSTGRESQL, name: "Postgresql" },
  { icon: SEQUELIZE, name: "Sequelize" },
  { icon: NODEJS, name: "Nodejs" },
  { icon: EXPRESS, name: "Express" },
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: JAVASCRIPT, name: "JavaScript" },
  { icon: REACT, name: "React" },
  { icon: REDUX, name: "Redux" },
  { icon: BOOTSTRAP, name: "Bootstrap" },
  { icon: MATERIALUI, name: "MaterialUI" },
];

const technologiesHTMLTCM = technologiesTCM.map((technology) => (
  <img
    className={style.tech}
    src={technology.icon}
    alt={technology.name}
    aria-label={technology.name}
    key={technology.name}
  />
));

// const technologiesCalculatorApp = [
//   {icon: HTML, name: "HTML"},
//   {icon: CSS, name: "CSS"},
//   {icon: JAVASCRIPT, name: "JavaScript"}
// ]

// const technologiesCalculatorAppHTML = technologiesCalculatorApp.map((technology) => (
//   <img
//     className={style.tech}
//     src={technology.icon}
//     alt={technology.name}
//     aria-label={technology.name}
//     key={technology.name}
//   />
// ))

const projects = [
  {
    name: "Gamegeist",
    screenshot: GAMEGEIST,
    description:
      "Web application focused on video games using the rawg.io API. In this application, users can view a list of video games that they can sort and filter, and also create a new game. Users also have access to a detail page of each videogame where they can see the videogame rating, a description, where they can play it and more.",
    technologies: technologiesHTMLGamegeist,
    deployURL: "https://gamegeist.vercel.app/",
    codeURL1: "https://github.com/FelipeSiravegna/PI-Videogames",
    codeURL2: "",
  },
  {
    name: "The corner movies",
    screenshot: THECORNERMOVIES,
    description:
      "Web application focused on movies where users can view a list of movies that they can sort and filter. Additionally, they can see details of each movie that contain information about the cast, a synopsis, and where they can watch the movie trailer. Users can also follow other users, create lists, subscribe to a plan, and more.",
    technologies: technologiesHTMLTCM,
    deployURL: "https://thecornermovies.vercel.app/",
    codeURL1: "https://github.com/FelipeSiravegna/ProyectoGrupal-Backend",
    codeURL2: "https://github.com/FelipeSiravegna/ProyectoGrupal-Frontend",
  },
  // {
  //   name: "Calculator App",
  //   screenshot: CALCULATORAPP,
  //   description: "A simple calculator app.",
  //   technologies: technologiesCalculatorAppHTML,
  //   deployURL: "https://calculatorapp-siravegna.vercel.app/",
  //   codeURL1: "https://github.com/FelipeSiravegna/CalculatorApp",
  //   codeURL2: ""
  // }
];

const projectsHTML = projects.map((project) => (
  <Project
    name={project.name}
    screenshot={project.screenshot}
    description={project.description}
    technologies={project.technologies}
    deployURL={project.deployURL}
    codeURL1={project.codeURL1}
    codeURL2={project.codeURL2}
    key={project.name}
  />
));

export default function Projects() {
  return (
    <section id="projects" className={style.container}>
      <div className={style.insideContainer}>
        <h2 className={style.projectsTitle}>Projects</h2>
        <div className={style.projectsContainer}>{projectsHTML}</div>
      </div>
    </section>
  );
}

import style from "./Skills.module.css";
import NODEJS from "../../Media/Skills/nodejs.svg";
import EXPRESS from "../../Media/Skills/express.svg";
import POSTGRESQL from "../../Media/Skills/postgresql.svg";
import SEQUELIZE from "../../Media/Skills/sequelize.svg";
import HTML from "../../Media/Skills/html.svg";
import CSS from "../../Media/Skills/css.svg";
import JAVASCRIPT from "../../Media/Skills/javascript.svg";
import REACT from "../../Media/Skills/react.svg";
import REDUX from "../../Media/Skills/redux.svg";
import GIT from "../../Media/Skills/git.svg";
import POSTMAN from "../../Media/Skills/postman.svg";
import TRELLO from "../../Media/Skills/trello.svg";
import NOTION from "../../Media/Skills/notion.svg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const backendSkills = [
  { icon: POSTGRESQL, name: "Postgresql" },
  { icon: SEQUELIZE, name: "Sequelize" },
  { icon: NODEJS, name: "Nodejs" },
  { icon: EXPRESS, name: "Express" },
];

const frontendSkills = [
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: JAVASCRIPT, name: "JavaScript" },
  { icon: REACT, name: "React" },
  { icon: REDUX, name: "Redux" },
];

const tools = [
  { icon: GIT, name: "Git" },
  { icon: POSTMAN, name: "Postman" },
  { icon: TRELLO, name: "Trello" },
  { icon: NOTION, name: "Notion" },
];

const backendSkillsHTML = backendSkills.map((skill) => (
  <div className={style.skill} key={skill.name}>
    <img src={skill.icon} alt={skill.name} aria-label={skill.name} className={style.skillLogo} />
    <h3 className={style.skillName}>{skill.name}</h3>
  </div>
));

const frontendSkillsHTML = frontendSkills.map((skill) => (
  <div className={style.skill} key={skill.name}>
    <img src={skill.icon} alt={skill.name} aria-label={skill.name} className={style.skillLogo} />
    <h3 className={style.skillName}>{skill.name}</h3>
  </div>
));

const toolsHTML = tools.map((tool) => (
  <div className={style.skill} key={tool.name}>
    <img src={tool.icon} alt={tool.name} aria-label={tool.name} className={style.skillLogo} />
    <h3 className={style.skillName}>{tool.name}</h3>
  </div>
));

export default function Skills() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <section id="skills" className={style.container}>
      <div className={style.insideContainer}>
        <h2>Skills</h2>
        <div className={style.skillsContainer}>
          <div data-aos="zoom-in" className={style.backendSkills}>{backendSkillsHTML}</div>
          <div data-aos="zoom-in" className={style.frontendSkills}>{frontendSkillsHTML}</div>
          <div data-aos="zoom-in" className={style.tools}>{toolsHTML}</div>
        </div>
      </div>
    </section>
  );
}
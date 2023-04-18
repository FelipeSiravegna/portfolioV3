import style from "./Skills.module.css";
import NODEJS from "../../Media/Skills/nodejs.svg";
import EXPRESS from "../../Media/Skills/express.svg";
import POSTGRESQL from "../../Media/Skills/postgresql.svg";
import SEQUELIZE from '../../Media/Skills/sequelize.svg'
import HTML from '../../Media/Skills/html.svg'
import CSS from '../../Media/Skills/css.svg'
import JAVASCRIPT from '../../Media/Skills/javascript.svg'
import REACT from "../../Media/Skills/react.svg";
import REDUX from '../../Media/Skills/redux.svg'
import GIT from "../../Media/Skills/git.svg";
import POSTMAN from '../../Media/Skills/postman.svg'
import TRELLO from '../../Media/Skills/trello.svg'
import NOTION from '../../Media/Skills/notion.svg'

export default function Skills() {
  return (
    <div className={style.bigContainer}>
        <div id="skills" className={style.container}>
        <div className={style.insideContainer}>
            <h2>Skills</h2>
            <div className={style.skillsContainer}>
            <div className={style.backendSkills}>
                <div className={style.skill}>
                <img src={POSTGRESQL} alt="PostgreSQL" className={style.skillLogo} />
                <h3 className={style.skillName}>Postgresql</h3>
                </div>
                <div className={style.skill}>
                <img src={SEQUELIZE} alt="Sequelize" className={style.skillLogo} />
                <h3 className={style.skillName}>Sequelize</h3>
                </div>
                <div className={style.skill}>
                <img src={NODEJS} alt="NodeJs" className={style.skillLogo} />
                <h3 className={style.skillName}>Nodejs</h3>
                </div>
                <div className={style.skill}>
                <img src={EXPRESS} alt="Express" className={style.skillLogo} />
                <h3 className={style.skillName}>Express</h3>
                </div>
            </div>
            <div className={style.frontendSkills}>
                <div className={style.skill}>
                <img src={HTML} alt="HTML5" className={style.skillLogo} />
                <h3 className={style.skillName}>HTML</h3>
                </div>
                <div className={style.skill}>
                <img src={CSS} alt="CSS3" className={style.skillLogo} />
                <h3 className={style.skillName}>CSS</h3>
                </div>
                <div className={style.skill}>
                <img src={JAVASCRIPT} alt="JavaScript" className={style.skillLogo} />
                <h3 className={style.skillName}>JavaScript</h3>
                </div>
                <div className={style.skill}>
                <img src={REACT} alt="React" className={style.skillLogo} />
                <h3 className={style.skillName}>React</h3>
                </div>
                <div className={style.skill}>
                <img src={REDUX} alt="Redux" className={style.skillLogo} />
                <h3 className={style.skillName}>Redux</h3>
                </div>
            </div>
            <div className={style.tools}>
                <div className={style.skill}>
                <img src={GIT} alt="Git" className={style.skillLogo} />
                <h3 className={style.skillName}>Git</h3>
                </div>
                <div className={style.skill}>
                <img src={POSTMAN} alt="Postman" className={style.skillLogo} />
                <h3 className={style.skillName}>Postman</h3>
                </div>
                <div className={style.skill}>
                <img src={TRELLO} alt="Trello" className={style.skillLogo} />
                <h3 className={style.skillName}>Trello</h3>
                </div>
                <div className={style.skill}>
                <img src={NOTION} alt="Notion" className={style.skillLogo} />
                <h3 className={style.skillName}>Notion</h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

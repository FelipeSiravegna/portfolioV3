import style from "./Projects.module.css";
import GAMEGEIST from "../../Media/Projects/gamegeist.png";
import THECORNERMOVIES from "../../Media/Projects/the corner movies.png";

export default function Projects() {
  return (
    <section id="projects" className={style.container}>
      <div className={style.insideContainer}>
        <h2 className={style.projectsTitle}>Projects</h2>
        <div className={style.projectsContainer}>
          <article className={style.projectContainer}>
            <img
              src={GAMEGEIST}
              alt="Gamegeist"
              aria-label="Gamegeist"
              className={style.projectImage}
            />
            <div className={style.projectInfo}>
              <h3 className={style.projectName}>Gamegeist</h3>
              <h5 className={style.projectSubtitle}>Full Stack Developer (Whole app)</h5>
              <p className={style.projectDescription}>
                Web application focused on video games using the rawg.io API. In
                this application, users can view a list of video games that they
                can sort and filter, and also create a new game. Users also have
                access to a detail page of each videogame where they can see the
                videogame rating, a description, where they can play it and
                more.
              </p>
              <div className={style.linksContainer}>
                <a
                  href="https://gamegeist.vercel.app/"
                  target="_blank"
                  className={style.linksButton}
                >
                  <span>Application</span>
                </a>
                <a
                  href="https://github.com/FelipeSiravegna/PI-Videogames"
                  target="_blank"
                  className={style.linksButton}
                >
                  <span>Code</span>
                </a>
              </div>
            </div>
          </article>
          <article className={style.projectContainer}>
            <img
              src={THECORNERMOVIES}
              alt="The corner movies"
              aria-label="The corner movies"
              className={style.projectImage}
            />
            <div className={style.projectInfo}>
              <h3 className={style.projectName}>The corner movies</h3>
              <h5 className={style.projectSubtitle}>Full Stack Developer</h5>
              <p className={style.projectDescription}>
                Web application focused on movies. In this application, users
                can view a list of movies that they can sort and filter.
                Additionally, they can see details of each movie that contain
                information about the cast, a synopsis, and where they can watch
                the movie trailer. Among many features, users can follow other
                users, create lists, subscribe to a plan, and more.
              </p>
              <div className={style.linksContainer}>
                <a
                  href="https://thecornermovies.vercel.app/"
                  target="_blank"
                  className={style.linksButton}
                >
                  <span>Application</span>
                </a>
                <a
                  href="https://github.com/FelipeSiravegna/ProyectoGrupal-Backend"
                  target="_blank"
                  className={style.linksButton}
                >
                  <span>Backend Code</span>
                </a>
                <a
                  href="https://github.com/FelipeSiravegna/ProyectoGrupal-Frontend"
                  target="_blank"
                  className={style.linksButton}
                >
                  <span>Frontend Code</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

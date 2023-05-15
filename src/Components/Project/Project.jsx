import style from "./Project.module.css";

export default function Project({
  projectName,
  projectDescription,
  projectScreenshot,
  projectTechnologies,
  projectDeploy,
  projectCode1,
  projectCode2,
}) {
  return (
    <article>
      <h3 className={style.projectTitle}>{projectName}</h3>
      <img
        className={style.projectScreenshot}
        src={projectScreenshot}
        alt={projectName}
        aria-label={projectName}
      />
      <div className={style.projectTechnologies}>
        {projectTechnologies}
      </div>
      <p className={style.projectDescription}>
        {projectDescription}
      </p>
      <div className={style.links}>
        
      </div>
    </article>
  );
}

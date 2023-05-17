import style from "./ProjectLink.module.css";

export default function ProjectLink({ url, image, alt }) {
  return (
    <div>
      <a href={url} target="_blank">
        <img src={image} alt={alt} aria-label={alt} className={style.link} />
      </a>
    </div>
  );
}

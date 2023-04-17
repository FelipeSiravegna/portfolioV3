import style from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={style.container}>
      <h1>Hi, I'm <b className={style.color}>Felipe Siravegna</b>.<br/> I'm a full stack developer.</h1>
    </div>
  );
}

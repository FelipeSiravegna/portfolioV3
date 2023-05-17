import style from "./Welcome.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={style.bigContainer} id="welcome">
      <div data-aos="fade-right" className={style.container}>
        <h1>
          Hi, I'm <b className={style.color}>Felipe Siravegna</b>.<br /> I'm a
          full stack developer.
        </h1>
      </div>
    </div>
  );
}

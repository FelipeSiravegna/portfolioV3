import style from "./About.module.css";
import PIC from "../../Media/profilepic.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <section id="about" className={style.container}>
      <div className={style.insideContainer}>
        <h2 className={style.aboutTitle}>About</h2>
        <div className={style.infoContainer}>
          <p data-aos="fade-right" className={style.aboutText}>
            Full Stack Developer with over 800 hours of practice. Graduated from
            soyHenry bootcamp where I developed a complete video game
            application and also participated in the development of a movie
            application in a team of 7 people.
            <br />
            <br />
            I am committed to delivering high-quality solutions to meet user
            needs and enhance customer experience.
            <br />
            <br />I am constantly seeking new opportunities to expand and
            improve my skills and collaborate as part of a team to achieve
            outstanding results.
          </p>
          <img data-aos="fade-left" src={PIC} className={style.profilepic} />
        </div>
      </div>
    </section>
  );
}

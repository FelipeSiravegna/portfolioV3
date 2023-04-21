import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="about" className={style.container}>
      <div className={style.insideContainer}>
        <h2 className={style.contactTitle}>Contact</h2>
        <form action="https://formsubmit.co/68fbb8c994987283faabdfe03ce8d376" method="POST" className={style.form} >
                <label for="nombre" className={style.label}>Name</label>
                <input type="text" name="Name" className={style.input}/>

                <label for="email" className={style.label}>E-Mail</label>
                <input type="email" name="Email" className={style.input}/>

                <label for="mensaje" className={style.label}>Message</label>
                <textarea name="Message" cols="15" rows="8" className={style.messageInput}/>

                <input type="submit" value="Send" className={style.button}/>

                <input type="hidden" name="_next" value="https://felipesiravegnadev.vercel.app/" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
      </div>
    </section>
  );
}

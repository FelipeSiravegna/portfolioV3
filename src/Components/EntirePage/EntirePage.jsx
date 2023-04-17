import style from './EntirePage.module.css'
import Welcome from '../Welcome/Welcome.jsx'
import Skills from '../Skills/Skills.jsx'
import Projects from '../Projects/Projects.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'

export default function EntirePage(){
    return(
        <div>
            <Welcome />
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects/>   
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
}
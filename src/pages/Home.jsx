import React from 'react'
import '../styles/home.css'
import Template from '../components/Template'
import Skillbox from 'components/Container-Skill'
import {
  FiArrowDownCircle,
  FiMail,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGnubash,
  SiJava,
  SiPython,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb
} from 'react-icons/si'

export default function Home () {
  return (
    <>
      <Template>
        <main>
          <section className="landing">
            <img src="/images/Logo-light.svg" className="logo" alt="logo" />
            <h1>Rubén Sánchez Rugerio</h1>
            <h2 style={{ marginTop: '-0.5rem' }}>Desarrollador de Software</h2>
            <div className="social-items">
              <a
                className="box-social"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
              <a
                className="box-social"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="box-social"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
            <a className="arrow-down" href="#about-me">
              <FiArrowDownCircle />
            </a>
          </section>
        </main>
        <section id="about-me" className="about-me">
          <h3>Acerca de mí</h3>
          <div className="about-me-info">
            <img src="/images/rubns.svg" className="rubns" alt="logo" />
            <div className="info">
              <div className="biblograph">
                <h3>Soy</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque corrupti officia qui enim nisi dolor magnam quod
                  dicta eligendi, ea repellendus ipsa excepturi vel delectus
                  odio iste nobis quaerat voluptas.
                </p>
              </div>
              <div className="education">
                <h3>Educación</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque corrupti officia qui enim nisi dolor magnam quod
                  dicta eligendi, ea repellendus ipsa excepturi vel delectus
                  odio iste nobis quaerat voluptas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="Skills">
          <h3>Conocimientos</h3>
          <div className="grid-skills">
          <Skillbox name="HTML5" >
            <SiHtml5/>
          </Skillbox>
          <Skillbox name="CSS3" >
              <SiCss3 />
          </Skillbox>
            <Skillbox name="JavaScript">
              <SiJavascript />
            </Skillbox>
            <Skillbox name="Git">
              <SiGit />
            </Skillbox>
            <Skillbox name="Gnu/Bash">
              <SiGnubash />
            </Skillbox>
            <Skillbox name="Java">
              <SiJava />
            </Skillbox>
            <Skillbox name="Python">
              <SiPython />
            </Skillbox>
            <Skillbox name="MS SQL Server">
              <SiMicrosoftsqlserver/>
            </Skillbox>
            <Skillbox name="MySQL">
              <SiMysql />
            </Skillbox>
            <Skillbox name="MongoDB">
              <SiMongodb />
            </Skillbox>
          </div>
        </section>
      </Template>
    </>
  )
}

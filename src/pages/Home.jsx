import React from "react";
import logo from "../assets/images/Logo-light.svg";
import rubns from "../assets/images/rubns.svg";
import "../styles/home.css";
import Template from "../components/Template";
import {
  FiArrowDownCircle,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
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
  SiMongodb,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Template>
        <main>
          <section className="landing">
            <img src={logo} className="logo" alt="logo" />
            <h1>Rubén Sánchez Rugerio</h1>
            <h2 style={{ marginTop: "-0.5rem" }}>Desarrollador de Software</h2>
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
            <img src={rubns} className="rubns" alt="logo" />
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
            <div className="group-skills">
              <SiHtml5 />
              <p className="n">HTML 5</p>
            </div>
            <div className="group-skills">
              <SiCss3 />
              <p className="n">CSS3</p>
            </div>
            <div className="group-skills">
              <SiJavascript />
              <p className="n">Javascript</p>
            </div>
            <div className="group-skills">
              <SiGit />
              <p className="n">Git</p>
            </div>
            <div className="group-skills">
              <SiGnubash />
              <p className="n">Gnubash</p>
            </div>
            <div className="group-skills">
              <SiJava />
              <p className="n">Java</p>
            </div>
            <div className="group-skills">
              <SiPython />
              <p className="n">Python</p>
            </div>
            <div className="group-skills">
              <SiMicrosoftsqlserver />
              <p className="n">Microsoft sql server</p>
            </div>
            <div className="group-skills">
              <SiMysql />
              <p className="n">Mysql</p>
            </div>
            <div className="group-skills">
              <SiMongodb />
              <p className="n">Mongodb</p>
            </div>
          </div>
        </section>
      </Template>
    </>
  );
}

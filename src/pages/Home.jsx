import React from 'react'
import Template from '../components/Template'
import Skillbox from 'components/Container-Skill'
import ContainerLading from 'components/Container-Lading'
import ContainerPage from 'components/Container-Page'
import LoaderSkills from 'components/LoaderSkill'
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
  SiMongodb,
  SiPhp
} from 'react-icons/si'

export default function Home () {
  return (
      <Template>
        <ContainerPage
         about="Acerca de mí"
         im="Soy"

         biograph ="Hola, soy una persona tranquila, responsable, honesta y no me gusta la impuntualidad, me gusta leer, escuchar música y amo los tacos 😁🌮. Yo escribiría que soy un tipazo pero ya lo escribí""

         education=" Educación"

         infoEdu={{ studies: [['Lic. Ciencias de la computación', 'Benemeriata Universidad Autonoma de Puebla', '2015-Actual '], ['Certificate', ' Scrum Foundation Professional', 'Oct 2020']] }}
         skills="Conocimientos"

         >
          <ContainerLading
          name="Rubén Sánchez Rugerio"
          occupation ="Desarrollador de Software"
          git= "https://github.com/Avb-rubns"
          link="https://www.linkedin.com/in/rub%C3%A9n-s%C3%A1nchez-rugerio-025588205/"
          mail="mailto:rubns.s24@gmail.com"
           >
             <FiMail />
             <FiGithub />
             <FiLinkedin />
             <FiArrowDownCircle />
          </ContainerLading>
          <LoaderSkills>
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
              <Skillbox name="PHP">
                <SiPhp />
              </Skillbox>
          </LoaderSkills>
        </ContainerPage>
      </Template>
  )
}

import React from 'react'
import Template from '../components/Template'
import Skillbox from 'components/Container-Skill'
import ContainerLading from 'components/Container-Lading'
import ContainerPage from 'components/Container-Home'
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
  SiMongodb
} from 'react-icons/si'

export default function Home () {
  return (
    <>
      <Template>
        <ContainerPage
         about="Acerca de mí"
         im="Soy"

         biograph ="  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Doloremque corrupti officia qui enim nisi dolor magnam quod
         dicta eligendi, ea repellendus ipsa excepturi vel delectus
         odio iste nobis quaerat voluptas."
         education=" Educación"

         infoEdu="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Doloremque corrupti officia qui enim nisi dolor magnam quod
         dicta eligendi, ea repellendus ipsa excepturi vel delectus
         odio iste nobis quaerat voluptas."
         skills="Conocimientos"
         >
          <ContainerLading
          name="Rubén Sánchez Rugerio"
          occupation ="Desarrollador de Software"
          id = "lading"
          link= "https://github.com/Avb-rubns"
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
          </LoaderSkills>
        </ContainerPage>
      </Template>
    </>
  )
}

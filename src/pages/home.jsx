import Template from 'components/template'
import Landing from 'components/home/landing'
import Biograph from 'components/home/bio'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import ListSkills from 'components/list/Skills'
import SkillsInfo from 'data/skills_Info'

export default function Home() {
  return (
    <Template>
      <Landing
        name="Rubén Sánchez Rugerio"
        occupation="Desarrollador de Software"
        git="https://github.com/Avb-rubns"
        icon_Git={<FiGithub />}
        link="https://www.linkedin.com/in/rub%C3%A9n-s%C3%A1nchez-rugerio-025588205/"
        icon_Linkedin={<FiLinkedin />}
        mail="mailto:rubns.s24@gmail.com"
        icon_Mail={<FiMail />}
      />

      <Biograph
        about="Acerca de mí"
        im="Soy"
        biograph="Hola, soy una persona tranquila, responsable, honesta y no me gusta la impuntualidad, me gusta leer, escuchar música y amo los tacos 😁🌮. Yo escribiría que soy un tipazo, pero ya lo escribí "
        education=" Educación"
        infoEdu={{
          studies: [
            [
              'Lic. Ciencias de la computación',
              'Benemeriata Universidad Autonoma de Puebla',
              '2015 - 2020 '
            ],
            ['Certificate', ' Scrum Foundation Professional', 'Oct 2020']
          ]
        }}
      />
      <ListSkills title="Conocimientos" id="skills" data={SkillsInfo} />
    </Template>
  )
}

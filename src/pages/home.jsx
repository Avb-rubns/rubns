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
        im="Hola, Soy"
        biograph="Como licenciado en ciencias de la computación, soy una persona altamente curiosa y veo a los programas como rompecabezas que deben resolverse mediante el uso del conocimiento y las habilidades adquiridas. Creo que una de las principales satisfacciones de mi campo de estudio es la oportunidad de aplicar mis conocimientos y habilidades para resolver problemas y crear soluciones efectivas. Estoy entusiasmado con la idea de seguir explorando y aprendiendo en mi campo y estoy convencido de que seguiré encontrando retos y oportunidades para poner a prueba mis habilidades y conocimiento"
        education=" Educación"
        infoEdu={{
          studies: [
            [
              'Lic. Ciencias de la computación',
              'Benemeriata Universidad Autonoma de Puebla',
              '2015 - 2020 '
            ],
            ['Certificate', ' Scrum Foundation Professional', 'Oct 2020'],
            [
              'Designing and Implementing Microsoft',
              'DevOps Solutions AZ 400T00',
              'Mar 2022'
            ]
          ]
        }}
      />
      <ListSkills title="Conocimientos" id="skills" data={SkillsInfo} />
    </Template>
  )
}

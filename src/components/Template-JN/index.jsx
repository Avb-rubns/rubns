import { Finds, Header } from './container.styles'
import Input from 'components/input'
import Btn from 'components/button'
import { RenderCard } from 'components/RenderCard'

export default function TemplateJN (props) {
  const res = {
    data: [
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI'],
        code: 'https://github.com/davidp46/todo-app-client/blob/main/src/components/button/button.styles.js'
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación'],
        code: 'https://github.com/davidp46/todo-app-client/blob/main/src/components/button/button.styles.js'
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI'],
        code: 'https://github.com/davidp46/todo-app-client/blob/main/src/components/button/button.styles.js',
        link: 'rubns.me'
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'Programación'],
        code: 'https://github.com/davidp46/todo-app-client/blob/main/src/components/button/button.styles.js',
        link: 'rubns.me'
      }
    ]
  }
  return (
        <>
        <Header>
            <h1>{props.title}</h1>
            <div>
                <Input type={props.type} placeholder={props.placeholder} />
                <Btn type="primary" size="16" text={props.textBtn}> {props.children} </Btn>
            </div>
        </Header>
        {res && <Finds>
          <h3>{props.search}</h3>
          <div>
            <RenderCard result={res}/>
          </div>
        </Finds>}
        </>
  )
}

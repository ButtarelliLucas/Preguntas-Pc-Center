import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizComponent from './components/QuizComponent'

function App() {
  const [count, setCount] = useState(0)
  const [vendedor, setVendedor] = useState("")
  const [cuenta, setCuenta] = useState("")

  return (
    <>
      <div>
        <a className= "logo" href="" target="_blank">
          <img src="https://pccenterweb.com.ar/web/image/website/1/logo/PC%20Center%20Computers%20%7C%20Todo%20en%20Tecnolog%C3%ADa?unique=f2bc1a9" className="" alt="Vite logo" />
        </a>

      </div>
      <h2>Preguntas + Respuestas</h2>

      <QuizComponent></QuizComponent>
      
    </>
  )
}

export default App

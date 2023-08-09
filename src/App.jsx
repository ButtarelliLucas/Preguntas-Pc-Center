
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import QuizComponent from './components/QuizComponent/QuizComponent'
import QuizMensajeria from './components/QuizMensajeria/QuizMensajeria'


export default function App() {

  return (
    <>
    <div className='app-container'>
    <Navbar />
      
      <div className='content-container'>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/ml-preguntas"element={<QuizComponent/>}/>
        <Route path="/ml-mensajeria"element={<QuizMensajeria/>}/>
        

        <Route path="/404" element={<Error/>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      </div>
    </div>
    </>
  )
}


import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

export default function App() {

  return (
    <>
    <div className='bg-[#222831] h-screen flex flex-col text-white overflow-y-auto overflow-x-hidden min-w-[320]'>
      <Header/>
      <div className='md:px-10'>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

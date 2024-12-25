
import './App.css'
import Home from './pages/Home/Home'
// import Services from './Pages/Services'
import Header from '../src/components/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import SignUp from './Pages/Signup/Signup'
import Team from '../src/pages/Team.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
            <Home/>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="#services" element={<Services/>}/> */}
            {/* <Route path="/SignUp" element={<SignUp />} /> */}
            {/* <Route path="/about-us" element={<Team />} /> */}


       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

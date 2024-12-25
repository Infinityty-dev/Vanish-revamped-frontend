
import './App.css'
import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
            {/* <Home/> */}
            <Route path="/" element={<Home/>} />
            
            {/* <Route path="/SignUp" element={<SignUp />} /> */}
            <Route path="/about-us" element={<Team />} />


       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

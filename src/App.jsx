
import './App.css'
// import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'
import Home from './pages/Home/Home.jsx'
import OrderAssessment from './pages/OrderAssessment.jsx'
import OwnVan from './pages/ownVan.jsx'
import NeedVan from './pages/NeedVan.jsx'
import OptionPage from './pages/OptionPage.jsx'



function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<Team />} />
            <Route path="/orderAssessment" element={<OrderAssessment/>} />
            <Route path="optionpage" element={<OptionPage/>} />
            <Route path="ownvan" element={<OwnVan/>} />
            <Route path="needvan" element={<NeedVan/>} />
            
       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

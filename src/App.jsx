
import './App.css'
// import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'
import Home from './pages/Home/Home.jsx'
import OrderAssessment from './pages/OrderAssessment.jsx'
import Options from './pages/OptionPage.jsx'
import EstimateCard from './Component/EstimateCard.jsx'
import OwnVan from './pages/ownVan.jsx'
import NeedVan from './pages/NeedVan.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<Team />} />
            <Route path="/orderAssessment" element={<OrderAssessment/>} />
            <Route path="options" element ={<Options />}/>
            <Route path="OwnVan" element ={<OwnVan/>}/>
            <Route path="NeedVan" element ={<NeedVan/>}/>
            <Route path="estimatecard" element={<EstimateCard/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

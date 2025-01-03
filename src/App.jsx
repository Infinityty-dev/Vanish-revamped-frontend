
import './App.css'
// import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'
import Home from './pages/Home/Home.jsx'
<<<<<<< HEAD
import OrderAssessment from './pages/OrderAssessment.jsx'
import Options from './pages/OptionPage.jsx'
import EstimateCard from './Component/EstimateCard.jsx'
import OwnVan from './pages/ownVan.jsx'
import NeedVan from './pages/NeedVan.jsx'
=======
import OrderAssessment from './pages/orderAssessment.jsx'
import SignUp from './Component/SignUp.jsx'
import SignIn from './Component/SignIn.jsx'
import DriversSignUp from './Component/DriversSignUp.jsx'
import DriversSignIn from './Component/DriversSignIn.jsx'
>>>>>>> cb6b68d15aaf64db93a83c966729d5a6339cf7cd

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<Team />} />
<<<<<<< HEAD
            <Route path="/orderAssessment" element={<OrderAssessment/>} />
            <Route path="options" element ={<Options />}/>
            <Route path="OwnVan" element ={<OwnVan/>}/>
            <Route path="NeedVan" element ={<NeedVan/>}/>
            <Route path="estimatecard" element={<EstimateCard/>}/>
=======
            <Route path="/order-assessment" element={<OrderAssessment/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/DriversSignUp" element={<DriversSignUp/>} />
            <Route path="/DriversSignIn" element={<DriversSignIn/>} />


>>>>>>> cb6b68d15aaf64db93a83c966729d5a6339cf7cd
       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

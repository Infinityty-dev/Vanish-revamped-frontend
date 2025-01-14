
import './App.css'
// import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'
import Home from './pages/Home/Home.jsx'
import OwnVan from './pages/ownVan.jsx'
import NeedVan from './pages/NeedVan.jsx'
import OptionPage from './pages/OptionPage.jsx'
import SignUp from './Component/SignUp.jsx'
import SignIn from './Component/SignIn.jsx'
import DriversSignUp from './Component/DriversSignUp.jsx'
import DriversSignIn from './Component/DriversSignIn.jsx'
import Terms from './Component/Terms.jsx'
import DriverTerms from './Component/DriverTerms.jsx'
import Movement from "./Component/Movement.jsx";
import Location from "./Component/Location.jsx"
import DriversDashboard from './Component/DriversDashboard.jsx'
import OrderAssessment from './pages/orderAssessment.jsx'
import PaymentPage from './pages/Payment/Payment.jsx'
import EstimateCard from './Component/EstimateCard.jsx'
import EstimateQoute from './Component/EstimateQoute.jsx'


function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<Team />} />
            <Route path="/Optionpage" element={<OptionPage/>} />
            <Route path="/Ownvan" element={<OwnVan/>} />
            <Route path="/Needvan" element={<NeedVan/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path='/Terms' element={<Terms/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/DriversSignUp" element={<DriversSignUp/>} />
            <Route path="/DriverTerms" element={<DriverTerms/>} />
            <Route path="/DriversSignIn" element={<DriversSignIn/>} />
            <Route path="/Movement" element={<Movement/>} />
            <Route path="/Location" element={<Location/>} />
            <Route path="/OrderAssessment" element ={<OrderAssessment/>}/>
            <Route path="/DriversDashboard" element={<DriversDashboard/>} />

            <Route path="/Payment" element={<PaymentPage/>} />
            <Route path="/EstimateCard" element={<EstimateCard/>} />
            <Route path="/EstimateQuote" element={<EstimateQoute/>} />
            <Route path ="/Driver" element={<Driver/>}/>


            <Route path="/EstimateCard" element={<EstimateCard/>} />
            <Route path="/EstimateQuote" element={<EstimateQoute/>} />

       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App

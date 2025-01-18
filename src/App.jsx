import './App.css';
// Importing components
import Header from './Component/Header.jsx';
import Footer from './pages/Footer.jsx';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Team from './pages/Team.jsx';
import Home from './pages/Home/Home.jsx';
import OwnVan from './pages/ownVan.jsx';
import NeedVan from './pages/NeedVan.jsx';
import OptionPage from './pages/OptionPage.jsx';
import SignUp from './Component/SignUp.jsx';
import SignIn from './Component/SignIn.jsx';
import DriversSignUp from './Component/DriversSignUp.jsx';
import DriversSignIn from './Component/DriversSignIn.jsx';
import Terms from './Component/Terms.jsx';
import DriverTerms from './Component/DriverTerms.jsx';
import Movement from "./Component/Movement.jsx";
import Location from "./Component/Location.jsx";
import DriversDashboard from './Component/DriversDashboard.jsx';
import OrderAssessment from './pages/orderAssessment.jsx';
import PaymentPage from './pages/Payment/Payment.jsx';
import EstimateCard from './Component/EstimateCard.jsx';
import EstimateQoute from './Component/EstimateQoute.jsx';
import Driver from "./Component/Driver.jsx";
import Blog from './pages/Home/Blog.jsx';
import ProfileSettings from './Component/Profile.jsx';
import DriversProfile from './Component/DriversProfile.jsx';
import MailBox from './Component/MailBox.jsx';
import Order from './Component/Order.jsx';
import Chat from './Component/Chat.jsx';

// Component to handle conditional rendering of Header and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/DriversDashboard', './DriversProfile', './MailBox', './Order', './Chat' ];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about-us" element={<Layout><Team /></Layout>} />
      <Route path="/Optionpage" element={<Layout><OptionPage /></Layout>} />
      <Route path="/Ownvan" element={<Layout><OwnVan /></Layout>} />
      <Route path="/Needvan" element={<Layout><NeedVan /></Layout>} />
      <Route path="/SignUp" element={<Layout><SignUp /></Layout>} />
      <Route path="/Terms" element={<Layout><Terms /></Layout>} />
      <Route path="/SignIn" element={<Layout><SignIn /></Layout>} />
      <Route path="/DriversSignUp" element={<Layout><DriversSignUp /></Layout>} />
      <Route path="/DriverTerms" element={<Layout><DriverTerms /></Layout>} />
      <Route path="/DriversSignIn" element={<Layout><DriversSignIn /></Layout>} />
      <Route path="/Movement" element={<Layout><Movement /></Layout>} />
      <Route path="/Location" element={<Layout><Location /></Layout>} />
      <Route path="/OrderAssessment" element={<Layout><OrderAssessment /></Layout>} />
      <Route path="/DriversDashboard" element={<DriversDashboard />} />
      <Route path="/DriversProfile" element={<DriversProfile />} />
      <Route path="/MailBox" element={<MailBox />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Blog" element={<Layout><Blog /></Layout>} />
      <Route path="/Payment" element={<Layout><PaymentPage /></Layout>} />
      <Route path="/EstimateCard" element={<Layout><EstimateCard /></Layout>} />
      <Route path="/EstimateQuote" element={<Layout><EstimateQoute /></Layout>} />
      <Route path="/Driver" element={<Layout><Driver /></Layout>} />
      <Route path="/Profile" element={<Layout><ProfileSettings /></Layout>} />
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

import './App.css';
import Nav from "./Navbar/nav"
import Footer from "./Footer/Footer"
import Reservation from './Reservation/Reservation'
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import Gallery from "./Gallery/gallery"
import Catering from './Career/career'
import About from "./About/about"
import Contact from './Contact/contact'
import Franchise from './Franch/franch'
import FoodGallery from './Gallery/food'
import AmbienceGallery from './Gallery/ambience'
import VideoGallery from './Gallery/videosgallery'
import Login from './Login/Login';
import Siginin from './Createaccount/Signin';
import Applynow from './ApplyNowForm/apply';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
     <Routes>
    <Route path="/" element={ <Home/> }/>
    <Route path="/reservation" element={ <Reservation/>}/>
    <Route path="/menu" element={ <Menu/>}/>
    <Route path="/signup" element={ <Login/>}/>
    <Route path="/signin" element={ <Siginin/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/gallery' element = {<Gallery />}/>
    <Route path='/career' element = {<Catering />}/>
    <Route path='/franchise' element = {<Franchise/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/foodgallery' element={<FoodGallery/>}/>
    <Route path='/ambiencegallery' element={<AmbienceGallery/>}/>
    <Route path='/videogallery' element={<VideoGallery/>}/>
    <Route path='/applyform' element={<Applynow/>}/>
      </Routes>
      <a
        href="https://wa.me/919958055600"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i class="fa fa-whatsapp whatsnapp-icon"></i> */}
        <i class="fa-brands fa-square-whatsapp whatsapp-icon " style={{color:"#0e9010"}}></i>
      </a>
      <Footer/>
  </BrowserRouter>
     </> 
    
  );
}

export default App;

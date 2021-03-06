import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";


import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import About from './pages/About/About'
import BookLanding from "./pages/Booking/Landing";
import BookAddress from "./pages/Booking/Address";
import BookCalendar from "./pages/Booking/Calendar";
import Covid19 from './pages/Covid19/Covid19';
import Contact from './pages/Contact/Contact';
import Confirmation from './pages/Contact/Confirmation'
import Footer from './components/Footer/Footer';
import LeftNav from './components/NavBar/LeftDrawer'

function App() {
  const [input, setInput] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "TX",
    zip: "",
    plan: "",
  });
  const [coordinates, setCoordinates] = useState({
    start: {
      lat: 29.758510,
      lng: -95.497150,
    },
    end: {
      lat: 29.758510,
      lng: -95.497150,
    },
  });
  const [distance, setDistance] = useState(0);
  const [navColor, setNavColor] = useState('#000812')

  useEffect(()=>{
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className="App">
      <LeftNav color={navColor}/>
        <Switch>
          <Route path="/covid19">
            <Covid19 setNavColor={setNavColor}/>
          </Route>
          <Route path="/contact/confirm">
            <Confirmation setNavColor={setNavColor}/>
          </Route>         
          <Route path="/contact">
            <Contact setNavColor={setNavColor}/>
          </Route>         
          <Route path="/services">
            <Services input={input} setInput={setInput} setNavColor={setNavColor}/>
          </Route>
          <Route path="/about">
            <About setNavColor={setNavColor}/>
          </Route>          
          <Route path="/booking/address">
            <BookAddress 
            coordinates={coordinates} setCoordinates={setCoordinates} 
            distance={distance}
            setDistance={setDistance} 
            input={input} 
            setInput={setInput}
            setNavColor={setNavColor}
            />
          </Route>
          <Route path="/booking/calendar">
            <BookCalendar input={input} setNavColor={setNavColor}/>
          </Route>
          <Route path="/booking">
            <BookLanding input={input} setInput={setInput} setNavColor={setNavColor}/>
          </Route>
          <Route path="/">
            <Landing setNavColor={setNavColor}/>
          </Route>
        </Switch> 
      <Footer />
    </div>
  );
}

export default App;

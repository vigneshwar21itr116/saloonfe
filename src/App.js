import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import About from './components/About';
import Services from './components/Services';
import Single from './components/Single';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './Login';
import Booking from './components/Booking';
import Signup from './components/SignUp';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/services' component={Services}/>
            <Route path='/single' component={Single}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/login' component={Login}/>
            <Route path='/booking' component={Booking}/>
            <Route path='/signup' component={Signup}/>
            
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;

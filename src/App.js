import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 
import index from './index';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer  from './Footer';
//import Babita from './Babita';
//import Ba from "./Ba";




const App = () => {
  return(
   
<>
<index />

<Navbar/>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/services" component={Services} />
  <Route exact path="/contact" component={Contact} />
  <Redirect to="/" />

</Switch>
<Footer/>

</>

/*
<>

<Babita />
<Switch>
  <Route exact path="Ba" component={Ba} />
  
</Switch>


</>

<index />
*/
  );
};

export default App;

import React from 'react';
import web2 from "../src/imgaes/d.jpg";
//import { NavLink } from 'react-router-dom';
import Commom from './Common';

const About = () => {
  return(
<>
<Commom  
name='Welcome to About page'
 imgsrc={web2}
 visit="/contact" 
 btname="Contact Now"  />
</>
  );
};

export default About;
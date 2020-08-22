import React from 'react';
import web1 from "../src/imgaes/web.jpg";
//import { NavLink } from 'react-router-dom';
import Commom from './Common';


const Home = () => {
  return(

<>
<Commom  
name='Grow your business with'
 imgsrc={web1}
 visit="/services" 
 btname="Now services" />
</>
  );
};

export default Home;
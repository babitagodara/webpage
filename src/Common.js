import React from 'react';
//import web from "../src/imgaes/web.jpg";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return(
<>
 <section id="header" className="d-flex align-items-center">
   <div className="container-fluid pt-5">
     <div className="row">
       <div className="col-10 mx-auto">
         <div className="row">
         <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
           <h1> {props.name} <strong className="brand-name">ThapaTechnical</strong></h1>
           <h6 className="my-3">
             We are the team of talented developer making websites
           </h6>
           <div className="mt-3">
             <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
           </div>

         </div>
       <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column header-img">
         <img src={props.imgsrc} className="img-fluid animated" alt="imgres" />
       
       
       </div>
       </div>
       </div>

     </div>
   </div>

 </section>
</>
  );
};

export default Common;
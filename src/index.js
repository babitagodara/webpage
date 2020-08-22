import React from 'react';
import ReactDOM from 'react-dom';
//import  Red from './Red';
//import Babita from './Babita';
//import Buttontwo from './Buttontwo';

//import Button from './Button';
//import Buttontwo from './Buttontwo';
//import Hello from './Hello';
import './index.css';
//import Game1 from './Game1';
//import Game from './Game';
//import Tiik from './Tiik';
// import Tikto from './Tikto';
// import Player from './Player';
//import Ff from './Ff';
 //import Myform from './Myform';
//import Formik from './Formik';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
////import Scoreboard from './Scoreboard';
////import Board from './Board';
//import './styles/board.css';
//import './styles/box.css';
//import './styles/buttons.css';

/*


class App extends React.Component{
  render(){
    return(
      <div className="app">
         <BrowserRouter>
<Route exact path="/" Component={Scoreboard} />
<Route  path="/board" Component={Board} />
</BrowserRouter>
</div>
    )
  }
}


*/

ReactDOM.render(
  <>
  <BrowserRouter>
<App />

</BrowserRouter>
</>
,document.getElementById('root')
);







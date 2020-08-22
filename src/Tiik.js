import React from 'react';

const squaress =({
    background: "white",
    marginRight: "-1px",
    marginTop: "1px",
    padding:"0",
    width:" 80px",
    height: "80px",
    textAlign: "center",
   
    fontWeight: "bold",
    lineHeight: "80px",
   
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "darkolivegreen",
    color: "#fff",
    margin:"10px",
    borderRadius: "5px",
    textShadow: "0px -1px 0px rgba(0,0,0,.5)",
    float:"left",
  })

  const game =({
    display: "flex",
    marginLeft: "40%",
marginTop: "10%",
flexDirection: "row"


  })


 


function Square(props) {
            
           return(
               <button style={squaress} onClick={props.onClick} >
                   {props.value}
               </button>
           );
       
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
             
            squares:Array(9).fill(),
            isButtonDisabled: false ,
           xIsNext:null,
        };
    }
            
            handleChange(i){
                 const squares= this.state.squares.slice();

                 squares[i] =this.state.xIsNext ?'x babita' :'o Manisha'
                 this.setState({
                    isButtonDisabled: true,
                     squares:squares,
                     xIsNext:!this.state.xIsNext,
                    });
                    return this.props.onClick();
                    
            }
                       
               rendersquare(i){
                   return  <Square 
                   value={this.state.squares[i]}
                   onClick= {()=> this.handleChange(i)} 
                   />;
               }
               render(){

                 const Winner = calculaterWinner(this.state.squares);
                
                 
                   let status="Next Player :" + (this.state.xIsNext ?'babita x' :' Manisha o')
                   
                   ​

                  
                   return(
                       <>
                     
                        <div className="status">{status}</div>
                        <div className="border-row">
                            {this.rendersquare(0)}
                            {this.rendersquare(1)}
                            {this.rendersquare(2)}
                        </div>
                        <div className="border-row">
                            {this.rendersquare(3)}
                            {this.rendersquare(4)}
                            {this.rendersquare(5)}
                        </div>
                        <div className="border-row">
                            {this.rendersquare(6)}
                            {this.rendersquare(7)}
                            {this.rendersquare(8)}
                        </div>
                       </>
                   )

               }
         }

 

class Tiik extends React.Component{
           render(){
               return(

                   <>
                       <label>helllo</label>
                       <input type="text"  name="" />


                   <div style={game}>
                       <div className="game_border"><Board/></div>
                       <div className="game_info">
                       
                     
                       </div>
                   </div> 
                   </>
               )

               
           }

}

    function calculaterWinner(squares){
                    const lines = [
                          [0 , 1 , 2],
                          [3 , 4 , 5],
                          [6 , 7 , 8],
                          [0 , 3 , 6],
                          [1 , 4 , 7],
                          [2 , 5 , 8],
                          [0 , 4 , 8],
                          [2 , 4 , 6],
                    ];
                    for(let i = 0 ; i < lines.length; i++){
                        const[a,b,c] =lines[i];
                        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
                        return squares[a];
                        }
                        
                    }
                    return null;
                }ss


export default Tiik
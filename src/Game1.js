import React from 'react';
import Board from './Board';

class Game1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            xIsNext:true,
            stepNumber: 0,
            histry:[
                {squares:Array(9).fill(null)}
            ]
        }
    
    }

    renderSquare(i){





    }
    render(){
        const histry = this.state.histry;
        const current = histry[this.state.stepNumber];
        const  status ="Next Player: "+(this.state.xIsNext ? 'X' :'o')

            
        return(
            <div className="game">
                <div className="game-board"><h1>hello</h1>
                    <Board onClick={(i)=>this.renderSquare(i)}

                    squares={current.squares} />
                    
                </div>
            </div>
        )
        }
        
      
}

export default Game1;
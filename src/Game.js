import React from 'react';
import Board from './Board';

class Game extends React.Component{

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
jumpTo(step){
    this.setState({
        stepNumber: step,
        xIsNext: (step%2)===0
    })
}


hendleClick(i){
const histry = this.state.histry.slice(0,this.state.stepNumber+1);
const current = histry[histry.length-1];
const squares = current.squares.slice();
const winner = calculateWinner(squares);
if(winner || squares[i]){
    return;
}
squares[i] = this.state.xIsNext?'X':'O';
this.setState({
    histry: histry.concat({
        squares:squares
    }),
    xIsNext: !this.state.xIsNext,
    stepNumber:histry.length
});
}



    render(){
        const histry = this.state.histry;
        const current = histry[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const move   = histry.map((step,move)=>{
         const desc = move? 'Go to #'+ move:'Start the Game';
         return (
             <li key={move}>

         <button onClick={()=>{this.jumpTo(move)}}>{desc}</button>
             </li>
         )   

        });

        let status;
        if(winner){
            status = 'Winner is '+winner;

        }
        else{
            status = 'Next Player is '+(this.state.xIsNext?'x':'O');
        }


        return(
            <div className='game'>
                <div className='game-board'>
                    <Board onClick={(i)=>this.hendleClick(i)}
                    squares={current.squares}
                    />
                </div>
                <div className='game-info'>
        <div className='status'>{status}</div>
        <ul>{move}</ul>

                </div>

            </div>
        )
    };
};

function Box (props){
    return(
        <button className='Square' onClick={props.onClick}>
            {props.value}
        </button>
    );
};

class Board extends React.Component{
    renderSquare(i){
        
       return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}/>
    
    }
    render(){
        return(
            <>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="border-row">     
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
               
                   <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </>
        )
    };
};


function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){

            return squares[a];
        }
        
    }
    return null;
   
}

export default Game;
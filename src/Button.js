import React  from 'react';
 
let btstyle={
  height:"100px",
  width:"100px",
  margin: "20px",
  fontSize:"20px",
  
}

          
class Button extends React.Component{
constructor(props){
    super(props)
    this.state={p00:'-',
    p01:'-',
    p02:'-',
    p10:'-',
    p11:'-',
    p12:'-',
    p20:'-',
    p21:'-',
    p22:'-',
    currentPlayer:'1',
    sign:{1:'x',2:'o'},
    player: { 1: "player 1", 2: "player 2" },
    win: false,
    winner: " ",  
  } 
}
 
changeColor=(e)=>{
   let nam=e.target.name;  
   let val =this.state[nam];
   let cPlayer=this.state.currentPlayer;
 
if(cPlayer==='1'){
  cPlayer='2'
}
else{
  cPlayer='1'
}
val=this.state.sign[this.state.currentPlayer];
  this.setState({[nam]: val,currentPlayer:cPlayer});
 
}
 
    render(){
 
    let cwin = this.state.win;
    let cwinner = this.state.winner;
    let color= "red";
    let bgcolor="green"
    let p00= color;
    let p01= color;
    let p02= color;
    let p10= color;
    let p11=color;
    let p12= color;
    let p20= color;
    let p21= color;
    let p22= color;
    
   
  
      if(
        this.state.p00===this.state.p01&&
        this.state.p00===this.state.p02&&
        this.state.p00!=='-'
      ){
        if(this.state.p00==='x'){
          cwin = true;
          cwinner = "Player 1"; 
         
        }
        else{
          cwin = true;
          cwinner = "Player 2"; 
          
         
                }
                p00=bgcolor
                p01=bgcolor
                p02= bgcolor
      }
      
      
      else if(
        this.state.p00===this.state.p10&&
        this.state.p10===this.state.p20&&
        this.state.p00!=='-'
      ){
        if(this.state.p00==='x'){
          cwin = true;
          cwinner = "Player 1";
         
         
                }
        else{
          cwin = true;
          cwinner = "Player 2"; 
          
                }
                p00=bgcolor
                p10=bgcolor
                p20=bgcolor
      }
      
      else if(
        this.state.p00===this.state.p11&&
        this.state.p11===this.state.p22&&
        this.state.p00!=='-'
      ){
        if(this.state.p00==='x'){
          cwin = true;
          cwinner = "Player 1";
        
          
                }
        else{
          cwin = true;
          cwinner = "Player 2"; 
          
         
                }
               p00=bgcolor
               p11=bgcolor
               p22=bgcolor
      }
      
      else if(this.state.p01===this.state.p11&&
        this.state.p11===this.state.p21&&
        this.state.p01!=='-'
        )
      {
        if(this.state.p01==='x'){
          cwin = true;
          cwinner = "Player 1";
         
          
              
        }  
        else{
          cwin = true;
          cwinner = "Player 2"; 
          
                }
                p01=bgcolor
                p11=bgcolor
                p21=bgcolor
      }
      
      
      else if(this.state.p02===this.state.p12&&
        this.state.p12===this.state.p22&&
        this.state.p02!=='-'
      ){
        if(this.state.p02==='x'){
          cwin = true;
          cwinner = "Player 1";
         
          
                }
        else{
          cwin = true;
          cwinner = "Player 2"; 
          
                }
                p02=bgcolor
                p12=bgcolor
                p22=bgcolor
      }
      
      else if(this.state.p10===this.state.p11&&
        this.state.p11===this.state.p12&&
        this.state.p12!=='-'
        ){
          if(this.state.p10==='x'){
            cwin = true;
          cwinner = "Player 1";
        
         
                  }
          else{
            cwin = true;
            cwinner = "Player 2"; 
            
            

                    }
               p10=bgcolor
               p11=bgcolor
               p12=bgcolor
        }
      
        else if(this.state.p20===this.state.p21&&
          this.state.p21===this.state.p22&&
          this.state.p20!=='-'
          ){
            if(this.state.p20==='x'){
              cwin = true;
              cwinner = "Player 1";
             
              
            }
            else{
              cwin = true;
              cwinner = "Player 2"; 
              
              
                        }
                        p20=bgcolor
                        p21=bgcolor
                        p22=bgcolor
          }
      
          else if(this.state.p02===this.state.p11&&
            this.state.p11===this.state.p20 &&
            this.state.p02!=='-'
            ){
              if(this.state.p02==='x'){
                cwin = true;
                cwinner = "Player 1";
               
               
                            }
              else{
                cwin = true;
          cwinner = "Player 2"; 
                  
              }
              p02=bgcolor
              p11=bgcolor
              p20=bgcolor
            }
      
 
        return(
<div style={{textAlign:'center'}}>   
 
<div style={{fontWeight: 'bold',fontSize: '20px',}} >
  
{cwin && <div>Congratulations {cwinner}. You WIN.</div>}</div>
 
  <div>
<button disabled={this.state.p00 !== "-" || cwin === true} type="button" name="p00"style={{backgroundColor:p00,...btstyle}}
 onClick={this.changeColor}>{this.state.p00}
</button>
 
<button disabled={this.state.p01 !== "-" || cwin === true}  type="button" name="p01" style={{backgroundColor:p01,...btstyle}}
    onClick={this.changeColor}>{this.state.p01}
    </button>
                
<button disabled={this.state.p02 !== "-" || cwin === true}  type="button" name="p02" style={{backgroundColor:p02,...btstyle}}
     onClick={this.changeColor}>{this.state.p02}
         </button>
         </div>
 
         <div>    
<button disabled={this.state.p10 !== "-" || cwin === true}   type="button" name="p10" style={{backgroundColor:p10,...btstyle}}
    onClick={this.changeColor}>{this.state.p10}
                </button>
 
<button disabled={this.state.p11 !== "-" || cwin === true}   type="button" name="p11" style={{backgroundColor:p11,...btstyle}}
    onClick={this.changeColor}>{this.state.p11}
        </button>
                
<button disabled={this.state.p12 !== "-" || cwin === true}  type="button" name="p12" style={{backgroundColor:p12,...btstyle}}
        onClick={this.changeColor}>{this.state.p12}
        </button>
        </div>
 
        <div>    
<button disabled={this.state.p20 !== "-" || cwin === true}   type="button" name="p20" style={{backgroundColor:p20,...btstyle}}
    onClick={this.changeColor}>{this.state.p20}
     </button>
 
<button disabled={this.state.p21 !== "-" || cwin === true}  type="button" name="p21" style={{backgroundColor:p21,...btstyle}}
    onClick={this.changeColor}>{this.state.p21}
    </button>
                
  <button disabled={this.state.p22 !=="-" || cwin === true}  type="button" name="p22" style={{backgroundColor:p22,...btstyle}}
    onClick={this.changeColor}>{this.state.p22}
    </button>
    </div>
        </div>
      
 
        )
    }
} 
export default Button
 

import React  from 'react';



class Babita extends React.Component{
    constructor(props){
    super(props);
        this.state={p01:"-",p02:"-",p03:"-",p11:"-",p12:"-",p13:"-",p21:"-",p22:"-",p23:"-",

    }
 
}
        changeColor=(event)=>{

            let nam= event.target.name;
            let val= this.state[nam];
    
            if (val==="-"){
                val="x";
            }else if (val==="x"){
                    val="o"
                }
                    
        
                this.setState({[nam]:val});

            }
        

    render(){
        return(
            <>
            <div>
            <button type="button" name="p01" style={{backgroundColor:"red" , margin:"20px",width: "100px",
    height: "50px"}}onClick={this.changeColor}>{this.state.p01}</button>
            <button type="button" name="p02" style={{  backgroundColor:"yellow" ,width: "100px",margin:"20px",
    height: "50px"}} onClick={this.changeColor}>{this.state.p02}</button>
            <button type="button" name="p03" style={{backgroundColor:"cyan" ,width: "100px",margin:"20px",
    height: "50px"}} onClick={this.changeColor}>{this.state.p03}</button>
            
         
                <button type="button" name="p11" style={{backgroundColor:"blue" ,width: "100px",margin:"20px",
    height: "50px"}} onClick={this.changeColor}>{this.state.p11}</button>
                <button type="button" name="p12" style={{backgroundColor:"orange" ,width: "100px",margin:"20px",
    height: "50px"}} onClick={this.changeColor}>{this.state.p12}</button>
                <button type="button" name="p13" style={{backgroundColor:"black", margin:"20px",color:"white",width: "100px",
    height: "50px"}} onClick={this.changeColor}>{this.state.p13}</button>
         
           
                <button type="button" disabled={this.state.p21!=="-"} name="p21" style={{backgroundColor:"green" ,width: "100px",
    height: "50px",margin:"20px",}}onClick={this.changeColor}>{this.state.p21}</button>
                <button type="button" name="p22" style={{backgroundColor:"violet" ,width: "100px",
    height: "50px",margin:"20px",}} onClick={this.changeColor}>{this.state.p22}</button>
                <button type="button" name="p23" style={{backgroundColor:"teal" ,width: "100px",
    height: "50px",margin:"20px",}} onClick={this.changeColor}>{this.state.p23}</button>
            </div>
            </>
        )
        }
    }

export default  Babita ;
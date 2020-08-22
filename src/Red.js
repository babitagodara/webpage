import React from "react";



class Red extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "Click me and check me" };
 
  }

  changeColor = () => {
    let color= this.state.color
   
    if (color === "Click me and check me")
     {
      this.setState({color:"I am button of color red"});
  } else if (color==="I am button of color red") {
    this.setState({color: "green"});
  } else {
    this.setState({color: "black"}); 
  };
    
 
  
  };
  
  
  render() {
   
    return (
      <div>
        <button
        name="color"
          type="button"
           style={{
            backgroundColor: "red",
            width: "250px",
            height: "160px",
            margin: "20px",
          }}
          onClick={this.changeColor }
           
        
        >
          {this.state.color}
      
          
        </button>
        
      </div>
    );
  }
}


export default Red;

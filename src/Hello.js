import React, { Component } from 'react';
 
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "Default Content"
    }
  }
  render() {
    return (
      <div>
        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
          

        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={ () => this.setState({ message: "Clicked!"})}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default Hello;
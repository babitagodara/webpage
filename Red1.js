import React from "react";

class Red1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Click me and check me" };
  }

  changeColor = () => {
    this.setState({ color: " I am button of color red" });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "red",
            width: "250px",
            height: "160px",
            margin: "20px",
          }}
          onClick={this.changeColor}
        >
          {this.state.color}
        </button>
      </div>
    );
  }
}

export default Red1;

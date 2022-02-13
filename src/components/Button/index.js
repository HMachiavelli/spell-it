import React from "react";
import "./styles.css";

class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={`btn btn-${this.props.theme} ${
          this.props.width == "100" ? "width-100" : ""
        }`}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;

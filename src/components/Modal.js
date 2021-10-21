import { Component } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
  }

  handleEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onClick();
    }
  };

  handleClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleClose}>
        <div className="Modal">
          <img src={this.props.largePic} alt="" />
        </div>
      </div>,
      document.getElementById("modalRoot")
    );
  }
}

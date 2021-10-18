import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoaderComponent extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}

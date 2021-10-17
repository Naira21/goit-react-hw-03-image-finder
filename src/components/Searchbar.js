import { Component } from "react";
import "./styles.css";

class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSearchOnChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("before fetch", this.state.searchValue);
    this.props.onSubmit(this.state.searchValue); //передает родителю значение
    this.setState({ searchValue: "" }); //зачищаем инпут (+ передаем свойство value в инпут)
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSearchSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.searchValue}
            placeholder="Search images and photos"
            onChange={this.handleSearchOnChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

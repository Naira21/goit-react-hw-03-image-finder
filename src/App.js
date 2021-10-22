import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";

class App extends Component {
  state = {
    searchValue: "",
    page: 1,
  };

  getSearchValue = (searchValue) => this.setState({ searchValue });

  render() {
    const { getSearchValue } = this;
    const { searchValue, page } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={getSearchValue} />
        <ImageGallery searchValue={searchValue} page={page} />
      </div>
    );
  }
}

export default App;

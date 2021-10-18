import { Component } from "react";
import "./App.css";
// import axios from "axios";
// const BASE_URL = `https://pixabay.com/api/`;

//импорт компонентов
import Searchbar from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";

// let searchQuery = 'bear';
// let searchPage = '1';
// let searchPerPage = '12';
// const imageType = 'photo';
// const imageOrient = 'horizontal';
// let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=${imageType}&orientation=${imageOrient}&per_page=${searchPerPage}`

//класс

class App extends Component {
  state = {
    searchValue: "",
    // page: 1,
    //searchResults:[],
  };

  //методы жизненного цикла

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.searchValue !== this.state.searchValue) {  //проверяем условие
    //  console.log(`dd`)
    // }
  }
  getSearchValue = (searchValue) => this.setState({ searchValue });
  render() {
    //const { handleSearchSubmit, handleSearchOnChange } = this;
    const { searchValue, page } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.getSearchValue} />
        <ImageGallery searchValue={searchValue} page={page} />
      </div>
    );
  }
}

export default App;

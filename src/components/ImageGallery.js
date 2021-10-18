import "./styles.css";
import { Component } from "react";
import { PixabayFetch } from "../services/pixabay";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";

//для запроса
const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;
const BASE_URL = `https://pixabay.com/api/`;
const newPixabayFetch = new PixabayFetch(API_KEY, BASE_URL);

export class ImageGallery extends Component {
  state = {
    searchResults: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      console.log(`get fetch`);
      newPixabayFetch.resetPage();
      newPixabayFetch.searchQuery = this.props.searchValue; //так как мы обращаемся к сеттеру, то значение мы просто перезаписываем (а не вызываем)
      newPixabayFetch
        .searchPhotos() //сетим значение из searchValue, чтобы вызвать метод searchPhotos
        .then((searchResults) => {
          console.log(searchResults);
          this.setState({ searchResults });
        })
        .catch((err) => console.log(err));
    }
  }
  handleClick = () => {
    newPixabayFetch.page = 1;
    console.log("page", newPixabayFetch.page);
    newPixabayFetch.searchPhotos().then((searchResults) => {
      this.setState((prev) => ({
        searchResults: [...prev.searchResults, ...searchResults],
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.searchResults.map((picture) => {
            return <ImageGalleryItem picture={picture} key={picture.id} />;
          })}
          {/* {this.state.searchResults.total.length > 0 &&
            this.state.searchResults.map((picture) => {
              return <ImageGalleryItem picture={picture} key={picture.id} />;
            })} */}
        </ul>
        {/* <button type="button" onClick={this.handleClick}>
            load more
          </button> */}
        {/* <Button type="button" results={this.state.searchResults} onClick={this.handleClick} /> */}
        <Button
          type="button"
          onClick={this.handleClick}
          results={this.state.searchResults}
        />
      </>
    );
  }
}

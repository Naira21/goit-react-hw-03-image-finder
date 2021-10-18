import "./styles.css";
import { Component } from "react";
import { PixabayFetch } from "../services/pixabay";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import LoaderComponent from "./Loader";

//для запроса
const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;
const BASE_URL = `https://pixabay.com/api/`;
const newPixabayFetch = new PixabayFetch(API_KEY, BASE_URL);

export class ImageGallery extends Component {
  state = {
    searchResults: [],
    status: "init",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      console.log(`get fetch`);
      this.setState({ status: "pending" });
      newPixabayFetch.resetPage();
      newPixabayFetch.searchQuery = this.props.searchValue; //так как мы обращаемся к сеттеру, то значение мы просто перезаписываем (а не вызываем)
      newPixabayFetch
        .searchPhotos() //сетим значение из searchValue, чтобы вызвать метод searchPhotos
        .then((searchResults) => {
          console.log(searchResults);
          this.setState({ searchResults, status: "success" });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ status: "error" });
        });
    }
  }
  handleClick = () => {
    newPixabayFetch.page = 1;
    console.log("page", newPixabayFetch.page);
    newPixabayFetch
      .searchPhotos()
      .then((searchResults) => {
        this.setState((prev) => ({
          searchResults: [...prev.searchResults, ...searchResults],
          status: "success",
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ status: "error" });
      });
  };

  render() {
    if (this.state.status === "init") {
      return null;
    }
    if (this.state.status === "pending") {
      return <LoaderComponent />;
    }
    if (this.state.status === "success") {
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
    if (this.state.status === "error") {
      return alert("Sorry, we have not find such word... Lets try again!");
    }
  }
}

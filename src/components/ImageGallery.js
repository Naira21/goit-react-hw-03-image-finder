import "./styles.css";
import { Component } from "react";
import { PixabayFetch } from "../services/pixabay";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import LoaderComponent from "./Loader";
import { Modal } from "./Modal";

//для запроса
const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;
const BASE_URL = `https://pixabay.com/api/`;
const newPixabayFetch = new PixabayFetch(API_KEY, BASE_URL);

export class ImageGallery extends Component {
  state = {
    searchResults: [],
    showModal: false,
    status: "init",
    bigUrlState: "",
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
          this.scrolling();
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
        this.scrolling();
      })
      .catch((err) => {
        console.log(err);
        this.setState({ status: "error" });
      });
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, bigUrlState: "" });
  };

  openModal = (bigImg) => {
    this.setState({
      showModal: true,
      bigUrlState: bigImg,
    });
  };

  render() {
    const { searchResults, status, showModal } = this.state;
    const { closeModal, handleClick, openModal } = this;
    if (status === "init") {
      return null;
    }
    if (status === "pending") {
      return <LoaderComponent />;
    }
    if (status === "success") {
      return (
        <>
          <ul className="ImageGallery">
            {searchResults.length > 0 &&
              searchResults.map((picture) => {
                return (
                  <ImageGalleryItem
                    key={picture.id}
                    onClick={openModal}
                    pictUrl={picture.webformatURL}
                    photographer={picture.user}
                  />
                );
              })}
            {showModal && (
              <Modal
                onClick={closeModal}
                largePic={searchResults.largeImageURL}
              />
            )}
          </ul>

          <Button type="button" onClick={handleClick} results={searchResults} />

          {/* {this.showModal && (<Modal onClick={this.toggleModal} largePicture={this.state.searchResults.largeImageURL }  userName={this.state.searchResults.user }/>)} */}
        </>
      );
    }
    if (status === "error") {
      if (searchResults.length === 0) {
        return alert("Sorry, we have not find such word... Lets try again!");
      }
    }
  }
}

import axios from "axios";

// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.key = API_KEY;
// let searchQ = 'bear';
// let searchP = '1';
// let searchPP = '12';

// let params = `?q=${searchQ}&page=${searchP}&per_page=${searchPP}`
// let url = params;
// axios.get(url);

//OOP
export class PixabayFetch {
  constructor(API_KEY, BASE_URL) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
    this._searchQuery = ""; //имя свойства, с которым работает геттер и сеттер (их имена одинаковые), должно отличаться. Для этого используем паттерн — нижнее подчеркивание
    this._page = 1;
    this.perPage = 12;
    this.imageType = "photo";
    this.imageOrient = "horizontal";
  }
  //так как мы передаем пустое значение для searchQuery, то необходимо ввести для них геттер ии сеттер
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page = +value);
  }

  async searchPhotos() {
    axios.defaults.baseURL = this.BASE_URL;
    console.log("searchQ:", this.searchQuery, "page:", this.page);
    let url = `?q=${this.searchQuery}&page=${this.page}&key=${this.API_KEY}&image_type=${this.imageType}&orientation=${this.imageOrient}&per_page=${this.perPage}`;

    try {
      const result = await axios.get(url);
      const data = result.data.hits;
      return data;
    } catch (err) {
      return err.message;
    }
    // return
    //     .then(result=> { return result.data })
    //     .then(data => { return data.hits })
    //     .catch((err) => { console.log(err) });
  }
}

//Declarative method
// export function PixabayFetchFunc(){
// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;

//     axios.defaults.baseURL = BASE_URL;
//     const searchPhotos=(searchQuery, searchPage, imageType, imageOrient, searchPerPage)=> {
//         axios.defaults.baseURL = this.BASE_URL;
//         let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=${imageType}&orientation=${imageOrient}&per_page=${searchPerPage}`;
//         axios.get(url).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)});
//     }
// }

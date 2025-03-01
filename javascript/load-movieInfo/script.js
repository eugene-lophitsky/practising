import * as _ from "lodash";

let searchField = document.querySelector(".search-title");
let movieBox = document.querySelector(".movie-search-results");

function InputMovieName() {
  let t;
  t = searchField.value;
  const apiUrlbase = "http://www.omdbapi.com/?s=";
  const apiKey = "&apikey=c519fce0";
  let final = apiUrlbase + t + apiKey;

  fetch(final)
    .then((response) => response.json())
    .then((data) => {
      
    let movieCardTemplate = (movieCardData) =>  `
                <div class="movie-card">
                <div class="movie__poster">
                  <img src=${movieCardData.Poster} alt="">
                </div>
                <div class="movie__title">Название: <div class="movie__title-label">${movieCardData.Title}</div></div>
                <div class="movie__release">Год выпуска: <span class="movie__release-year">${movieCardData.Year}</span></div>
            </div>
    `
      let cardList = "";
      data.Search.map((item)=>{
      cardList += movieCardTemplate(item);
      })
      console.log("список карточек", cardList);
      movieBox.innerHTML = cardList;
   });   
}
searchField.addEventListener("keyup", _.debounce(InputMovieName, 1000));
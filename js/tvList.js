import TvItem from "./tvItem.js";
export const doApi = async (_search) => {
  let url = `https://api.tvmaze.com/search/shows?q=${_search}`;

  document.querySelector("#id_parent").innerHTML = `
    <div class="my-5 mx-1">
    <img class="my-5" src="my-img/loadingPage.gif" width="150" alt="">
    </div>
    `;

  let resp = await axios.get(url);
  console.log(resp.data);
  createListMovies(resp.data);
};
const createListMovies = (_arr_movie) => {
  document.querySelector("#id_parent").innerHTML = ""; //refresh the page
  _arr_movie.forEach((item) => {
    // create clss of movie
    let tvShow = new TvItem("#id_parent", item.show);
    console.log(tvShow);
    tvShow.render(); //print to the screen.
  });
};

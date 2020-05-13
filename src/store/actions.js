import axios from "axios";

//ACTION TYPES
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const DELETE_MOVIE = "DELETE_MOVIE";

//ACTION CREATORS
const saveMovies = (res) => {
  return {
    type: SEARCH_MOVIES,
    movieResults: res,
  };
};
export const searchMovie = (searchTerm) => {
  return (dispatch) => {
    // make axios request to OMDB API
    axios
      .get(`?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`)
      .then((response) => {
        dispatch(saveMovies(response));
      });
  };
};

export const deleteMovie = (id) => {
  console.log(id, "ID in ACTION CREATOR FOR DELETE");
  return {
    type: DELETE_MOVIE,
    id: id,
  };
};

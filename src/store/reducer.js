import * as actionTypes from "./actions";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES:
      // const newMovieResults = [];

      // action.movieResults.map((movie, idx) => {
      //   newMovieResults.push({ movie: movie, id: idx });
      // });
      return {
        ...state,
        movies: action.movieResults.data.Search,
      };

    case actionTypes.DELETE_MOVIE:
      const updatedMovies = state.movies.filter(
        (movie, idx) => idx !== action.id
      );
      return {
        ...state,
        movies: updatedMovies,
      };

    default:
      return state;
  }
  // return state;
};

export default reducer;

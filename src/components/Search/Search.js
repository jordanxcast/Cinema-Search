import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMovie, deleteMovie } from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { colors, PageHeader } from "../../constantStyles";
import MovieItem from "../MovieItem/MovieItem";
import {
  ErrorMessage,
  SearchContainer,
  SearchInput,
  SearchSubmit,
  MovieResults,
  Loading,
  ResultsHeader,
  BackToTop,
  NoSearchResults,
} from "./Search.style";

function Search(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  //handles when user clicks on the search button
  const handleMovieSearch = (ev) => {
    ev.preventDefault();
    setLoading(true);

    //get input value submitted and send to the dispatch for axios request
    const { movieSearchTerm } = ev.target;
    let search_term = movieSearchTerm.value;
    setSearchTerm(search_term);

    //redux dispatch to action creator
    props.onSearchMovie(search_term);

    //clear input and reset form
    movieSearchTerm.value = "";
    setLoading(false);
    setFormIsValid(false);
  };

  //handles any change to the search input to make sure the form is valid to submit, this will dictate if the submit button is disabled or not
  const inputChangeHandler = (ev) => {
    setError(false);
    if (ev.target.value !== "" && ev.target.value.length >= 3) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  //listener sets scroll button to be visible or not
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  //executes scroll to the top of the page
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //simple event listener to show or hide the scroll to top button
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <SearchContainer
        onSubmit={(ev) => {
          handleMovieSearch(ev);
        }}
      >
        <PageHeader margin="0px auto" color={colors.lavendarBlue}>
          Movie Search
        </PageHeader>

        {/* This handles any request errors, if somehow the api call is completly unsuccessful */}
        {error && (
          <ErrorMessage>Something went wrong, please try again!</ErrorMessage>
        )}

        <form>
          <label>
            <SearchInput
              placeholder="Search by movie title"
              type="text"
              name="movieSearchTerm"
              onChange={(ev) => {
                inputChangeHandler(ev);
              }}
              required
            />
          </label>
          <SearchSubmit
            type="submit"
            disabled={!formIsValid}
            valid={formIsValid}
          >
            Search
          </SearchSubmit>
        </form>
      </SearchContainer>

      <MovieResults>
        <ResultsHeader>
          {searchTerm ? (
            <span className="search-term-exists">
              {" "}
              You searched for <span className="search-term">{searchTerm}</span>
            </span>
          ) : (
            <span className="no-search-term">Search for a movie above</span>
          )}
        </ResultsHeader>

        {loading && <Loading>Loading ...</Loading>}

        {props.movieResults ? (
          props.movieResults.map((movie, idx) => {
            return (
              <MovieItem
                clicked={() => props.onDeleteMovie(idx)}
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster}
                key={idx}
              />
            );
          })
        ) : (
          <NoSearchResults style={{ width: "100%" }}>
            Please try searching another title
          </NoSearchResults>
        )}
        <br />

        {showScroll && (
          <BackToTop onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </BackToTop>
        )}
      </MovieResults>
    </>
  );
}

//access to movieResults stored with Redux
const mapStateToProps = (state) => {
  return {
    movieResults: state.movies,
  };
};

//access to actions to manipulate state managed with Redux
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (searchTerm) => dispatch(searchMovie(searchTerm)),
    onDeleteMovie: (idx) => dispatch(deleteMovie(idx)),
  };
};

//export and connect Redux with our container component
export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMovie, deleteMovie } from "./store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { colors, PageHeader } from "./constantStyles";
import MovieItem from "./MovieItem";
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

  const handleMovieSearch = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const { movieSearchTerm } = ev.target;
    let search_term = movieSearchTerm.value;
    setSearchTerm(search_term);

    //redux dispatch to action creator
    props.onSearchMovie(search_term);

    movieSearchTerm.value = "";
    setLoading(false);
    setFormIsValid(false);
  };

  const inputChangeHandler = (ev) => {
    setError(false);
    if (ev.target.value !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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

const mapStateToProps = (state) => {
  return {
    movieResults: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (searchTerm) => dispatch(searchMovie(searchTerm)),
    onDeleteMovie: (idx) => dispatch(deleteMovie(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

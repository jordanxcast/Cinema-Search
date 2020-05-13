import React from "react";
import { colors } from "../../constantStyles";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  MovieItemContainer,
  MovieHeader,
  MovieTitle,
  MovieYear,
  MovieDelete,
  MovieImageContainer,
  MovieImage,
} from "./MovieItem.style";

export default function MovieItem(props) {
  return (
    <MovieItemContainer>
      <MovieHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <MovieTitle>{props.title}</MovieTitle>
          <MovieYear>{props.year}</MovieYear>
        </div>

        <MovieDelete
          type="button"
          onClick={() => {
            props.clicked();
          }}
          data-tip="Delete Movie"
        >
          <ReactTooltip
            textColor={colors.lavendarBlue}
            backgroundColor={colors.blackCoral}
            place="top"
            effect="float"
          />
          <FontAwesomeIcon icon={faTimes} />
        </MovieDelete>
      </MovieHeader>

      <MovieImageContainer>
        <MovieImage
          src={props.image}
          alt={`${props.title} Poster`}
        ></MovieImage>
      </MovieImageContainer>
    </MovieItemContainer>
  );
}

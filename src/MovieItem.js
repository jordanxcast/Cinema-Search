import React from "react";
import { colors } from "./constantStyles";
import styled from "styled-components";

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
        >
          X
        </MovieDelete>
      </MovieHeader>

      <MovieImage src={props.image} alt={`${props.title} Poster`}></MovieImage>
    </MovieItemContainer>
  );
}

const MovieItemContainer = styled.div`
  width: 80%;
  min-width: 200px;
  height: fit-content;
  padding: 0px;
  margin: 50px auto;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);

  animation: 1s ease 0s 1 fadeIn;

  @media (min-width: 500px) {
    min-width: 300px;
    width: 40%;
    margin: 50px 30px;
  }

  @media (min-width: 700px) {
    min-width: 300px;
    width: 25%;
    margin: 50px 50px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const MovieHeader = styled.div`
  min-height: 90px;
  display: flex;
  width: 100%;
  background-color: ${colors.grey};
  align-items: center;
  padding: 20px 0px;
  /* border: 1px solid ${colors.charcoal}; */
`;

const MovieTitle = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  color: ${colors.tangerine};
  padding-left: 20px;
  font-weight: bold;
`;
const MovieYear = styled.div`
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  color: ${colors.charcoal};
`;
const MovieDelete = styled.button`
  font-size: 12px;
  padding: 0px 5px;
  width: fit-content;
  border-radius: 30px;
  height: 20px;
  margin-right: 20px;
  margin-left: auto;
  background: transparent;
  border: 1px solid ${colors.rubineRed};
  color: ${colors.rubineRed};
  align-self: flex-start;

  :hover,
  :active,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.tangerine};
    color: ${colors.tangerine};
  }
`;
const MovieImage = styled.img`
  width: 100%;
  height: fit-content;
  border: none;
  background-color: black;
  color: white;
  margin: 0px;
  padding: 0px;
`;

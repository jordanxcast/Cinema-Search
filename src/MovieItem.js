import React, { useState, useEffect } from "react";
import { colors, PageHeader } from "./constantStyles";
import styled from "styled-components";

export default function MovieItem(props) {
  return (
    <MovieItemContainer>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: colors.grey,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            padding: "20px 10px",
          }}
        >
          <MovieTitle>Pulp Fiction</MovieTitle>
          <MovieYear>1994</MovieYear>
        </div>

        <MovieDelete type="button" onClick={() => {}}>
          X
        </MovieDelete>
      </div>

      <MovieImage></MovieImage>
    </MovieItemContainer>
  );
}

const MovieItemContainer = styled.div`
  width: 80%;
  padding: 0px;
  margin: auto;
`;

const MovieTitle = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  color: ${colors.tangerine};
`;
const MovieYear = styled.div`
  font-size: 14px;
  text-align: left;
`;
const MovieDelete = styled.button`
  font-size: 14px;
  padding: 4px 8px;
  width: fit-content;
  border-radius: 30px;
  height: 30px;
  margin-right: 20px;
  background: transparent;
  border: 1px solid ${colors.deepRed};
  color: ${colors.deepRed};
`;
const MovieImage = styled.img`
  width: 100%;
  height: 100px;
`;

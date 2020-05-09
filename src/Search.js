import React, { useState, useEffect } from "react";
import { colors, PageHeader } from "./constantStyles";
import styled from "styled-components";
import MovieItem from "./MovieItem";

export default function Search(props) {
  return (
    <>
      <SearchContainer>
        <PageHeader margin="0px auto">Movie Search</PageHeader>
        <form>
          <label>
            <SearchInput placeholder="Pulp Fiction" type="text" />
          </label>
          <SearchSubmit>Search</SearchSubmit>
        </form>
      </SearchContainer>
      <MovieResults>
        <MovieItem />
      </MovieResults>
    </>
  );
}

const SearchContainer = styled.div`
  padding: 30px;
  text-align: center;
  background-color: ${colors.charcoal};
  color: ${colors.rubineRed};
  display: flex;
  flex-direction: column;

  > form {
    display: flex;
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  border: 1px solid ${colors.blackCoral};
  border-radius: 10px;
  width: 80%;
  margin: 30px auto 30px;
  background: transparent;
  color: ${colors.lavendarBlue};

  :hover,
  :focus {
    border-color: ${colors.tangerine};
  }

  @media (min-width: 700px) {
    width: 40%;
  }
`;

const SearchSubmit = styled.button`
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  border: 1px solid ${colors.blackCoral};
  background: transparent;
  border-radius: 30px;
  width: fit-content;
  margin: auto;
  color: ${colors.blackCoral};
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.lavendarBlue};
    border: 1px solid ${colors.lavendarBlue};
  }
`;

const MovieResults = styled.div`
  padding: 50px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

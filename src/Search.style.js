import styled from "styled-components";
import { colors, PageHeader } from "./constantStyles";

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${colors.rubineRed};
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
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

export const SearchInput = styled.input`
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

export const SearchSubmit = styled.button`
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
  border: 1px solid
    ${({ valid }) => (valid ? colors.lavendarBlue : colors.blackCoral)};
  background: transparent;
  border-radius: 30px;
  width: fit-content;
  margin: auto;
  color: ${({ valid }) => (valid ? colors.lavendarBlue : colors.blackCoral)};
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const MovieResults = styled.div`
  padding: 50px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Loading = styled.div`
  text-align: center;
`;

export const ResultsHeader = styled.h3`
  font-weight: normal;
  width: 80%;
  margin: 0px auto 50px;
  font-size: 20px;
  .search-term-exists {
    text-align: left;
  }
  .search-term {
    color: ${colors.blackCoral};
    font-weight: bolder;
  }
  .no-search-term {
    color: ${colors.rubineRed};
    font-weight: lighter;
    text-align: center;
  }
`;

export const NoSerarchResults = styled.div`
  width: 100%;
  font-size: 30px;
  margin-top: 50px;
`;

export const BackToTop = styled.button`
  /* position: relative;
  bottom: 0px;
  border: none;
  background: transparent;
  font-size: 30px; */

  position: fixed;
  width: fit-content;
  bottom: 20px;
  left: 20px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

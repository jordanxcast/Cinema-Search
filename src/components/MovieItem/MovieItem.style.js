import { colors } from "../../constantStyles";
import styled from "styled-components";


export const MovieItemContainer = styled.div`
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

export const MovieHeader = styled.div`
  min-height: 90px;
  display: flex;
  width: 100%;
  background-color: ${colors.grey};
  align-items: center;
  padding: 20px 0px;
  /* border: 1px solid ${colors.charcoal}; */
`;

export const MovieTitle = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  color: ${colors.tangerine};
  padding-left: 20px;
  font-weight: bold;
`;

export const MovieYear = styled.div`
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  color: ${colors.charcoal};
`;

export const MovieDelete = styled.button`
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

export const MovieImageContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: none;
  margin: 0px auto;
  padding: 5px 0px;
  background-color: ${colors.charcoal};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 400px;
    min-height: 400px;
  }

  @media (min-width: 900px) {
    min-height: 500px;
  }
`;

export const MovieImage = styled.img`
  object-fit: cover;
  width: 80%;
  height: 100%;
  border: none;
  background-color: black;
  color: ${colors.lavendarBlue};
  text-align: center;
  line-height: 300px;
  padding: 0px;
`;

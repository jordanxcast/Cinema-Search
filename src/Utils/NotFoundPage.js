import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, PageHeader } from "../constantStyles";



export default function NotFoundPage(props) {
  return (
    <NotFoundContainer>
      <PageHeader>Looks like you're a little lost</PageHeader>
      <BackToPage to="/">Back to the Search</BackToPage>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  position: relative;
  top: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const BackToPage = styled(Link)`
  width: fit-content;
  margin: auto;
  border: 1px solid ${colors.charcoal};
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: 50px;
  color: ${colors.charcoal};
  text-decoration: none;
  :hover {
    cursor: pointer;
    border-color: ${colors.rubineRed};
    color: ${colors.rubineRed};
    -webkit-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
  }
`;

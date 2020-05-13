import styled from "styled-components";

export const colors = {
  charcoal: "#404E5C",
  rubineRed: "#CF1259",
  deepRed: "#880044",
  blackCoral: "#4F6272",
  lavendarBlue: "#B7C3F3",
  tangerine: "#F39C6B",
  grey: "#EEEEEE",
};

export const PageHeader = styled.h1`
  margin: ${({ margin }) => (margin ? margin : "50px auto 0px")};
  font-size: 2em;
  color: ${({ color }) => (color ? color : colors.rubineRed)};
`;

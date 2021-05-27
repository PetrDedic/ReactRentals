import styled from "styled-components";
import ContentCard from "./ContentCard";
import ContentMenu from "./ContentMenu";

const StyledContent = styled.div`
  width: 80%;
  margin: 3rem auto 0;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
const StyledContentGrid = styled.div`
  margin-top: 5%;
  width: 95%;
  padding: 2.5%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  -webkit-column-gap: 24px;
  column-gap: 24px;
  row-gap: 32px;

  @media (max-width: 1580px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Content = (props) => {
  return (
    <StyledContent>
      <ContentMenu></ContentMenu>
      <StyledContentGrid>
        <ContentCard></ContentCard>
        <ContentCard></ContentCard>
        <ContentCard></ContentCard>
        <ContentCard></ContentCard>
        <ContentCard></ContentCard>
      </StyledContentGrid>
    </StyledContent>
  );
};

export default Content;

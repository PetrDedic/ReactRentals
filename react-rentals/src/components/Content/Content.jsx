import styled from "styled-components";
import ContentCard from "../ContentCard/ContentCard";
import ContentMenu from "./ContentMenu";
import CardText from "../ContentCard/CardText";
import CardLike from "../ContentCard/CardLike";
import CardImage from "../ContentCard/CardImage";
import CardDescription from "../ContentCard/CardDescription";
import CardActionButton from "../ContentCard/CardActionButton";
import CardDate from "../ContentCard/CardDate";

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
        <ContentCard>
          <CardLike isLiked="false" />
          <CardImage />
          <CardText text="Toto je text" />
          <CardDescription text="Toto je popisek" />
          <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
          <CardActionButton />
        </ContentCard>
        <ContentCard>
          <CardLike isLiked="false" />
          <CardImage />
          <CardText text="Toto je text" />
          <CardDescription text="Toto je popisek" />
          <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
          <CardActionButton />
        </ContentCard>
        <ContentCard>
          <CardLike isLiked="false" />
          <CardImage />
          <CardText text="Toto je text" />
          <CardDescription text="Toto je popisek" />
          <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
          <CardActionButton />
        </ContentCard>
        <ContentCard>
          <CardLike isLiked="false" />
          <CardImage />
          <CardText text="Toto je text" />
          <CardDescription text="Toto je popisek" />
          <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
          <CardActionButton />
        </ContentCard>
        <ContentCard>
          <CardLike isLiked="false" />
          <CardImage />
          <CardText text="Toto je text" />
          <CardDescription text="Toto je popisek" />
          <CardDate />
          <CardActionButton />
        </ContentCard>
      </StyledContentGrid>
    </StyledContent>
  );
};

export default Content;

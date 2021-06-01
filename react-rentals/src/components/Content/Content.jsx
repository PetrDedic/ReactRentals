import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ContentCard from "../ContentCard/ContentCard";
import ContentMenu from "./ContentMenu";
import CardText from "../ContentCard/CardText";
import CardLike from "../ContentCard/CardLike";
import CardImage from "../ContentCard/CardImage";
import CardDescription from "../ContentCard/CardDescription";
import CardActionButton from "../ContentCard/CardActionButton";
import CardDate from "../ContentCard/CardDate";
import Error from "../404/Error";
import BagImage from "../BagCard/BagImage";
import BagCard from "../BagCard/BagCard";
import BagText from "../BagCard/BagText";
import BagDate from "../BagCard/BagDate";
import BagMenu from "../BagCard/BagMenu";

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

const StyledBagGrid = styled.div`
  margin-top: 5%;
  width: 95%;
  padding: 2.5%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, auto);
  row-gap: 32px;
`;

const Content = (props) => {
  return (
    <StyledContent>
      <Switch>
        <Route exact path="/">
          <ContentMenu></ContentMenu>
          <StyledContentGrid>
            <ContentCard>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 1" />
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
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 3" />
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
        </Route>
        <Route path="/favorite">
          <ContentMenu></ContentMenu>
          <StyledContentGrid>
            <ContentCard>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 1" />
              <CardDescription text="Toto je popisek" />
              <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
              <CardActionButton />
            </ContentCard>
            <ContentCard>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 3" />
              <CardDescription text="Toto je popisek" />
              <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
              <CardActionButton />
            </ContentCard>
          </StyledContentGrid>
        </Route>
        <Route path="/bag">
          <StyledBagGrid>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount="1"></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount="1"></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount=""></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu 4"
                description="Popisek produktu 4"
              ></BagText>
              <BagDate></BagDate>
              <BagMenu amount="3"></BagMenu>
            </BagCard>
          </StyledBagGrid>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;

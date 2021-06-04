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
import Button from "../Button/Button";
import AccountCard from "../AccountCard/AccountCard";
import AccountCardDate from "../AccountCard/AccountCardDate";
import AdminMenu from "../Admin/AdminMenu";
import AdminCalendar from "../Admin/AdminCalendar";
import AdminBorrows from "../Admin/AdminBorrows";

const StyledContent = styled.div`
  width: 80%;
  margin: 3rem auto 0;
  min-height: 85vh;

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
  grid-template-columns: repeat(4, 1fr);
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
  width: ${(props) => (props.isSmall ? "100%" : "90%")};
  margin-top: ${(props) => (props.isSmall ? "0" : "5%")};
  padding: ${(props) => (props.isSmall ? "0" : "5%")};
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 32px;
`;

const StyledAdminGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 32px;
  column-gap: 32px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
            <ContentCard isLeft>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 1" />
              <CardDescription text="Toto je popisek" />
              <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
              <CardActionButton />
            </ContentCard>
            <ContentCard isLeft>
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
            <Button type="green" text="Vypůjčit"></Button>
          </StyledBagGrid>
        </Route>
        <Route path="/account">
          <StyledBagGrid>
            <AccountCard id="1">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isOngoing></AccountCardDate>
            </AccountCard>
            <AccountCard id="2">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isReturned></AccountCardDate>
            </AccountCard>
            <AccountCard id="3">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate></AccountCardDate>
            </AccountCard>
          </StyledBagGrid>
        </Route>
        <Route exact path="/admin">
          <AdminMenu></AdminMenu>
          <StyledAdminGrid>
            <ContentMenu isView></ContentMenu>
            <AdminBorrows isSmall>
              <StyledBagGrid isSmall>
                <AccountCard isAdmin isBordered isSendable id="1">
                  <BagText
                    text="Vypujcka #2155"
                    description="28.5 - 3.7"
                  ></BagText>
                  <AccountCardDate isOngoing></AccountCardDate>
                </AccountCard>
                <AccountCard isAdmin isBordered isSendable id="1">
                  <BagText
                    text="Vypujcka #2156"
                    description="28.5 - 3.7"
                  ></BagText>
                  <AccountCardDate isOngoing></AccountCardDate>
                </AccountCard>
                <AccountCard isAdmin isBordered isSendable id="1">
                  <BagText
                    text="Vypujcka #2157"
                    description="28.5 - 3.7"
                  ></BagText>
                  <AccountCardDate isOngoing></AccountCardDate>
                </AccountCard>
                <AccountCard isAdmin isBordered isSendable id="1">
                  <BagText
                    text="Vypujcka #2158"
                    description="28.5 - 3.7"
                  ></BagText>
                  <AccountCardDate isOngoing></AccountCardDate>
                </AccountCard>
              </StyledBagGrid>
            </AdminBorrows>
          </StyledAdminGrid>
        </Route>
        <Route exact path="/admin/calendar">
          <AdminMenu></AdminMenu>
          <StyledAdminGrid>
            <AdminCalendar></AdminCalendar>
          </StyledAdminGrid>
        </Route>
        <Route exact path="/admin/list">
          <AdminMenu></AdminMenu>
          <StyledAdminGrid>
            <ContentMenu isAdmin></ContentMenu>
            <StyledContentGrid>
              <ContentCard>
                <CardLike isLiked="true" isEdit />
                <CardImage />
                <CardText text="Toto je text 1" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="true" isEdit />
                <CardImage />
                <CardText text="Toto je text 3" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
            </StyledContentGrid>
          </StyledAdminGrid>
        </Route>
        <Route exact path="/admin/users">
          <AdminMenu></AdminMenu>
          <StyledAdminGrid>
            <ContentMenu isView isFiltered isUnfiltered></ContentMenu>
            <AdminBorrows isSmall>
              <StyledBagGrid isSmall>
                <AccountCard isBordered id="1">
                  <BagText
                    text="Petr Dědic"
                    description="#fjn6546fawd"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="2">
                  <BagText
                    text="Michal Stehlík"
                    description="#fjn6566frad"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="3">
                  <BagText
                    text="Tomáš Kazda"
                    description="#fjn6543fldf"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="4">
                  <BagText
                    text="Kateřina Daňková"
                    description="#fjn6543fvfg"
                  ></BagText>
                </AccountCard>
              </StyledBagGrid>
            </AdminBorrows>
          </StyledAdminGrid>
        </Route>
        <Route exact path="/admin/manage">
          <AdminMenu></AdminMenu>
          <StyledAdminGrid>
            <ContentMenu isView isFiltered isUnfiltered></ContentMenu>
            <AdminBorrows isSmall>
              <StyledBagGrid isSmall>
                <AccountCard isBordered id="1">
                  <BagText
                    text="Petr Dědic"
                    description="#fjn6546fawd"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="2">
                  <BagText
                    text="Michal Stehlík"
                    description="#fjn6566frad"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="3">
                  <BagText
                    text="Tomáš Kazda"
                    description="#fjn6543fldf"
                  ></BagText>
                </AccountCard>
                <AccountCard isBordered id="4">
                  <BagText
                    text="Kateřina Daňková"
                    description="#fjn6543fvfg"
                  ></BagText>
                </AccountCard>
              </StyledBagGrid>
            </AdminBorrows>
          </StyledAdminGrid>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;

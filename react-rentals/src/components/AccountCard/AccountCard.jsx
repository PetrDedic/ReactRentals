import styled from "styled-components";
import BagCard from "../BagCard/BagCard";
import BagImage from "../BagCard/BagImage";
import BagText from "../BagCard/BagText";
import AccountCardButton from "./AccountCardButton";

const StyledAccountCard = styled.div`
  margin: auto;
  width: 90%;
  min-height: 8rem;
  display: grid;
  background-color: #fff;
  border-radius: 1.5rem;
  grid-template-columns: repeat(1, 1fr);
  transition: 250ms;

  -webkit-box-shadow: 0px 5px 50px -30px #191919;
  box-shadow: 0px 5px 50px -30px #191919;

  @media (max-width: 700px) {
    min-height: 6rem;
    width: 100%;
  }

  @media (max-width: 600px) {
    min-height: 5rem;
  }
`;

const StyledAccountCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAccountCardDetail = styled.div`
  height: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &.visible {
    height: auto;
    padding-bottom 2rem;  

    div {
      box-shadow: none;
      height: 8rem;

      @media (max-width: 700px) {
        height: 6rem;
        width: 100%;
      }

      @media (max-width: 600px) {
        height: 5rem;
      }

      .image-container {
        aspect-ratio: 1/1;
        width: auto;
        margin-left: 1rem;
      }
    }
  }

  div {
    height: 0;
    box-shadow: none;
  }
`;

const AccountCard = (props) => {
  return (
    <>
      <StyledAccountCard id={"order-" + props.id}>
        <StyledAccountCardWrapper>
          {props.children}
          <AccountCardButton id={"order-" + props.id}></AccountCardButton>
        </StyledAccountCardWrapper>
        <StyledAccountCardDetail id={"detail-order-" + props.id}>
          <BagCard>
            <BagImage></BagImage>
            <BagText
              text="Nazev produktu"
              description="Popisek produktu"
            ></BagText>
          </BagCard>
          <BagCard>
            <BagImage></BagImage>
            <BagText
              text="Nazev produktu"
              description="Popisek produktu"
            ></BagText>
          </BagCard>
          <BagCard>
            <BagImage></BagImage>
            <BagText
              text="Nazev produktu"
              description="Popisek produktu"
            ></BagText>
          </BagCard>
        </StyledAccountCardDetail>
      </StyledAccountCard>
    </>
  );
};

export default AccountCard;

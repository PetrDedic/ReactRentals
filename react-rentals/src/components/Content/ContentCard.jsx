import testimg from "../media/test.jpg";
import styled from "styled-components";
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  transition: 350ms;
  width: 100%;
  position: relative;

  margin: auto;

  &:hover {
    transform: scale(1.05);
    transition: 350ms;
  }

  max-width: 300px;
  display: grid;
  grid-template-rows: auto 0.33fr 0.33fr auto;
  grid-template-areas:
    "card-image"
    "card-text"
    "card-desc"
    "card-action";

  & .card-image {
    grid-area: card-image;
    aspect-ratio: 1/1;
    margin: 15%;

    img {
      width: 100%;
      border-radius: 2.5rem;
    }
  }
  & .card-text {
    max-width: 100%;
    margin: 1rem;
    grid-area: card-text;
    font-size: 1.5rem;

    p {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & .card-desc {
    margin: 0.75rem;
    grid-area: card-desc;
    font-size: 1rem;
    color: grey;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & .card-action {
    grid-area: card-action;
    text-align: center;
    background-color: #007784;
    padding: 1rem;
    border-radius: 0 0 2.5rem 2.5rem;
    color: #fff;
    cursor: pointer;
    transition: 100ms;

    &:hover {
      background-color: #198490;
      transition: 100ms;
    }
  }
`;

const StyledCardLike = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;

  i {
    font-size: 2rem;
    color: #00000024;

    &.liked {
      color: #007784;
    }
  }
`;

const ContentCard = (props) => {
  return (
    <>
      <StyledCard className="card">
        <StyledCardLike>
          <i className="fas fa-heart"></i>
        </StyledCardLike>
        <div className="card-image">
          <img src={testimg} alt="" />
        </div>
        <div className="card-text">
          <p>Já jsem text</p>
        </div>
        <div className="card-desc">
          <p>Já jsem doplněk</p>
        </div>
        <div className="card-action">
          <p>
            Přidat do košíku <i className="fas fa-shopping-bag"></i>
          </p>
        </div>
      </StyledCard>
    </>
  );
};

export default ContentCard;

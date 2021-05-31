import styled from "styled-components";

const StyledCardLike = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;

  i {
    font-size: 2rem;
    color: ${(props) => (props.isLiked === "true" ? "#007784" : "#00000024")};
    transition: 150ms;

    &:hover {
      color: #007784;
      transition: 150ms;
      cursor: pointer;
      transform: scale(1.15);
    }
  }
`;

const CardLike = (props) => {
  return (
    <StyledCardLike isLiked={props.isLiked}>
      <i className="fas fa-heart"></i>
    </StyledCardLike>
  );
};

export default CardLike;

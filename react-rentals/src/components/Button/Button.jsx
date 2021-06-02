import styled from "styled-components";

const StyledButton = styled.div`
  height: 5rem;
  width: 14rem;
  border-radius: 3rem;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.darkText ? "black" : "white")};
  cursor: pointer;
  transition: 250ms;
  margin: auto;

  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 1.45rem;
  }

  &:hover {
    transition: 250ms;
    transform: scale(1.1);
  }
`;

const Button = (props) => {
  switch (props.type) {
    case "white":
      return (
        <StyledButton color="white" darkText text={props.text}>
          <p>{props.text}</p>
        </StyledButton>
      );
    case "green":
      return (
        <StyledButton color="#007784" text={props.text}>
          <p>{props.text}</p>
        </StyledButton>
      );
    case "red":
      return (
        <StyledButton color="#d05555" text={props.text}>
          <p>{props.text}</p>
        </StyledButton>
      );
    default:
      return (
        <StyledButton color="white" darkText text={props.text}>
          <p>{props.text}</p>
        </StyledButton>
      );
  }
};

export default Button;

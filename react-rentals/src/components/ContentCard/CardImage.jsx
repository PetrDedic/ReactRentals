import styled from "styled-components";
import testimg from "../media/test.jpg";

const StyledCardImage = styled.div`
  aspect-ratio: 1/1;
  max-width: calc(300px - 30%);
  margin: 15%;

  img {
    width: 100%;
    border-radius: 2.5rem;
  }
`;

const CardImage = (props) => {
  //props -> path to image
  return (
    <StyledCardImage>
      <img src={testimg} alt="" />
    </StyledCardImage>
  );
};

export default CardImage;

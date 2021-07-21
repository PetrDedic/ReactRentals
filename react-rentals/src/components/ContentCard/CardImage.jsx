import styled from "styled-components";
import testimg from "../media/test.jpg";
import { Link, NavLink } from "react-router-dom";

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
      <NavLink
          className="unstyled header"
          tag={Link}
          to={"/detail"}
          activeClassName={""}
        >
          <img src={testimg} alt="" />
        </NavLink>
    </StyledCardImage>
  );
};

export default CardImage;

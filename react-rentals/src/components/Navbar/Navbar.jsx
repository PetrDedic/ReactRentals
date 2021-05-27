import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const StyledNavbar = styled.div`
  display: flex;
  width: 100%;
  z-index: 999;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  h1 {
    font-family: "Playfair Display", serif;
  }
`;

const StyledNavbarContent = styled.nav`
  width: 70%;
  padding: 2rem;
  margin: 1rem auto 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  border-radius: 1.5rem;

  -webkit-box-shadow: 0px 5px 50px -30px #191919;
  box-shadow: 0px 5px 50px -30px #191919;

  @media (max-width: 700px) {
    width: 80%;
    flex-direction: column;
  }
`;

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <StyledNavbarContent>
        <NavLink
          className="unstyled header"
          tag={Link}
          to={"/"}
          activeClassName={""}
        >
          <h1>Rentals</h1>
        </NavLink>
        <NavbarMenu></NavbarMenu>
      </StyledNavbarContent>
    </StyledNavbar>
  );
};

export default Navbar;

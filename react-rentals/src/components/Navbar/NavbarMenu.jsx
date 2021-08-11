import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  transition: 250ms;

  i {
    font-size: 24px;
  }
`;

const StyledNavbarMenu = styled.nav`
  width: 25%;

  @media (max-width: 700px) {
    margin-top: 1rem;
    width: 80%;
  }
`;

const NavbarMenu = (props) => {
  if (
    window.localStorage.getItem("isAdmin") === "true" &&
    window.localStorage.getItem("isLogged") === "true"
  ) {
    return (
      <StyledNavbarMenu>
        <StyledList>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/favorite"}
              activeClassName={"active"}
            >
              <i className="fas fa-heart"></i>
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/bag"}
              activeClassName={"active"}
            >
              <i className="fas fa-shopping-bag"></i>
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/account"}
              activeClassName={"active"}
            >
              <i className="fas fa-user"></i>
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/admin"}
              activeClassName={"active"}
            >
              <i className="fas fa-cog"></i>
            </NavLink>
          </StyledListItem>
        </StyledList>
      </StyledNavbarMenu>
    );
  } else if (window.localStorage.getItem("isLogged") === "false") {
    return (
      <StyledNavbarMenu>
        <StyledList>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/account"}
              activeClassName={"active"}
            >
              <i className="fas fa-user"></i>
            </NavLink>
          </StyledListItem>
        </StyledList>
      </StyledNavbarMenu>
    );
  } else {
    return (
      <StyledNavbarMenu>
        <StyledList>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/favorite"}
              activeClassName={"active"}
            >
              <i className="fas fa-heart"></i>
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/bag"}
              activeClassName={"active"}
            >
              <i className="fas fa-shopping-bag"></i>
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink
              className="unstyled"
              tag={Link}
              to={"/account"}
              activeClassName={"active"}
            >
              <i className="fas fa-user"></i>
            </NavLink>
          </StyledListItem>
        </StyledList>
      </StyledNavbarMenu>
    );
  }
};

export default NavbarMenu;

import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  background-color: #007784;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column-reverse;
    padding-bottom: 12rem;
  }

  p {
    padding: 2rem;
    font-size: 1rem;
    color: #fff;
  }

  button {
    color: #fff;
    margin-right: 2rem;
    background-color: inherit;
    border: none;
    margin: 1rem 2rem;
    padding: 0 1rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 1rem;
    transition: 250ms;

    &:hover {
      transition: 250ms;
      background-color: #fff;
      color: #007784;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      margin-top: 2rem;
      margin-left: auto;
      margin-right: auto;
      padding: 1rem;
    }
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <p>© Aplikace pro správu vybavení školního ateliéru</p>
      <button>Odhlásit se</button>
    </StyledFooter>
  );
};

export default Footer;

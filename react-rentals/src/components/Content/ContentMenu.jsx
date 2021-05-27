import styled from "styled-components";

const StyledContentMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const StyledSearchBox = styled.div`
  height: 2rem;
  background-color: #fff;
  width: 20rem;
  padding: 1rem;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;

  #searchField {
    height: 2rem;
    width: 80%;
    margin-left: 5%;
    margin: 0;
    padding: 0;
    border: none;
    color: black;
    background-color: inherit;
    font-family: "Poppins";
    font-size: 0.9rem;

    &:focus-visible {
      outline: none;
    }
  }

  i {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const StyledSearchBoxWithin = styled.div`
  width: 90%;
  margin-left: 5%;
  float: left;
  display: flex;
  justify-content: space-between;
`;

const StyledFilterButton = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;

  i {
    padding: 0.125rem;
    font-size: 1.75rem;
    cursor: pointer;
  }
`;

const StyledCategory = styled.div`
  height: 2rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;
  margin-right: 1rem;

  font-size: 1.35rem;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    margin-top 3rem;
    justify-content: space-between;
  }
`;

const ContentMenu = (props) => {
  return (
    <StyledContentMenu>
      <StyledSearchBox>
        <StyledSearchBoxWithin>
          <input id="searchField" type="text" placeholder="Hledat..." />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </StyledSearchBoxWithin>
      </StyledSearchBox>
      <StyledDiv>
        <StyledCategory>
          <details>
            <summary>Kategorie</summary>
          </details>
        </StyledCategory>
        <StyledFilterButton>
          <i className="fas fa-sort-amount-up-alt"></i>
        </StyledFilterButton>
      </StyledDiv>
    </StyledContentMenu>
  );
};

export default ContentMenu;

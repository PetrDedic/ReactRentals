import styled from "styled-components";

const StyledCategory = styled.div`
  min-height: 2rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;
  margin-right: 1rem;
  transition: 250ms;

  font-size: 1.35rem;
  cursor: pointer;
`;

const StyledDetails = styled.details`
  transition: 250ms;

  summary {
    text-align: center;
  }

  ul,
  li {
    list-style-type: none;
    transition: 250ms;
    padding: 0.25rem 1.25rem;
  }

  li {
    border-radius: 2.5rem;
    padding: 0.25rem 1.5rem;
    margin: 0.5rem 0;
    transition: 250ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;

    span {
      color: white;
      font-size: 1.25rem;
      margin-right: 4px;
      height: 90%;
      padding-bottom: 10%;
    }

    &:hover {
      background-color: #f7f7f7;
      transition: 250ms;
    }
  }
`;

const CategoryButton = (props) => {
  return (
    <StyledCategory>
      <StyledDetails>
        <summary>Kategorie</summary>
        <ul>
          <li>
            <span>●</span>Vše
          </li>
          <li>
            <span>●</span>Těla fotoaparátů
          </li>
          <li>
            <span>●</span>Objektivy
          </li>
          <li>
            <span>●</span>Stativy
          </li>
          <li>
            <span>●</span>Příslušenství
          </li>
        </ul>
      </StyledDetails>
    </StyledCategory>
  );
};

export default CategoryButton;

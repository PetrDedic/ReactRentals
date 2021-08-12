import styled from "styled-components";

const StyledCategory = styled.div`
  display: ${(props) => (props.isUnfiltered ? "none" : "unset")};

  min-height: 2rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;
  margin-right: 1rem;
  margin-left: 1rem;
  transition: 250ms;
  position: absolute;
  z-index: 4;

  font-size: 1.35rem;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 0.75rem;
    margin-left: 0;
  }
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

    @media (max-width: 700px) {
      padding: 0.25rem 0;
    }
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

    @media (max-width: 700px) {
      padding: 0.25rem 0;
    }

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
  if (props.isView) {
    return (
      <StyledCategory isUnfiltered={props.isUnfiltered}>
        <StyledDetails>
          <summary>Filtrovat</summary>
          <ul>
            <li>
              <span>●</span>Vše
            </li>
            <li>
              <span>●</span>Probíhající
            </li>
            <li>
              <span>●</span>Vrácené
            </li>
            <li>
              <span>●</span>Nevrácené
            </li>
          </ul>
        </StyledDetails>
      </StyledCategory>
    );
  } else {
    return (
      <StyledCategory>
        <StyledDetails>
          <summary>Filtrovat</summary>
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
  }
};

export default CategoryButton;

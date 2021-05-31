import styled from "styled-components";

const StyledCardDate = styled.span`
  margin: 0.75rem;
  font-size: 0.75rem;
  color: #00ae7c;
  height: 25px;

  p {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.notAvailable {
      color: #d05555;
    }
  }
`;

const CardDate = (props) => {
  if (props.dateFrom === undefined) {
    return (
      <StyledCardDate>
        <p className="notAvailable">Momentálně nedostupné</p>
      </StyledCardDate>
    );
  } else {
    return (
      <StyledCardDate>
        <p>
          Dostupnost: {props.dateFrom} - {props.dateTo}
        </p>
      </StyledCardDate>
    );
  }
};

export default CardDate;

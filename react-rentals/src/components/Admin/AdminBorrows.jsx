import styled from "styled-components";

const StyledAdminBorrows = styled.div`
  width: ${(props) => (props.isSmall ? "100%" : "80%")};
  padding: ${(props) => (props.isSmall ? "0 " : "10%")};
  border-radius: 1.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;

  background-color: white;
  text-align: center;
  height: 32rem;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AdminBorrows = (props) => {
  return (
    <StyledAdminBorrows isSmall={props.isSmall}>
      {props.children}
    </StyledAdminBorrows>
  );
};

export default AdminBorrows;

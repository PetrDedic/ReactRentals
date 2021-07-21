import styled from "styled-components";

const StyledAdminListItem = styled.div`
  min-height: 2rem;
  height: auto;
  width: 100%;
  padding: 1rem 0;

  border-bottom: 1px grey solid;

  display: flex;
  justify-content: space-between;
`;

const AdminListItem = (props) => {
  return (
    <StyledAdminListItem>
      {props.children}
    </StyledAdminListItem>
  );
};

export default AdminListItem;

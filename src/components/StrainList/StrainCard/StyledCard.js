import styled from "styled-components";

const StyledCard = styled.div`
  & .name {
    background: #355a20;
    padding: 0.5rem;
    border: 1px solid black;
  }

  & .flavors {
    background: #93cb56;
    padding: 0.5rem;
    border: 1px solid black;
  }

  & .effects {
    background: #059033;
    padding: 0.5rem;
    border: 1px solid black;
  }

  & .desc {
    padding: 0.5rem;
  }

  color: #eaf5df;
  background: #93cb56;
  border: 5px solid black;
  margin: 1%;
  max-width: 31%;
  display: flex;
  flex-flow: column nowrap;
  & > * {
    width: 100%;
  }

  /* height: 60vh; */
`;

export default StyledCard;

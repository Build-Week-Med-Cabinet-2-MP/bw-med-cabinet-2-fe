import styled from "styled-components";

const StyledList = styled.div`
  & > h2.loading {
  }
  & > .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
  /* Visualization is under here */
`;

export default StyledList;

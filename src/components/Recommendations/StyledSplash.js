import styled from "styled-components";

const StyledSplash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  .left,
  .right {
    width: 50%;
  }
  .left {
    h1 {
    }
    .banner {
      img {
        width: 50%;
        height: auto;
        float: left;
      }
      p {
      }
    }
    .lists {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      ul {
        list-style-position: inside;
      }
    }
  }
`;

export default StyledSplash;

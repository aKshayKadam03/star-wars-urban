import styled from "styled-components";

const Wrapper = styled.div`
  /* background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat; */

  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 95%;
  max-width: 800px;
  margin: 0 auto;

  text-align: center;
  color: ${(props) => props.theme.fontSecondary};
`;

const PersonHeader = styled.div`
  font-size: 34px;
`;

const PersonBody = styled.div`
  padding: 100px;
  box-shadow: 2px 2px 16px grey;
  border-radius: 5px;
  font-size: 24px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export { Wrapper, PersonHeader, PersonBody };

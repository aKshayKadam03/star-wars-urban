import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: ${(props) => props.theme.fontPrimary};
`;

function NotFound() {
  return (
    <Wrapper>
      <h1>This is not the page you are looking for.</h1>
    </Wrapper>
  );
}

export default NotFound;

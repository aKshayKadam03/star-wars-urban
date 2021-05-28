import styled from "styled-components";

//all styled components for home

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 35px;
  img {
    width: 200px;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  border-radius: 25px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  background: #2d2f30;
  > div {
  }
`;

const SearchHead = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  border: 0;
  outline: 0;
  font-size: 16px;
  background: #2d2f30;
  color: #f2f2f2;
  flex-grow: 8;
`;

const SearchDivider = styled.div`
  height: ${(props) => (props.direction === "vertical" ? "35px" : "1px")};
  width: ${(props) => (props.direction === "vertical" ? "1px" : "95%")};
  margin: 3px auto;
  background-color: #110b0b;
`;

const SearchIcon = styled.img`
  flex: 1;
  background-color: ${(props) => props.background};
  border-radius: 50%;
  padding: 5px;
  max-width: 25px;
`;

const SearchBody = styled.div`
  min-height: 100px;
  /* display: none; */
`;

const SearchCard = styled.div`
  border: 1px solid white;
`;

export {
  Wrapper,
  Logo,
  SearchHead,
  SearchInput,
  SearchIcon,
  SearchBox,
  SearchDivider,
  SearchBody,
};

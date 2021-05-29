import styled from "styled-components";

//all styled components for home

const Wrapper = styled.div`
  width: 94%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  min-height: 600px; //stops search box from moving
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
  padding: 5px 0px;

  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundSecondary};
`;

const SearchHead = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 25px;
  padding: 0px 5px;

  display: flex;
  align-items: center;
  gap: 5px;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }
`;

const SearchInput = styled.input`
  border: 0;
  outline: 0;
  font-size: 16px;
  background: inherit;
  color: ${(props) => props.theme.fontPrimary};
  flex-grow: 8;
  text-transform: capitalize;
`;

const SearchDivider = styled.div`
  height: ${(props) => (props.direction === "vertical" ? "35px" : "1px")};
  width: ${(props) => (props.direction === "vertical" ? "1px" : "98%")};
  margin: 3px auto;
  background: ${(props) => props.theme.backgroundPrimary};
`;

const SearchIcon = styled.img`
  flex: 1;

  background: ${(props) =>
    props.background ? props.theme.backgroundTertiary : "inherit"};
  border-radius: 50%;
  padding: 5px;
  max-width: 25px;
`;

const SearchBody = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 10px;

  > div:nth-child(${(props) => props.current}) {
    background: ${(props) => props.theme.backgroundTertiary};
    color: ${(props) => props.theme.fontTertiary};
  }
`;

const SearchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme.fontPrimary};
  padding: 5px 15px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 2px;

  p {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  span {
    font-size: 14px;
    text-transform: capitalize;
    margin: 0;
  }
`;

const SearchConfirmation = styled.div`
  color: ${(props) => props.theme.fontPrimary};
  text-align: center;
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
  SearchCard,
  SearchConfirmation,
};

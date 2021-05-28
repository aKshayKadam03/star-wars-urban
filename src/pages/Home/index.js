import React from "react";
import {
  Wrapper,
  Logo,
  SearchBox,
  SearchInput,
  SearchIcon,
  SearchDivider,
  SearchHead,
  SearchBody,
} from "./components";
import logo from "./resources/star-wars-logo.png";
import cancel from "./resources/cancel.svg";
import spinner from "./resources/spinner.svg";
import search from "./resources/search.svg";

function HomePage() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Star Wars Logo" />
      </Logo>

      <SearchBox>
        {/* Search Head Start */}
        <SearchHead>
          <SearchInput placeholder="Search by name" />

          <SearchIcon
            background="inherit"
            src={cancel}
            alt="clear"
          ></SearchIcon>

          <SearchDivider direction="vertical" />

          <SearchIcon
            background="#ffeb00"
            src={search}
            alt="clear"
          ></SearchIcon>
        </SearchHead>

        <SearchDivider direction="horizontal" />

        {/* Search Body Start */}
        <SearchBody></SearchBody>
      </SearchBox>
    </Wrapper>
  );
}

export default HomePage;

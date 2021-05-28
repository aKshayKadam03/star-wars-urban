import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Logo,
  SearchBox,
  SearchInput,
  SearchIcon,
  SearchDivider,
  SearchHead,
  SearchBody,
  SearchCard,
} from "./components";
import logo from "./resources/star-wars-logo.png";
import cancel from "./resources/cancel.svg";
import spinner from "./resources/spinner.svg";
import search from "./resources/search.svg";
import FetchData from "../../hooks/fetchData";

function HomePage() {
  const [query, setQuery] = useState("");

  const { data, isLoading, isError } = FetchData(
    `https://swapi.dev/api/people/`,
    query
  );

  useEffect(() => {
    console.log(data);
  }, [query]);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Star Wars Logo" />
      </Logo>

      <SearchBox>
        {/* Search Head Start */}
        <SearchHead>
          <SearchInput
            onChange={onQueryChange}
            value={query}
            placeholder="Search by name"
          />

          <SearchIcon background={false} src={cancel} alt="cancel"></SearchIcon>

          <SearchDivider direction="vertical" />

          <SearchIcon
            background={isLoading ? false : true}
            src={isLoading ? spinner : search}
            alt="clear"
          ></SearchIcon>
        </SearchHead>

        <SearchDivider direction="horizontal" />

        {/* Search Body Start */}
        <SearchBody>
          {data?.map(({ birth_year, gender, name, url }) => (
            <SearchCard key={url}>
              <div>
                <p>{name}</p>
                <span>{birth_year}</span>
              </div>
              <div>
                <span>{gender}</span>
              </div>
            </SearchCard>
          ))}
        </SearchBody>
      </SearchBox>
    </Wrapper>
  );
}

export default HomePage;

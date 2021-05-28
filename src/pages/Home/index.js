import React, { useState, useEffect, useRef } from "react";
import useFetchPeople from "./useFetchPeople";
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
import { useHistory } from "react-router";

const initCurrentCardState = {
  name: "",
  url: "#",
  number: 0,
};

function HomePage() {
  const [query, setQuery] = useState("");
  const [currentCard, setCurrentCard] = useState(initCurrentCardState);
  const history = useHistory();

  const { data, isLoading, isError } = useFetchPeople(
    `https://swapi.dev/api/people/`,
    query
  );

  const onCardSelectionHandler = () => {
    const { url } = currentCard;
    let arr = url.split("/");
    while (!arr[arr.length - 1].trim()) {
      arr.pop();
    }
    let id = arr[arr.length - 1];
    history.push({
      pathname: `/person/${id}`,
    });
  };

  const mouseHoverHandler = (number, name, url) => {
    setCurrentCard({
      name,
      number,
      url,
    });
  };

  const mouseLeaveHandler = () => {
    setCurrentCard(initCurrentCardState);
  };

  useEffect(() => {
    // console.log(currentCard, "from useEffect");
  }, [currentCard]);

  const keyPressHandler = (e) => {
    let { name, number, url } = currentCard;
    if (e.key === "ArrowDown") {
      if (number < data.length) {
        setCurrentCard({
          number: number + 1,
          name: data[number].name,
          url: data[number].url,
        });
      } else {
        setCurrentCard({
          number: 0,
          name: query,
          url: "#",
        });
      }
    } else if (e.key === "ArrowUp") {
      if (number > 0) {
        setCurrentCard({
          number: number - 1,
          name: data[number]?.name,
          url: data[number]?.url,
        });
      } else {
        setCurrentCard({
          number: data.length,
          name: data[number]?.name,
          url: data[number]?.url,
        });
      }
    }
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper onKeyDownCapture={keyPressHandler}>
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
        <SearchBody
          onMouseLeave={mouseLeaveHandler}
          current={currentCard?.number}
        >
          {data?.map(({ birth_year, gender, name, url }, index) => (
            <SearchCard
              onClick={onCardSelectionHandler}
              onMouseEnter={() => mouseHoverHandler(index + 1, name, url)}
              key={url}
            >
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

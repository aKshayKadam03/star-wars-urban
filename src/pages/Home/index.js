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
  SearchConfirmation,
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
  const [searchBodyVisibility, setSearchBodyVisibility] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const history = useHistory();
  const userInputBackup = useRef(null);

  const { data, isLoading, isError } = useFetchPeople(
    `https://swapi.dev/api/people/`,
    query,
    userInputBackup
  );

  const onCardSelectionHandler = () => {
    const { url } = currentCard;
    let arr = url.split("/");
    while (!arr[arr?.length - 1].trim()) {
      arr.pop();
    }
    let id = arr[arr?.length - 1];
    history.push({
      pathname: `/person/${id}`,
    });
  };

  const mouseEnterHandler = (number, name, url) => {
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
    // document.activeElement === inputRef.current
    if (inputFocus) {
      setSearchBodyVisibility(true);
    } else {
      setSearchBodyVisibility(false);
    }
  }, [query]);

  useEffect(() => {
    console.log(currentCard);
  }, [currentCard]);

  const keyPressHandler = (e) => {
    let { name, number, url } = currentCard;
    switch (e.key) {
      case "ArrowDown": {
        if (number < data?.length) {
          setCurrentCard({
            number: number + 1,
            name: data[number].name,
            url: data[number].url,
          });
          setQuery(data[number].name);
        } else {
          setCurrentCard({
            number: 0,
            name: userInputBackup.current,
            url: "#",
          });
          setQuery(userInputBackup.current);
        }
        break;
      }

      case "ArrowUp": {
        if (number > 1) {
          setCurrentCard({
            number: number - 1,
            name: data[number - 2]?.name,
            url: data[number - 2]?.url,
          });
          setQuery(data[number - 2]?.name);
        } else {
          setCurrentCard({
            number: data?.length,
            name: data[data?.length]?.name,
            url: data[data?.length]?.url,
          });
          setQuery(userInputBackup.current);
        }
        break;
      }

      case "Enter" || "NumpadEnter": {
        onCardSelectionHandler();
        break;
      }

      default:
        return;
    }
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
    userInputBackup.current = e.target.value;
    setCurrentCard(initCurrentCardState);
  };

  const clearQuery = () => {
    setQuery("");
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
            onFocusCapture={() => setInputFocus(true)}
            onChange={onQueryChange}
            value={query}
            placeholder="Search by name"
          />

          {query?.length !== 0 && (
            <>
              <SearchIcon
                onClick={clearQuery}
                background={false}
                src={cancel}
                alt="cancel"
              ></SearchIcon>
              <SearchDivider direction="vertical" />
            </>
          )}

          <SearchIcon
            background={isLoading ? false : true}
            src={isLoading ? spinner : search}
            alt="spinner"
          ></SearchIcon>
        </SearchHead>

        {searchBodyVisibility && <SearchDivider direction="horizontal" />}

        {/* Search Body Start */}

        {searchBodyVisibility && (
          <SearchBody
            onMouseLeave={mouseLeaveHandler}
            current={currentCard?.number}
          >
            {isLoading ? (
              <SearchConfirmation>
                <h2>Collecting data for you...</h2>
              </SearchConfirmation>
            ) : isError ? (
              <SearchConfirmation>
                <h2>Oops something went wrong</h2>
              </SearchConfirmation>
            ) : data?.length === 0 ? (
              <SearchConfirmation>
                <h2>No data found</h2>
              </SearchConfirmation>
            ) : (
              data?.map(({ birth_year, gender, name, url }, index) => (
                <SearchCard
                  onClick={onCardSelectionHandler}
                  onMouseEnter={() => mouseEnterHandler(index + 1, name, url)}
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
              ))
            )}
          </SearchBody>
        )}
      </SearchBox>
    </Wrapper>
  );
}

export default HomePage;

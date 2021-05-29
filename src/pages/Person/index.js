import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useFetchPerson from "./useFetchPerson";
import {
  Wrapper,
  PersonHeader,
  PersonBody,
  PersonWallpaper,
  PersonInfo,
  PersonNav,
  PersonConfirmation,
} from "./components";
import back from "../../resources/back.svg";
import wallpaperOne from "../../resources/wallpaperOne.jpg";
import wallpaperTwo from "../../resources/wallpaperTwo.jpg";
import wallpaperThree from "../../resources/wallpaperThree.jpg";
import wallpaperFour from "../../resources/wallpaperFour.jpg";

import { Link } from "react-router-dom";

const wallpaperArray = [
  wallpaperOne,
  wallpaperTwo,
  wallpaperThree,
  wallpaperFour,
];

function Person() {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchPerson(
    `https://swapi.dev/api/people/${id}/`
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
  } = data;

  const randomWallpaperChooser = () => {
    return Math.floor(Math.random() * 10000) % 4;
  };

  return (
    <>
      {isLoading ? (
        <PersonConfirmation>
          <h1>Loading</h1>
        </PersonConfirmation>
      ) : isError ? (
        <PersonConfirmation>
          <h1>Something went wrong</h1>
        </PersonConfirmation>
      ) : (
        <Wrapper>
          <PersonInfo>
            <Link to="/">
              <PersonNav>
                <img src={back} alt="back"></img>
                <p>Back to home</p>
              </PersonNav>
            </Link>

            <PersonHeader>
              <h1>{name}</h1>
            </PersonHeader>
            <PersonBody>
              <div>
                <b>Birth Year</b>
                <p>{birth_year}</p>
              </div>
              <div>
                <b>Gender</b>
                <p>{gender}</p>
              </div>
              <div>
                <b>Hair Color</b>
                <p>{hair_color}</p>
              </div>
              <div>
                <b>Height</b>
                <p>{height}</p>
              </div>
              <div>
                <b>Mass</b>
                <p>{mass}</p>
              </div>
              <div>
                <b>Skin Color</b>
                <p>{skin_color}</p>
              </div>
            </PersonBody>
          </PersonInfo>
          <PersonWallpaper
            backgroundImg={wallpaperArray[randomWallpaperChooser()]}
          >
            {/* <img
          src="https://cdn.statically.io/img/wallpaperaccess.com/full/1609117.jpg"
          alt="wallpapers"
        ></img> */}
          </PersonWallpaper>
        </Wrapper>
      )}
    </>
  );
}

export default Person;

import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useFetchPerson from "./useFetchPerson";
import { Wrapper, PersonHeader, PersonBody } from "./components";
import scene from "./Resources/scene.svg";

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

  return (
    <Wrapper backgroundImage={scene}>
      <PersonHeader>
        <h1>Person Info</h1>
      </PersonHeader>
      <PersonBody>
        <div>
          <b>Name</b>
          <p>{name}</p>
        </div>
        <div>
          <b>Birth Year</b>
          <p>{birth_year}</p>
        </div>
        <div>
          <b>Eye Color</b>
          <p>{eye_color}</p>
        </div>
        <div>
          <b>Gender</b>
          <p>{gender}</p>
        </div>
        <div>
          <b>Hair Color</b>
          <p>{hair_color}</p>
        </div>
      </PersonBody>
    </Wrapper>
  );
}

export default Person;

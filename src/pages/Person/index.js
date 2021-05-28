import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useFetchPerson from "./useFetchPerson";
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
    <div className="person">
      <h1>{name}</h1>
      <h1>{birth_year}</h1>
      <h1>{eye_color}</h1>
      <h1>{gender}</h1>
      <h1>{hair_color}</h1>
    </div>
  );
}

export default Person;

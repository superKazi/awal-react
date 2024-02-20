import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDogs } from "./fetchDogs";
import { formatBreedName } from "../utils";
import { Spinner } from "../spinner/Spinner";
import { Results } from "../results/Results";
import "./search.css";

function Search() {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchDogs,
  });
  const [filter, setFilter] = useState("All");

  const flatBreeds = isSuccess
    ? Object.entries(data.message).flatMap((breed) => {
        if (!breed[1].length) {
          return {
            name: breed[0],
            randomImageUrl: `https://dog.ceo/api/breed/${breed[0]}/images/random`,
          };
        } else {
          return breed[1].map((sub) => {
            return {
              name: `${sub}-${breed[0]}`,
              randomImageUrl: `https://dog.ceo/api/breed/${breed[0]}/${sub}/images/random`,
            };
          });
        }
      })
    : [];

  if (isLoading) {
    return (
      <div className="search__loading">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <h2 className="search__error">
        Sorry there was an error, please try again later.
      </h2>
    );
  }

  return (
    <>
      <search className="search">
        <form
          className="search__form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            setFilter(formData.get("breed"));
          }}
        >
          <label htmlFor="breed">
            <span className="visually-hidden">Search for dog breeds</span>
            <input
              className="search__input"
              list="breed-list"
              id="breed"
              name="breed"
              placeholder="Dog type"
              type="text"
            ></input>
          </label>
          <datalist id="breed-list">
            <option value="All"></option>
            {flatBreeds.map((breed) => (
              <option
                key={breed.name}
                value={formatBreedName(breed.name)}
              ></option>
            ))}
          </datalist>
          <button className="search__button">Search</button>
        </form>
      </search>
      <Results
        breeds={
          filter === "All"
            ? flatBreeds
            : flatBreeds.filter(
                (breed) => formatBreedName(breed.name) === filter,
              )
        }
      />
    </>
  );
}

export  { Search };

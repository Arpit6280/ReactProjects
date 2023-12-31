import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch(
        "https://react-http-62209-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      let data = await response.json();
      console.log(data);
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    console.log(movie);
    const response = await fetch(
      "https://react-http-62209-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    fetchMoviesHandler();
  };
  return (
    <React.Fragment>
      <section>
        <MovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {!isLoading && movies.length > 0 && (
          <MoviesList movies={movies} fetchMovies={fetchMoviesHandler} />
        )}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {!isLoading && error && <p>{error} </p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

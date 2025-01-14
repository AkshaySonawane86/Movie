import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// export const getPopularMovies = () => {
//   return axios.get(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//     // https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
//   );
// };

// export const getPopularMovies = async () => {
//   const url = 'https://imdb-top-100-movies.p.rapidapi.com/'; // New API URL
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '5ed23b630amsh48125dfbd174797p1a3e69jsnab37ed84d804', // Replace with your RapidAPI key
//     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com', // API host header
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json(); // Parse the response as JSON
//   console.log("Popular Movies:", result); // Log the result to the console
//   return result; // Return the result data
// } catch (error) {
//   console.error("Error fetching popular movies:", error);
// }

// };


export const getPopularMovies = () => {
    return axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        console.log("Popular Movies:", response.data); // Log the response
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  };

export const getTopRatedMovies = () => {
  return axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getUpcomingMovies = () => {
  return axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getMovieDetails = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieCast = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const searchMovies = (query) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
};

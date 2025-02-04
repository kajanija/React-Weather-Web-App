import { createGlobalState } from "react-hooks-global-state";
import axios from "axios";
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const API_KEY = "a831465212e317c17bdace36313329d4";

const icons = {
  "01d": faSun,
  "02d": faCloudSun,
  "03d": faCloud,
  "04d": faCloud,
  "09d": faCloudRain,
  "10d": faCloudSunRain,
  "11d": faCloudBolt,
  "13d": faSnowflake,
  "50d": faSmog,
};

// Definisanje početnog stanja
const initialState = {
  cities: JSON.parse(localStorage.getItem("cities")) ?? ["Sarajevo"],
  activeCity: !isNaN(parseInt(localStorage.getItem("activeCity")))
    ? parseInt(localStorage.getItem("activeCity"))
    : 0,
  weather: [],
  hourly: [],
  all: [],
};

const { useGlobalState } = createGlobalState(initialState);

const fetchCitiesData = async (search) => {
  try {
    const responses = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: search.replace(/City Of /i, "").trim(),
          limit: 5,
          appid: API_KEY,
        },
      }
    );

    // Mapiramo odgovore i vraćamo samo relevantne podatke
    return responses.data;
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka:", error);
    return []; // Vraćamo prazan niz ako se desi greška
  }
};

const fetchAllCitiesData = async (cities) => {
  try {
    // Kreiramo niz sa asinhronim pozivima
    const promises = cities.map(async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: { q: city, units: "metric", appid: API_KEY },
        }
      );
      return response.data; // Vraćamo podatke direktno
    });

    // Čekamo da svi API pozivi završe i vraćamo podatke
    return await Promise.all(promises);
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka:", error);
    return []; // Vraćamo prazan niz u slučaju greške
  }
};

const fetchWeatherData = async (city) => {
  try {
    const responses = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: { q: city, units: "metric", appid: API_KEY },
      }
    );

    // Mapiramo odgovore i vraćamo samo relevantne podatke
    return responses.data;
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka:", error);
    return []; // Vraćamo prazan niz ako se desi greška
  }
};

const fetchHourlyData = async (city) => {
  try {
    const responses = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: { q: city, units: "metric", appid: API_KEY },
      }
    );

    // Mapiramo odgovore i vraćamo samo relevantne podatke
    return responses.data;
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka:", error);
    return []; // Vraćamo prazan niz ako se desi greška
  }
};

export {
  useGlobalState,
  fetchWeatherData,
  fetchHourlyData,
  fetchAllCitiesData,
  fetchCitiesData,
};

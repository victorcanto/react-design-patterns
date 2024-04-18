import api from "../api";

const URLS = {
  getMeals: "search.php",
};

export const searchMeals = async (query: string, config: object) => {
  return api
    .get(URLS.getMeals, {
      baseURL: "https://www.themealdb.com/api/json/v1/1/",
      params: { s: query },
      ...config,
    })
    .then((response) => response.data.meals);
};

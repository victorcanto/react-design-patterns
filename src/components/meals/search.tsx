import React, { useMemo, useState } from "react";
import { debounce } from "../../helpers/debounce";
import { Meal } from "./types/meal";
import { searchMeals } from "../../api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);

  const initSearchApiRequest = useMemo(() => {
    return debounce(async (q: string) => {
      setMeals(await searchMeals(q));
    }, 500);
  }, []);

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    initSearchApiRequest(q);
  };

  return (
    <div>
      <form>
        <label htmlFor="query">Search meals</label>
        <input id="query" type="text" value={query} onChange={onChangeQuery} />
      </form>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;

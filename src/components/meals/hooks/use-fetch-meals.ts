/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { didAbort } from "../../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchMeals } from "../../../api/meals/meals-api";
import { Meal } from "../types/meal";

export const useFetchMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const abortRef = useRef<any>({ abort: () => {} });

  const handleQuoteError = (error: any) => {
    if (didAbort(error)) {
      toast.error("Request aborted");
    } else {
      toast.error("Oh no, something went wrong!");
    }
  };

  const fetchMeals = async (query: string) => {
    try {
      abortRef.current.abort?.();

      const newMeals = await searchMeals(query, {
        abort: (abort: CallableFunction) => (abortRef.current.abort = abort),
      });
      setMeals(newMeals);
    } catch (error) {
      handleQuoteError(error);
    }
  };

  return {
    meals,
    fetchMeals,
  };
};

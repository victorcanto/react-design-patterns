import { useCallback, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import IngredientsList from "./ingredients-list";
import AddIngredient from "./add-ingredient";
import { Ingredient } from "./types/ingredient";

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > h2 {
  }
`;

const StyledHeading2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledSpaceY4 = styled.div`
  margin-top: 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;

const initialIngredients = [
  {
    id: nanoid(),
    name: "500g Chicken Breasts",
  },
  {
    id: nanoid(),
    name: "300 ml milk",
  },
  {
    id: nanoid(),
    name: "1 tbsp salt",
  },
];

interface IngredientsProps {
  ingredientsInforHelper: React.ReactNode;
}

const Ingredients = ({ ingredientsInforHelper }: IngredientsProps) => {
  console.log("Ingredient rendered");
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(initialIngredients);

  const addIngredient = (ingredient: string) => {
    setIngredients((ingredients) => [
      ...ingredients,
      {
        name: ingredient,
        id: nanoid(),
      },
    ]);
  };

  const deleteIngredient = useCallback((id: string) => {
    setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
  }, []);

  const ingredientsHeaderText = useMemo(() => {
    console.log("ingredientsHeaderText called");
    return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
  }, [ingredients.length]);

  return (
    <StyledContainer>
      <div>
        {ingredientsHeaderText}
        {ingredientsInforHelper}
      </div>

      <StyledSpaceY4>
        <IngredientsList
          ingredients={ingredients}
          deleteIngredient={deleteIngredient}
        />

        <AddIngredient addIngredient={addIngredient} />
      </StyledSpaceY4>
    </StyledContainer>
  );
};

export default Ingredients;

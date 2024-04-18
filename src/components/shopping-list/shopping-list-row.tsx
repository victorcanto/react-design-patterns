/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Item } from "./types/shopping-list";
import { useEditShoppingItem } from "./hooks/use-edit-shopping-item";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputContainer = styled.div``;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledText = styled.div``;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledButton = styled.button`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface ShoppingListRowProps {
  item: Item;
  deleteItem: (payload: any) => void;
  updateItem: (payload: any) => void;
  index: number;
}

const ShoppingListRow = (props: ShoppingListRowProps) => {
  const { item, deleteItem, updateItem, index } = props;
  const { name, isEditing, cancelEdit, setName, onSaveItem, onEditItem } =
    useEditShoppingItem({ item, updateItem, index });
  return (
    <StyledContainer>
      <StyledInputContainer>
        {isEditing ? (
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <StyledText>{item.name}</StyledText>
        )}
      </StyledInputContainer>
      <StyledButtonContainer>
        {isEditing ? (
          <>
            <StyledButton onClick={onSaveItem}>Save</StyledButton>
            <StyledButton onClick={cancelEdit}>Cancel</StyledButton>
          </>
        ) : (
          <>
            <StyledButton onClick={onEditItem}>Edit</StyledButton>
            <StyledButton onClick={() => deleteItem({ index })}>
              Delete
            </StyledButton>
          </>
        )}
      </StyledButtonContainer>
    </StyledContainer>
  );
};
export default ShoppingListRow;

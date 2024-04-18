/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Item } from "../types/shopping-list";

interface UseEditShoppingItemProps {
  item: Item;
  updateItem: (payload: any) => void;
  index: number;
}

export const useEditShoppingItem = (props: UseEditShoppingItemProps) => {
  const { item, updateItem, index } = props;
  const [name, setName] = useState(item.name);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(props.item.name);
  }, [props.item]);
  const onSaveItem = () => {
    updateItem({
      index,
      item: {
        ...item,
        name,
      },
    });
    setIsEditing(false);
  };
  const onEditItem = () => {
    setIsEditing(true);
  };
  const cancelEdit = () => {
    setIsEditing(false);
    setName(props.item.name);
  };
  return {
    name,
    isEditing,
    cancelEdit,
    setName,
    onSaveItem,
    onEditItem,
  };
};

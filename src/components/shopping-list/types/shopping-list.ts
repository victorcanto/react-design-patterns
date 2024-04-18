/* eslint-disable @typescript-eslint/no-explicit-any */
export interface State {
  newShoppingItemName: string;
  items: Item[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Item {
  index?: number;
  id?: string;
  name?: string;
}

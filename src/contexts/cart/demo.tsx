import {
  CartProvider,
  useDispatchContext,
  useStateContext,
} from "./cart-context";

const Buttons = () => {
  const dispatch = useDispatchContext();
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </button>
    </div>
  );
};

const Display = () => {
  const { count } = useStateContext();
  return <div className="display">{count}</div>;
};

const CartContextDemo = () => {
  return (
    <CartProvider>
      <Buttons />
      <Display />
    </CartProvider>
  );
};

export default CartContextDemo;

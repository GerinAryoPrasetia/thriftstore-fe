export const cartReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.payload;
    case "INITIALIZE_USER":
      return action.payload;
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const userReducer = (state, action) => {
  switch (action.tyoe) {
    case "INITIALIZE_USER":
      return action.payload;
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    default:
      return state;
  }
};

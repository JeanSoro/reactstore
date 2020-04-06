import { CartActionTypes } from './actions'

export default (state, action) => {
  switch (action.type) {
    case CartActionTypes.REMOVE:
      return state.filter(item => item.id !== action.payload);

    case CartActionTypes.INCREASE:
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      });

    case CartActionTypes.DECREASE:
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      });

    case CartActionTypes.CLEAR_CART:
      return [];

    case CartActionTypes.ADD_TO_CART:
      const { id, image, title, price } = action.payload;
      let product = { id, image, title, price, amount: 1 };

      return [
        ...state,
        product
      ]




    default:
      return state
  }
}

const initialState = {
  isAdded: false,
  product: {},
  products: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        isAdded: action.isAdded,
        product: action.product
      };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.products
      };

    default:
      return state;
  }
}

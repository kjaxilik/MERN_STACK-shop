const initialState = {
  product: {},
  products: {},
  currentProduct: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        product: action.product
      };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.products
      };
    case 'CURRENT_PRODUCT':
      return {
        ...state,
        product: action.product
      };

    default:
      return state;
  }
}

const initialState = {
  products: {},
  newProduct: {},
  currentProduct: {},
  userProducts: {},
  page: 1,
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        newProduct: action.product
      };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.products,
        count: action.count
      };
    case 'CURRENT_PRODUCT':
      return {
        ...state,
        currentProduct: action.product
      };
    case 'USER_PRODUCTS':
      return {
        ...state,
        userProducts: action.products
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page
      };

    default:
      return state;
  }
}

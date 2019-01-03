const initialState = {
  isAdded: false,
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        isAdded: action.isAdded
      };

    default:
      return state;
  }
}

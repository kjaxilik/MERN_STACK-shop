const initialState = {
  categories: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      };

    default:
      return state;
  }
}

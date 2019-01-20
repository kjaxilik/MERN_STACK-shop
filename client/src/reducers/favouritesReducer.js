const initialState = {
  favouriteProducts: {},
  page: 1,
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return {
        ...state,
        favouriteProducts: action.products,
        count: action.count
      };

    default:
      return state;
  }
}

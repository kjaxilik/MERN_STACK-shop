const initialState = {
  favoriteProducts: {},
  page: 1,
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return {
        ...state,
        favoriteProducts: action.products,
        count: action.count
      };

    default:
      return state;
  }
}

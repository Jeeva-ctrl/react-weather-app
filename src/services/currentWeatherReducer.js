const initialState = {
  current: null,
  isSearched : false
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_CURRENT":
      return { ...state, current: action.payload,isSearched : true };

    default:
      return state;
  }
}

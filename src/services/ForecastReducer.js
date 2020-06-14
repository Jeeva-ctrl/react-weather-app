const initialState = {
    forecast: null,
  };
  export default function (state = initialState, action) {
    switch (action.type) {
      case "FETCH_FORECAST":
        return { ...state, forecast: action.payload };
  
      default:
        return state;
    }
  }
  
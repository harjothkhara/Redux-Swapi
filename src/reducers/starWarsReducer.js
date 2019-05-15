import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE }
 from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
    console.log('reducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
      case FETCH_CHARACTER:
        return {
          ...state,
          fetching: true,
        }
        case FETCH_CHARACTER_SUCCESS:
          return {
            ...state,
            fetching: false,
            characters: action.payload
          }
          case FETCH_CHARACTER_FAILURE:
            return {
              ...state,
              fetching: false,
              error: action.payload
            }

    default:
      return state;
  }
};

export default charsReducer;

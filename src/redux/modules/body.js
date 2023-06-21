const ADD_BODY = "ADD_BODY";
const EMPTY_BODY = "EMPTY_BODY";

export const addBody = (payload) => {
  return {
    type: ADD_BODY,
    payload,
  };
};

export const emptyBody = () => {
  return {
    type: EMPTY_BODY,
  };
};

const initialState = {
  body: "",
};

const body = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BODY:
      return {
        body: action.payload,
      };
    case EMPTY_BODY:
      return {
        body: "",
      };
    default:
      return state;
  }
};

export default body;

const ADD_TITLE = "ADD_TITLE";
const EMPTY_TITLE = "EMPTY_TITLE";

export const addTitle = (payload) => {
  return {
    type: ADD_TITLE,
    payload: payload,
  };
};

export const emptyTitle = () => {
  return {
    type: EMPTY_TITLE,
  };
};

const initialState = {
  title: "",
};

const title = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        title: action.payload,
      };
    case EMPTY_TITLE:
      return {
        title: "",
      };
    default:
      return state;
  }
};

export default title;

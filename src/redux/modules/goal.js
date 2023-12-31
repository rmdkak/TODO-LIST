const NEW_GOAL = "NEW_GOAL";
const DELETE_GOAL = "DELETE_GOAL";
const CHANGE_BOOLEAN_GOAL = "CHANGE_BOOLEAN_GOAL";

export const newGoal = (payload) => {
  return {
    type: NEW_GOAL,
    payload,
  };
};

export const deleteGoal = (payload) => {
  return {
    type: DELETE_GOAL,
    payload,
  };
};

export const ChangeBooleanGoal = (payload) => {
  return {
    type: CHANGE_BOOLEAN_GOAL,
    payload,
  };
};

const initialState = JSON.parse(localStorage.getItem("myGoal")) ?? [];

const goal = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GOAL:
      return [...state, action.payload];
    case DELETE_GOAL:
      return state.filter((obj) => obj.id !== action.payload);
    case CHANGE_BOOLEAN_GOAL:
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, isDone: !obj.isDone };
        }
        return { ...obj };
      });
    default:
      return state;
  }
};

export default goal;

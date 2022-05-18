export const updateFridge = (fridges) => {
  return {
    type: "updateFridge",
    payload: fridges,
  };
};

const reducer = (
  state = {
    fridges: [],
    user: null,
  },
  action
) => {
  if (action.type === "updateFridge") {
    return { ...state, fridges: action.payload };
  }
  return state;
};

export default reducer;

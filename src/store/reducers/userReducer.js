export const updateUserData = (user) => ({
  type: "updateUserData",
  payload: user,
});

const reducer = (
  state = {
    fridges: [],
    user: null,
  },
  action
) => {
  if (action.type === "updateUserData") {
    return { ...state, user: action.payload };
  }
  return state;
};

export default reducer;

const selectUser = state => state.user;

export const selectCurrentUser = state => {
  const user = selectUser(state);
  return user.currentUser;
}
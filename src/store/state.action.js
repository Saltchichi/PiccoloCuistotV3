export const userLoggedIn = (data) => {
  const user = {};
  user.displayName = data.user.displayName;
  user.email = data.user.email;
  user.profilePic = data.user.photoURL;

  return { type: "userLoggedIn", user }
}
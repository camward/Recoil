import { atom, selector } from "recoil";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${get(currentUserIDState)}`
    );
    const user = await response.json();
    return user.name;
  },
});

export { currentUserIDState, currentUserNameQuery };

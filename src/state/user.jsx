import { atom, selector, selectorFamily } from "recoil";

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
    if (response.error) {
      throw response.error;
    }
    const user = await response.json();
    return user.name;
  },
});

const userNameQuery = selectorFamily({
  key: "UserName",
  get: (userID) => async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    if (response.error) {
      throw response.error;
    }
    const user = await response.json();
    return user.name;
  },
});

export { currentUserIDState, currentUserNameQuery, userNameQuery };

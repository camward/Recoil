import React from "react";
import { useRecoilValue } from "recoil";
import { userNameQuery } from "../../state/user";

const User = ({ userID }) => {
  const userName = useRecoilValue(userNameQuery(userID));
  return <p>{userName}</p>;
};

export default User;

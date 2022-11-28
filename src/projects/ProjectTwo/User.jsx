import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { userNameQuery } from "../../state/user";

const User = ({ userID }) => {
  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));

  switch (userNameLoadable.state) {
    case "hasValue":
      return <p>{userNameLoadable.contents}</p>;
    case "loading":
      return <div>Загрузка...</div>;
    case "hasError":
      throw userNameLoadable.contents;
  }
};

export default User;

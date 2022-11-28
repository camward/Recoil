import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../../state/user";
import User from "./User";

const ProjectTwo = () => {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <>
      <h2>Async</h2>
      <p>{userName}</p>
      <br />
      <User userID={2} />
      <User userID={3} />
      <User userID={4} />
    </>
  );
};

export default ProjectTwo;

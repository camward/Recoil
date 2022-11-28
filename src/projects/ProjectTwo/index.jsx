import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../../state/user";

const ProjectTwo = () => {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <>
      <h2>Async</h2>
      <p>{userName}</p>
    </>
  );
};

export default ProjectTwo;

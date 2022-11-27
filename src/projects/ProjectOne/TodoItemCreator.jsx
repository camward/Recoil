import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../state/todo";
import { Box, Button, TextField } from "@mui/material";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Введите значение"
        variant="outlined"
        id="outlined-size-small"
        size="small"
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <Button onClick={addItem} variant="contained" size="medium">
        Добавить
      </Button>
    </Box>
  );
}

export default TodoItemCreator;

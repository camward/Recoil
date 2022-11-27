import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../state/todo";
import { Box, Button, Checkbox, TextField } from "@mui/material";

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Значение"
        variant="outlined"
        id="outlined-size-small"
        size="small"
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <Checkbox checked={item.isComplete} onChange={toggleItemCompletion} />
      <Button
        onClick={deleteItem}
        variant="contained"
        color="error"
        size="medium"
      >
        Удалить
      </Button>
    </Box>
  );
};

export default TodoItem;

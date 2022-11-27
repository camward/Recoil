import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../state/todo";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
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
      <FormControl>
        <InputLabel id="demo-simple-select-label">Фильтр</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Выберите значение"
          onChange={updateFilter}
          size="small"
        >
          <MenuItem value="Show All">Все</MenuItem>
          <MenuItem value="Show Completed">Выполненные</MenuItem>
          <MenuItem value="Show Uncompleted">В работе</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default TodoListFilters;

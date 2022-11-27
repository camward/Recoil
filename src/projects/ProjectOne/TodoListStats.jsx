import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../state/todo";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
    allText,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <List>
        <ListItem disablePadding>
          <ListItemText primary={`Всего: ${totalNum}`} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Выполненных: ${totalCompletedNum}`} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`В работе: ${totalUncompletedNum}`} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={`Процент выполнения: ${formattedPercentCompleted}`}
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Текст: ${allText}`} />
        </ListItem>
      </List>
    </Box>
  );
};

export default TodoListStats;

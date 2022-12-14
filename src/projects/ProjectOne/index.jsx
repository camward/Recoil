import React from "react";
import { useRecoilValue } from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../../state/todo";

const ProjectOne = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <h3>Sync</h3>
      <TodoListStats />
      <div style={{ display: "flex", gap: "10px" }}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default ProjectOne;

import styled from "styled-components";
import { FilterValuesType } from "../App";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react"

type TaskPropsType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoListPropsType = {
  title: string;
  tasks: TaskPropsType[];
  removeTask: (taskId: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  deleteAllTasks: () => void;
  addTask: (title: string) => void;
  children?: React.ReactNode;
};

export const TodoList: React.FC<TodoListPropsType> = ({ children, ...props }) => {
  const onAllClickHandler = () => props.changeFilter("all");
  const onActiveClickHandler = () => props.changeFilter("active");
  const onCompletedClickHandler = () => props.changeFilter("completed");
  // const onTreeClickHandler = () => props.changeFilter("three");

  let [title, setTitle] = useState("");
  let onChangeRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const addTask = () => {
    props.addTask(title);
    setTitle("");
    if (onChangeRef.current) {
      props.addTask(onChangeRef.current.value);
      onChangeRef.current.value = "";
    }
  };

  function onPressKeyHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      addTask();
    }
  }

const [listRef] = useAutoAnimate<HTMLUListElement>()

  return (
    <StyledTodoList>
      <h3>{props.title}</h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          ref={onChangeRef}
          onKeyDown={onPressKeyHandler}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul ref={listRef}>
        {props.tasks.map((t) => {
          const onClickHandler = () => props.removeTask(t.id);
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
        <button onClick={() => props.deleteAllTasks()}>Delete All</button>
      </div>
      {/* <button onClick={onTreeClickHandler}>
        Give me the first three tasks
      </button> */}
      {children}
    </StyledTodoList>
  );
};

const StyledTodoList = styled.section`
  display: flex;
  flex-direction: column;
`;

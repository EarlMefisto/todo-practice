import styled from "styled-components";
import { FilterValuesType } from "../App";

type TaskPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodoListPropsType = {
  title: string;
  tasks: TaskPropsType[];
  removeTask: (taskId: number) => void;
  changeFilter: (value: FilterValuesType) => void;
  deleteAllTasks: () => void;
};

export const TodoList = (props: TodoListPropsType) => {
  return (
    <StyledTodoList>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            props.changeFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter("completed");
          }}
        >
          Completed
        </button>
        <button onClick={() => props.deleteAllTasks()}>Delete All</button>
      </div>
      <button
        onClick={() => {
          props.changeFilter("three");
        }}
      >
        Give me the first three tasks
      </button>
    </StyledTodoList>
  );
};

const StyledTodoList = styled.section`
  display: flex;
  flex-direction: column;
`;

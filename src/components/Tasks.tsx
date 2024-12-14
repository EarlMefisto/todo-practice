import styled from "styled-components";
import { DataPropsType } from "../App";

export type TasksPropsType = {
  data: DataPropsType;
};

export const Tasks = (props: TasksPropsType) => {
  return (
    <StyledTasks>
      <h1> {props.data.title} </h1>
      <ul>
        {props.data.tasks.map((t) => {
          return (
            <li>
              <span>{t.taskId}</span>
              <span>{t.title}</span>
              <span>{t.isDone}</span>
            </li>
          );
        })}
      </ul>

      <ul>
        {props.data.students.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </StyledTasks>
  );
};

const StyledTasks = styled.section`
  display: flex;
  flex-direction: column;
`
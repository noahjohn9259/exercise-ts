import * as React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { ColumnType, TaskType } from "../reducers/types";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.3s ease;
  background-color: ${(props: any) =>
    props.isDraggingOver ? "lightblue" : "white"};
  flex-grow: 1;
  min-height: 100px; 
`;

interface IPropsColumn {
  tasks: TaskType[] | undefined;
  column: ColumnType;
}

class Column extends React.PureComponent<IPropsColumn> {
  public render() {
    console.log(this.props.tasks);
    const { title } = this.props.column;
    //check first if task data is already fetched
    if (this.props.tasks && this.props.tasks.length < 1) {
      return (
        <Container>
          <Title>{title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided: any, snapshot: any) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      );
    } else {
      return (
        <Container>
          <Title>{title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided: any, snapshot: any) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks &&
                  this.props.tasks.map((task, index) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={index}
                      title={title}
                    />
                  ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      );
    }
  }
}

export default Column;

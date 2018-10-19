import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import EditableTitle from "./EditableDiv";
import { editTaskTitle } from "../actions/taskActions";
import { IApplicationState } from "../reducers/index";
import { TaskType, AccountType } from "../reducers/types";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props: any) =>
    props.isDragging ? "gainsboro" : "white"};
`;

interface PropsFromDispatch {
  editTaskTitle: any;
}
interface PropsFromMap {
  accounts: AccountType[];
}
interface IOwnProps {
  task: TaskType;
  index: number;
  title: string;
}

type IState = {};

type AllProps = IOwnProps & PropsFromMap & PropsFromDispatch;

class Task extends React.Component<AllProps, IState> {
  handleBlur: React.ReactEventHandler<HTMLInputElement> = ({
    target
  }): void => {
    //get content via target.innerHTML and update app state accordingly
    const taskObj: TaskType = this.props.task;
    const newTitle = target.innerHTML;
    this.props.editTaskTitle(newTitle, taskObj);
  };

  render() {
    const { accounts, task } = this.props;
    const matchingAccount = accounts.filter(
      account => account.id === task.accountId
    )[0];

    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            Title:{" "}
            <EditableTitle handleBlur={this.handleBlur}>
              {task.title}
            </EditableTitle>
            <hr />
            <div>
              Assignee:
              {!matchingAccount
                ? ""
                : " " +
                  matchingAccount.firstname +
                  " " +
                  matchingAccount.lastname}
            </div>
            <hr />
            <div>Status: {this.props.title} </div>
          </Container>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = {
  editTaskTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);

import * as React from "react";
import { connect } from "react-redux";
import {
  changeInSameColumnAction,
  changeColumnAction
} from "../actions/columnActions";
import { fetchTasks } from "../actions/taskActions";
import { fetchAccounts } from "../actions/fetchAccounts";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import styled from "styled-components";
import "reactstrap";
import Modal from "./Modal";
import { IApplicationState } from "../reducers/index";

import {
  ColumnReducerState,
  ColumnOrderReducerState,
  AccountsReducerState,
  TaskReducerState
} from "../reducers/types";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

// ==============^^TODO^^ =================

interface PropsFromMap {
  columns: ColumnReducerState;
  tasks: TaskReducerState;
  columnOrder: ColumnOrderReducerState;
  accounts: AccountsReducerState;
}

interface PropsFromDispatch {
  fetchTasks: typeof fetchTasks;
  fetchAccounts: typeof fetchAccounts;
  changeInSameColumnAction: typeof changeInSameColumnAction;
  changeColumnAction: typeof changeColumnAction;
}

type AllProps = PropsFromMap & PropsFromDispatch;

interface IStateApp {
  columnOrder: any;
  columns: any;
  tasks: any;
}

class App extends React.PureComponent<AllProps, IStateApp> {
  static getDerivedStateFromProps(props: AllProps, state: IStateApp) {
    if (props.columns !== state.columns) {
      return {
        columns: props.columns
      };
    }
    if (props.tasks !== state.tasks) {
      return {
        tasks: props.tasks
      };
    }
    return null;
  }
  constructor(props: AllProps) {
    super(props);
    this.state = {
      columnOrder: props.columnOrder || [],
      columns: props.columns || {},
      tasks: props.tasks || []
    };
  }

  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchAccounts();
  }

  onDragStart = () => {
    document.body.style.color = "Navy";
    document.body.style.transition = "background-color 0.25s ease";
  };

  onDragUpdate = (update: any) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(50, 100, 150, ${opacity})`;
  };

  onDragEnd = (result: any) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "white";
    // re-ordering logic is here
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // source column
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // if start column and finish column is the same
    if (start === finish) {
      const newTaskIds: string[] = Array.from(start.tasksIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      this.props.changeInSameColumnAction(newTaskIds, start.id);
      return;
    }

    // Moving to another column logic

    // first remove the draggable from tasksIds array
    const startTaskIds = Array.from(start.tasksIds);
    startTaskIds.splice(source.index, 1);

    // Modify source tasksIds Array
    const newStart = {
      ...start,
      tasksIds: startTaskIds
    };

    // re arrange destination column array order
    const finishTaskIds = Array.from(finish.tasksIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    // Modify destination tasksIds Array
    const newFinish = {
      ...finish,
      tasksIds: finishTaskIds
    };

    this.props.changeColumnAction(newStart, newFinish);
  };

  public render() {
    if (
      Object.keys(this.props.tasks).length === 0 ||
      Object.keys(this.props.columns).length === 0
    ) {
      return null;
    }
    return (
      <div>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
        >
          <Container>
            {this.state.columnOrder.map((columnId: string) => {
              const column = this.state.columns[columnId];
              const tasks =
                column &&
                column.tasksIds.map(
                  (taskId: string) => this.state.tasks[taskId]
                );
              // tasks - array of tasks objects from state
              return (
                <Column
                  key={column ? column.id : columnId}
                  column={column || { id: columnId }}
                  tasks={tasks || []}
                />
              );
            })}
          </Container>
        </DragDropContext>
        {this.props.accounts && <Modal buttonLabel={"Launch Form"} />}
      </div>
    );
  }
  handleSubmit = () => {
    // TODO
  };
}

// mapStateToProps entire state here
const mapStateToProps = (state: IApplicationState) => {
  return {
    accounts: state.accounts,
    columnOrder: state.columnOrder,
    tasks: state.tasks,
    columns: state.columns
  };
};

const mapDispatchToProps = {
  changeInSameColumnAction,
  changeColumnAction,
  fetchTasks,
  fetchAccounts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export interface TaskType {
  id: string;
  title: string;
  accountId: string;
}

export interface TaskReducerState {
  readonly [index: string]: TaskType;
}
//-------
export interface ColumnType {
  id: string;
  title: string;
  tasksIds: string[];
}

export interface ColumnReducerState {
  readonly [index: string]: ColumnType;
}
//-----
export interface AccountType {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
}
export type AccountsReducerState = AccountType[];

//----------------

export type ColumnOrderReducerState = string[];

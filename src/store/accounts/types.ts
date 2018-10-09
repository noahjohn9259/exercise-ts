export interface ISection {
  id: string;
  username: string;
}

export const enum SectionsActionTypes {
  FETCH_REQUEST = "@@sections/FETCH_REQUEST",
  FETCH_SUCCESS = "@@sections/FETCH_SUCCESS",
  FETCH_ERROR = "@@sections/FETCH_ERROR",
  SELECT_SECTION = "@@sections/SELECT_SECTION",
  SELECTED = "@@sections/SELECTED",
  CLEAR_SELECTED = "@@sections/CLEAR_SELECTED"
}

export interface ISectionState {
  readonly loading: boolean;
  readonly data: ISection[];
  readonly selected?: ISection;
  readonly errors?: string;
}

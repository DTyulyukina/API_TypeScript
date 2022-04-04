import {Dispatch} from "react";
import {AnyAction} from "redux";

export enum EAsyncFilterActionStatus {
  SET_FILTER = "SET_FILTER",
}

export function seIMoviesFilter(filter: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: EAsyncFilterActionStatus.SET_FILTER,
      filter,
    });
  };
}

export type TActionFilter = typeof seIMoviesFilter;

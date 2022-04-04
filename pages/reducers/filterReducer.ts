import {TParams} from "types";
import {EAsyncFilterActionStatus} from "../actions";

const initialState = {
  filter: "ALL",
  sortBy: "release date",
  sortOrder: "desc",
  search: "",
};

type setFilter = {
  type: "SET_FILTER";
  filter: TParams;
};

type TActionFilter = setFilter;

function reducer(state = initialState, action: TActionFilter) {
  switch (action.type) {
    case EAsyncFilterActionStatus.SET_FILTER:
      return {
        ...state,
        filter: action.filter || initialState.filter,
      };

    default:
      return state;
  }
}

export default reducer;

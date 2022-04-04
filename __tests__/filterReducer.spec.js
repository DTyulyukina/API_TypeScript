import reducer from "../reducers/filterReducer";

import {EAsyncFilterActionStatus} from "../actions/filterActions";

describe("Filter reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      filter: "ALL",
      sortBy: "release date",
      sortOrder: "desc",
      search: "",
    });
  });

  test("should return the add filter state", () => {
    const prevState = {};

    const filter = {
      filter: "DOCUMENTARY",
      sortBy: "release date",
      sortOrder: "desc",
      search: "",
    };

    const action = {
      type: EAsyncFilterActionStatus.SET_FILTER,
      filter,
    };

    const data = reducer(prevState, action);
    expect(data).toEqual({filter});
  });
});

import {EAsyncFilterActionStatus, seIMoviesFilter} from "../actions/filterActions";

describe("Filter action", () => {
  test("should return before set movies filter", async () => {
    const filter = {
      filter: "DOCUMENTARY",
      sortBy: "release date",
      sortOrder: "desc",
      search: "",
    };

    const expectedAction = {filter, type: EAsyncFilterActionStatus.SET_FILTER};

    const dispatchMock = jest.fn();

    await seIMoviesFilter(filter)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });
});

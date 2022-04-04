import React from "react";
import {Provider} from "react-redux";

import {store, TRootState, TAppDispatch} from "./store";
import {getMovie} from "./actions";

// @ts-ignore
import AppContainer from "./App.tsx";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const stateStart = {
  sortBy: "release date",
  sortOrder: "desc",
  filter: "ALL",
  searchMovie: "",
};

(store.dispatch as ThunkDispatch<TRootState, TAppDispatch, AnyAction>)(
  getMovie(stateStart)
);

export default function IndexComponent() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

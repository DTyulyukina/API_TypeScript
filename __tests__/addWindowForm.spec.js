import React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

// @ts-ignore
import {
  AddWindowForm,
  mapStateToProps,
  mapDispatchToProps,
} from "../components/windowMovie/addWindowForm.tsx";

import {connect} from "react-redux";
// @ts-ignore
jest.mock("../actions/movieActions.ts");

describe("Add window form", () => {
  test("find elements in Formik form", () => {
    render(<AddWindowForm />);

    expect(screen.getByPlaceholderText("Title here")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Release Date here")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Movie URL here")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Select Genre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Overview here")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Runtime here")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("renders Formik form with add value in elements form", async () => {
    render(<AddWindowForm />);

    fireEvent.change(screen.getByPlaceholderText("Title here"), {
      target: {value: "Movie"},
    });

    fireEvent.change(screen.getByPlaceholderText("Release Date here"), {
      target: {value: "2021-04-09"},
    });

    fireEvent.change(screen.getByPlaceholderText("Movie URL here"), {
      target: {value: "http:\\"},
    });

    fireEvent.change(screen.getByDisplayValue("Select Genre"), {
      target: {value: "Crime"},
    });

    fireEvent.change(screen.getByPlaceholderText("Overview here"), {
      target: {value: "Overview movie"},
    });

    fireEvent.change(screen.getByPlaceholderText("Runtime here"), {
      target: {value: "220"},
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue("Movie")).toBeInTheDocument();
      expect(screen.getByDisplayValue("2021-04-09")).toBeInTheDocument();
      expect(screen.getByDisplayValue("http:\\")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Crime")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Overview movie")).toBeInTheDocument();
      expect(screen.getByDisplayValue("220")).toBeInTheDocument();
    });
  });

  test("select Options", async () => {
    render(<AddWindowForm />);

    await waitFor(() => {
      userEvent.selectOptions(screen.getByDisplayValue("Select Genre"), "Crime");
    });

    expect(screen.queryByText("Select Genre").selected).toBe(false);
    expect(screen.queryByText("Documentary").selected).toBe(false);
    expect(screen.queryByText("Comedy").selected).toBe(false);
    expect(screen.queryByText("Horror").selected).toBe(false);
    expect(screen.getByText("Crime").selected).toBe(true);
  });

  test("test initialState in mapStateToProps", () => {
    const initialState = {
      filter: {
        filter: "ALL",
        sortBy: "release date",
        sortOrder: "desc",
        search: "",
      },
      movies: [],
    };

    expect(mapStateToProps(initialState)).toHaveProperty("filter");
    expect(mapStateToProps(initialState)).toHaveProperty("movies");
  });

  test("test mapDispatchToProps", async () => {
    const dispatchMock = jest.fn();

    let result = mapDispatchToProps(dispatchMock);

    expect(result.addNewMovie).toBeDefined();
    expect(result.editMovie).toBeDefined();
  });

  test("test component Container", () => {
    const mapStateToPropsMock = jest.fn();
    const mapDispatchToPropsMock = jest.fn();

    const container = connect(mapStateToPropsMock, mapDispatchToPropsMock)(AddWindowForm);

    expect(container).toMatchSnapshot();
  });
});

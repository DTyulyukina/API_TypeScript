import React, {Dispatch} from "react";

import {connect, ConnectedProps} from "react-redux";

import {Formik, Form, Field} from "formik";
import * as Yup from "yup";

import {addMovie, editMovie} from "../../actions";
import {TRootState} from "../../store";

// @ts-ignore
import DateSelect from "../coreComponents/coreForm/dateSelect.tsx";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

import {IMovies} from "types";

const textSelect = ["Select Genre", "Documentary", "Comedy", "Horror", "Crime"];

const valueTest = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  releaseDate: Yup.date().default(function () {
    return new Date();
  }),
  movieUrl: Yup.string().min(2, "Too Short!").max(200, "Too Long!"),
  genre: Yup.string().min(2, "Too Short!").max(200, "Too Long!"),
  overview: Yup.string(),
  runtime: Yup.number(),
});

type AddWindowFormProps = {
  addNewMovie: (params: IMovies) => void;
  close: () => void;
  movieData: string;
  updateData: () => void;
  movie: IMovies;
  editMovie: (params: IMovies) => void;
  updateMovieList: () => void;
};

export const mapStateToProps = (state: TRootState) => {
  return {
    movies: state.movie,
    filter: state.filter,
  };
};

type ApplicationDispatch = ThunkDispatch<TRootState, {}, AnyAction> & Dispatch<AnyAction>;

export const mapDispatchToProps = (dispatch: ApplicationDispatch) => {
  return {
    addNewMovie: (param: IMovies) => dispatch(addMovie(param)),
    editMovie: (param: IMovies) => dispatch(editMovie(param)),
  };
};

const AddWindowFormContainer = connect(mapStateToProps, mapDispatchToProps);

type PropsAddWindowFormContainer = ConnectedProps<typeof AddWindowFormContainer>;

export const AddWindowForm = (
  props: PropsAddWindowFormContainer & AddWindowFormProps
) => {
  let optionsGenre = textSelect.map((text: string, index: number) => (
    <option key={index} value={text}>
      {text}
    </option>
  ));

  const handleAddMovie = React.useCallback(
    (param: IMovies) => {
      param.release_date = props.movieData;
      props.addNewMovie(param);
      props.close();
      props.updateMovieList();
    },
    [props.movieData]
  );

  const handleEditMovie = React.useCallback(
    (param: IMovies) => {
      param.id = props.movie.id;
      param.release_date = props.movieData !== "" ? props.movieData : param.release_date;
      props.editMovie(param);
      props.close();
      props.updateMovieList();
    },
    [props.movieData]
  );

  const handleSubmit = React.useCallback(
    (values: IMovies) => {
      if (movie === "") {
        handleAddMovie(values);
      } else {
        handleEditMovie(values);
      }
    },
    [props.movieData]
  );

  let movie = props.movie === undefined ? "" : props.movie;
  let data = props.movieData !== "" ? props.movieData : movie.release_date;
  return (
    <div>
      <Formik
        initialValues={
          movie === ""
            ? {
                title: "",
                movieUrl: "",
                genre: "",
                overview: "",
                runtime: "",
              }
            : {
                title: movie.title,
                movieUrl: movie.poster_path,
                genre: "Select Genre",
                overview: movie.overview,
                runtime: movie.runtime || "",
              }
        }
        validationSchema={valueTest}
        onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form>
            <div className="elem-form">
              <div className="elem-title">Title</div>
              <Field name="title" placeholder="Title here" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
            </div>
            <div className="elem-form">
              <div className="elem-title">Release date</div>
              <DateSelect updateData={props.updateData} movieData={data} />
            </div>
            <div className="elem-form">
              <div className="elem-title">Movie Url</div>
              <Field name="movieUrl" placeholder="Movie URL here" />
              {errors.movieUrl && touched.movieUrl ? <div>{errors.movieUrl}</div> : null}
            </div>
            <div className="elem-form">
              <div className="elem-title">Genre</div>
              <div className="elem-select">
                <Field as="select" name="genre" className="select-by">
                  {optionsGenre}
                </Field>
                {errors.genre && touched.genre ? <div>{errors.genre}</div> : null}
              </div>
            </div>
            <div className="elem-form">
              <div className="elem-title">Overview</div>
              <Field name="overview" placeholder="Overview here" />
              {errors.overview && touched.overview ? <div>{errors.overview}</div> : null}
            </div>
            <div className="elem-form">
              <div className="elem-title">Runtime</div>
              <Field name="runtime" placeholder="Runtime here" />
              {errors.runtime && touched.runtime ? <div>{errors.runtime}</div> : null}
            </div>
            <div className="button-add-movie">
              <button type="reset" className="reset">
                Reset
              </button>
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddWindowFormContainer(AddWindowForm);

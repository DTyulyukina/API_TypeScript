import React from "react";

import {connect, ConnectedProps} from "react-redux";

import {deleteMovie} from "../../actions";

// @ts-ignore
import ModalWindow from "./modalWindow.tsx";

import {IMovies} from "types";
import {TRootState} from "store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction, Dispatch} from "redux";

type TWindowFormDeleteProps = {
  isShown: boolean;
  close: () => void;
  movie: IMovies;
  updateMovieList: () => void;
  deleteMovie: (id: number) => void;
};

const mapStateToProps = (state: TRootState) => {
  return {
    filter: state.filter,
    movies: state.movie,
  };
};

type ApplicationDispatch = ThunkDispatch<{}, void, AnyAction> & Dispatch<AnyAction>;

const mapDispatchToProps = (dispatch: ApplicationDispatch) => {
  return {
    deleteMovie: (id: number) => dispatch(deleteMovie(id)),
  };
};

const WindowFormDeleteContainer = connect(mapStateToProps, mapDispatchToProps);

type TWindowFormDeleteContainer = ConnectedProps<typeof WindowFormDeleteContainer>;

export class WindowFormDelete extends React.PureComponent<
  TWindowFormDeleteProps & TWindowFormDeleteContainer,
  {}
> {
  handleDelete = () => {
    this.props.deleteMovie(this.props.movie.id);
    this.props.close();
    this.props.updateMovieList();
  };
  render() {
    const {isShown, close} = this.props;

    const modal = isShown && (
      <ModalWindow>
        <div className="modal-delete">
          <div className="modal-delete-movie">
            <div className="button-close-container">
              <button className="button-close" onClick={close}>
                X
              </button>
            </div>
            <div className="delete-form">
              <h2>Delete Movie</h2>
              <p>Are you sure you want to delete this movie?</p>
              <div className="button-delete">
                <button className="button-confirm" onClick={this.handleDelete}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalWindow>
    );

    return <div className="app-modal-update">{modal}</div>;
  }
}

export default WindowFormDeleteContainer(WindowFormDelete);

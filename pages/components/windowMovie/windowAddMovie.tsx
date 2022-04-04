import React from "react";

// @ts-ignore
import ModalWindow from "./modalWindow.tsx";
// @ts-ignore
import AddWindowFormContainer from "./addWindowForm.tsx";

type TWindowAddMovieProps = {
  isShown: boolean;
  close: () => void;
  title: string;
  updateData: () => void;
  movie: object;
  updateMovieList: () => void;
};

type TWindowAddMovieState = {
  data: string;
};

class WindowAddMovie extends React.PureComponent<
  TWindowAddMovieProps,
  TWindowAddMovieState
> {
  state = {data: ""};
  updateData = (data: string) => {
    this.setState({data: data});
  };

  closeMovieWindow = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.close();
  };

  render() {
    const modal = this.props.isShown && (
      <ModalWindow>
        <div className="modal">
          <div className="modal-add-movie">
            <div className="button-close-container">
              <button className="button-close" onClick={this.closeMovieWindow}>
                X
              </button>
            </div>
            <div className="core-form">
              <div className="title-window">{this.props.title} Movie</div>
              <div className="form-add">
                <AddWindowFormContainer
                  close={this.props.close}
                  updateData={this.updateData}
                  movieData={this.state.data}
                  movie={this.props.movie}
                  updateMovieList={this.props.updateMovieList}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalWindow>
    );

    return <div className="app-modal">{modal}</div>;
  }
}

export default WindowAddMovie;

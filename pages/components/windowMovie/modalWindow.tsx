import React, {ReactNode} from "react";
import ReactDOM from "react-dom";

type TModalWindowProps = {
  children: ReactNode;
};

class ModalWindow extends React.Component<TModalWindowProps, {}> {
  selectProtected = {
    modalRoot: document.getElementById("__next") as HTMLElement,
    element: document.createElement("div") as HTMLDivElement,
  };

  componentDidMount() {
    this.selectProtected.modalRoot.appendChild(this.selectProtected.element);
  }

  componentWillUnmount() {
    this.selectProtected.modalRoot.removeChild(this.selectProtected.element);
  }

  render() {
    const portal = this.selectProtected.element
      ? ReactDOM.createPortal(this.props.children, this.selectProtected.element)
      : null;
    return portal;
  }
}

export default ModalWindow;

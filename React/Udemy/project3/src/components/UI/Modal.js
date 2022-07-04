import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import ModalStyle from "./Modal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={ModalStyle.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={ModalStyle.modal}>
      <header className={ModalStyle.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={ModalStyle.content}>
        <p>{props.message}</p>
      </div>
      <footer className={ModalStyle.actions}>
        <Button onClick={props.onConfirm}>Close X</Button>
      </footer>
    </Card>
  );
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
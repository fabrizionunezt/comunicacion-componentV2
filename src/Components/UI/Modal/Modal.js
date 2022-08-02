import styles from "./Modal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <div onClick={props.onCloseModalHandler} className={styles.backdrop} />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModalHandler}>Entendido</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onCloseModalHandler={props.onCloseModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          onCloseModalHandler={props.onCloseModalHandler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;

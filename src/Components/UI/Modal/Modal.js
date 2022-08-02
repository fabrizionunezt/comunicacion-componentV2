import styles from "./Modal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Modal = (props) => {
  const onCloseModalHandler = () => {
    props.onCloseModalHandler();
  };
  return (
    <div>
      <div onClick={onCloseModalHandler} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseModalHandler}>Entendido</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;

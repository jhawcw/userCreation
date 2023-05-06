import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  if (props.error.length > 0) {
    return (
      <div>
        <div className={props.error.length > 0 ? "" : classes.backdrop}></div>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.errorModalHandler}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
  } else {
    return;
  }
};

export default ErrorModal;

import { useRef, useState } from "react";
import Wrapper from "../../Helpers/Wrappers";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const [errorMessage, setErrorMessage] = useState("Something went wrong!");
  const [isError, setIsError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const age = userAgeRef.current.value;
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setIsError(true);
      setErrorMessage("There are some incomplete fields!");
      return;
    }
    if (+age < 1) {
      setIsError(true);
      setErrorMessage("Not valid age!");
      return;
    }
    let user = {
      id: Math.random(),
      name: userName,
      age: age,
    };
    props.onAddUserHandler(user);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };

  const onCloseModalHandler = () => {
    setIsError(false);
  };

  return (
    <Wrapper>
      {isError && (
        <Modal
          onCloseModalHandler={onCloseModalHandler}
          title="An error occurred!"
          message={errorMessage}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={userNameRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

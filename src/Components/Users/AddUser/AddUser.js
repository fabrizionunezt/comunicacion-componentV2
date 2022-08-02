import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("Something went wrong!");
  const [isError, setIsError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
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
    setAge("");
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onCloseModalHandler = () => {
    setIsError(false);
  };

  return (
    <div>
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
          <input
            onChange={userNameChangeHandler}
            value={userName}
            id="username"
            type="text"
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            value={age}
            id="age"
            type="number"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

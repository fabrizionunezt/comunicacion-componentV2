import Card from "../../UI/Card/Card";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  const onDeleteUser = (event) => {
    console.log(event);
    //props.onDeleteUser()
  }

  return (
    <Card className={`${styles.users} ${props.className}`}>
      <ul>
        {props.users.length === 0 && (
          <li>
              <h2 style={{ padding: "0.5rem" }}>No users found.</h2>
          </li>
        )}
        {props.users.map((x) => (
          <li onClick={onDeleteUser} key={x.id}>{`Name: ${x.name} Age: ${x.age}`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

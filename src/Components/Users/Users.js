import { useState } from "react";
import AddUser from "./AddUser/AddUser";
import UserList from "./UsersList/UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);
  const onAddUserHandler = (user) => {
    setUsers((list) => [user, ...list]);
  };
  const onDeleteUser = (idUser) => {
    setUsers((list) => list.filter((user) => user.id != idUser));
  };

  return (
    <div>
      <AddUser onAddUserHandler={onAddUserHandler} />
      <UserList onDeleteUser={onDeleteUser} users={users} />
    </div>
  );
};
export default Users;

import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import UserRow from "../components/UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h2>Welcome to Users Page👥{users.length}</h2>
      <table
        border={1}
        cellPadding={"10"}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

import { useNavigate } from "react-router";

const UserRow = ({ user }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      <td>
        <button onClick={() => navigate("/user-details")}>View Details</button>
      </td>
    </tr>
  );
};

export default UserRow;

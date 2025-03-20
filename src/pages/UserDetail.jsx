// import { useEffect, useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router";

const UserDetail = () => {
  const navigate = useNavigate();
  // const data=useParams();
  // console.log(data);
  const { id } = useParams();
  const user = useLoaderData();
  const { setCount } = useOutletContext();

  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   });
  return (
    <div>
      <h2>User Details for id-{id}</h2>
      <h1>{user.name}</h1>
      <p>Contact: {user.phone}</p>
      <button onClick={() => navigate("/users")}>Back to UserList</button>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default UserDetail;

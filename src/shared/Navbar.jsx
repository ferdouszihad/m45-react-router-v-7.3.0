import { Link, NavLink } from "react-router";

const Navbar = ({ count }) => {
  const getRandomColor = () => {
    const color =
      "#" + Math.floor(Math.random() * 16777215).toString(16) + "80";
    return color;
  };
  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Users", path: "/users" },
  ];
  return (
    <div style={{ backgroundColor: getRandomColor(), padding: "10px" }}>
      <h4>Explore Router-{count}</h4>
      <table border={1} width="100%">
        <tbody>
          <tr>
            {navMenu.map((menu, index) => {
              return (
                <td key={index}>
                  <NavLink to={menu.path}>{menu.name}</NavLink>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navbar;

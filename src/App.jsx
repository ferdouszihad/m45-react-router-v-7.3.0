import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Navbar from "./shared/Navbar";
import Loading from "./pages/Loading";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <h2>Welcome to APP Layout</h2>
      <Navbar></Navbar>
      {/* Outlet is a placeholder for the child routes. It define in where the child Routes will show */}
      <div style={{ display: "flex", gap: "10px" }}>
        <aside style={{ background: "lightblue", padding: "10px" }}>
          <p> link 1</p>
          <p> link 2</p>
          <p> link 3</p>
        </aside>
        <div
          className="content"
          style={{ background: "lightyellow", padding: "10px", flex: 1 }}
        >
          {navigation.state == "loading" ? (
            <Loading></Loading>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>

      <footer style={{ background: "gray" }}> THis is Footer</footer>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between " }}>
      <Link to={"/login"}>Login</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Navbar;

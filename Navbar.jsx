import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  padding: "15px",
  background: "#2f80ed",
}}>
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/sales">Sales</Link>
    </nav>
  );
}

export default Navbar;
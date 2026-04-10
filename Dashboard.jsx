import { useEffect, useState } from "react";
import { getMedicines } from "../services/api";

function Dashboard() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getMedicines();
    setMedicines(data);
  };

  const totalMedicines = medicines.length;

  const lowStock = medicines.filter(
    (med) => med.stock < 5
  ).length;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "20px"
      }}>
        
        <div style={{
          padding: "20px",
          background: "#2f80ed",
          color: "white",
          borderRadius: "10px"
        }}>
          <h3>Total Medicines</h3>
          <p>{totalMedicines}</p>
        </div>

        <div style={{
          padding: "20px",
          background: "red",
          color: "white",
          borderRadius: "10px"
        }}>
          <h3>Low Stock</h3>
          <p>{lowStock}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
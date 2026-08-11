import { useEffect, useState } from "react";
import MedicineForm from "./MedicineForm";
import StockTable from "./StockTable";
import { getMedicines, addMedicine, deleteMedicine } from "./api";

function Inventory() {
  const [medicines, setMedicines] = useState([]);

  // Fetch medicines from backend
  const fetchData = async () => {
    try {
      const data = await getMedicines();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  // Load data when page opens
  useEffect(() => {
    fetchData();
  }, []);

  // Add medicine
  const handleAdd = async (med) => {
    try {
      await addMedicine(med);
      await fetchData();
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  // Delete medicine
  const handleDelete = async (id) => {
    try {
      await deleteMedicine(id);
      await fetchData();
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  return (
    <div>
      <h2>Inventory</h2>
      <MedicineForm onAdd={handleAdd} />
      <StockTable medicines={medicines} onDelete={handleDelete} />
    </div>
  );
}

export default Inventory;
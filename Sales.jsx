import { useEffect, useState } from "react";
import { getMedicines } from "../services/api";

function Sales() {
  const [medicines, setMedicines] = useState([]);
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getMedicines();
    setMedicines(data);
  };

  const selectedMedicine = medicines.find(
    (m) => m.id === Number(selected)
  );

  const total = selectedMedicine
  ? selectedMedicine.price * quantity
  : 0;
  
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Billing</h2>

      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select Medicine</option>
        {medicines.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <h3>Total: ₹ {total}</h3>
    </div>
  );
}

export default Sales;
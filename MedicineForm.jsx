import { useState } from "react";

function MedicineForm({ onAdd }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !stock || !price) {
      alert("Please fill all fields");
      return;
    }

    try {
      await onAdd({
        name,
        stock: Number(stock),
        price: Number(price),
      });

      setName("");
      setStock("");
      setPrice("");
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medicine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default MedicineForm;
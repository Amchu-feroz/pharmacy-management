function StockTable({ medicines, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Medicine Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {medicines.map((med) => (
          <tr key={med.id}>
            <td>{med.name}</td>

            <td>
              <div style={{ color: med.stock < 5 ? "red" : "black" }}>
                {med.stock}
              </div>

              {med.stock < 5 && (
                <div style={{ color: "red" }}>
                  Low Stock!
                </div>
              )}
            </td>

            <td>₹ {med.price}</td>

            <td>
              <button onClick={() => onDelete(med.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
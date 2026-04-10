const STORAGE_KEY = "pharmacy_medicines";

const getStoredMedicines = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const storeMedicines = (medicines) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(medicines));
};

const createInitialMedicines = () => [
  { id: 1, name: "Paracetamol", stock: 20, price: 50 },
  { id: 2, name: "Cough Syrup", stock: 10, price: 120 },
  { id: 3, name: "Vitamin C", stock: 5, price: 80 },
];

export const getMedicines = async () => {
  let medicines = getStoredMedicines();

  if (medicines.length === 0) {
    medicines = createInitialMedicines();
    storeMedicines(medicines);
  }

  return medicines;
};

export const addMedicine = async (data) => {
  const medicines = getStoredMedicines();
  const nextId = medicines.length > 0 ? Math.max(...medicines.map((m) => m.id)) + 1 : 1;
  const newMedicine = { id: nextId, ...data };
  storeMedicines([...medicines, newMedicine]);
  return newMedicine;
};

export const deleteMedicine = async (id) => {
  const medicines = getStoredMedicines();
  storeMedicines(medicines.filter((medicine) => medicine.id !== Number(id)));
};
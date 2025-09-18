import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CSVUploader from "../components/CSVUploader";

export default function ImportCSV({ onImport }) {
  const navigate = useNavigate();
  const [imported, setImported] = useState(false);

  const handleImport = (newProducts) => {
    onImport(newProducts); // pasa los productos al estado global o padre
    setImported(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Importar Productos</h2>

      <CSVUploader onImport={handleImport} />

      {imported && (
        <p className="text-green-600 mt-2">
          ✅ Productos importados correctamente
        </p>
      )}

      <button
        onClick={() => navigate("/cart")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Volver al carrito 🛒
      </button>
    </div>
  );
}

import { useState } from "react";
import CSVUploader from "../components/CSVUploader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !price || !stock) return;

    if (editingId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, name, price: Number(price), stock: Number(stock) }
            : p
        )
      );
      setEditingId(null);
    } else {
      setProducts((prev) => [
        ...prev,
        { id: Date.now(), name, price: Number(price), stock: Number(stock) },
      ]);
    }

    setName("");
    setPrice("");
    setStock("");
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleImport = (newProducts) => {
    setProducts((prev) => [...prev, ...newProducts]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Productos</h2>

      {/* Importador CSV */}
      <CSVUploader onImport={handleImport} />

      {/* Formulario manual */}
      <form onSubmit={handleAdd} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Nombre del producto"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          className="border p-2 w-full rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          className="border p-2 w-full rounded"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingId ? "Actualizar" : "Añadir"}
        </button>
      </form>

      {/* Lista */}
      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {p.name} - ${p.price} - 🏷 Stock: {p.stock}
            </span>
            <div className="space-x-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => handleEdit(p)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(p.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

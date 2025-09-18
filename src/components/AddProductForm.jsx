import { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: "", precio: "", stock: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.stock) return;
    onAdd(nuevoProducto);
    setNuevoProducto({ nombre: "", precio: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
      <h2 className="text-xl font-bold mb-2">➕ Añadir Producto</h2>
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Nombre"
        value={nuevoProducto.nombre}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
      />
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Precio"
        value={nuevoProducto.precio}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
      />
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Stock"
        value={nuevoProducto.stock}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: e.target.value })}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}

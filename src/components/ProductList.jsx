export default function ProductList({ productos, onDelete, onAddToCart }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📦 Productos</h2>
      <ul className="space-y-2">
        {productos.map((p) => (
          <li key={p.id} className="flex justify-between items-center border p-2 rounded">
            <span>
              {p.nombre} - ${p.precio} (Stock: {p.stock})
            </span>
            <div className="space-x-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => onAddToCart(p)}
              >
                🛒
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => onDelete(p.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

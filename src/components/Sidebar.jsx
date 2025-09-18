export default function Sidebar({ view, setView }) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Admin App</h1>
      <button
        className={`text-left p-2 rounded mb-2 hover:bg-gray-700 ${view === "añadir" ? "bg-gray-700" : ""}`}
        onClick={() => setView("añadir")}
      >
        ➕ Añadir
      </button>
      <button
        className={`text-left p-2 rounded mb-2 hover:bg-gray-700 ${view === "productos" ? "bg-gray-700" : ""}`}
        onClick={() => setView("productos")}
      >
        📦 Productos
      </button>
      <button
        className={`text-left p-2 rounded mb-2 hover:bg-gray-700 ${view === "carrito" ? "bg-gray-700" : ""}`}
        onClick={() => setView("carrito")}
      >
        🛒 Carrito
      </button>
    </aside>
  );
}

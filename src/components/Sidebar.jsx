import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#acad62] text-white p-4">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/carrito" className="hover:text-gray-200">Carrito</Link>
        <Link to="/precios" className="hover:text-gray-200">Precios</Link>
        <Link to="/anadir" className="hover:text-gray-200">Añadir</Link>
        <Link to="/upload" className="hover:text-gray-200">Cargar CSV</Link>
      </nav>
    </aside>
  );
}

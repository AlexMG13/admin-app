import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [view, setView] = useState("productos");
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Cerveza", precio: 1200, stock: 10 },
    { id: 2, nombre: "Fernet", precio: 5000, stock: 5 },
  ]);
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      {
        id: Date.now(),
        nombre: nuevoProducto.nombre,
        precio: parseFloat(nuevoProducto.precio),
        stock: parseInt(nuevoProducto.stock),
      },
    ]);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const agregarAlCarrito = (producto) => {
    if (producto.stock <= 0) return alert("Sin stock");
    setCarrito([...carrito, producto]);
    setProductos(
      productos.map((p) =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar view={view} setView={setView} />
      <main className="flex-1 p-6 overflow-y-auto">
        {view === "añadir" && <AddProductForm onAdd={agregarProducto} />}
        {view === "productos" && (
          <ProductList
            productos={productos}
            onDelete={eliminarProducto}
            onAddToCart={agregarAlCarrito}
          />
        )}
        {view === "carrito" && <Cart carrito={carrito} />}
      </main>
    </div>
  );
}

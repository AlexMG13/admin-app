import { useState } from "react";

export default function App() {
  // Estado de productos y carrito
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Cerveza", precio: 1200, stock: 10 },
    { id: 2, nombre: "Fernet", precio: 5000, stock: 5 },
  ]);
  const [carrito, setCarrito] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: "", precio: "", stock: "" });

  // 👉 Agregar producto al stock
  const agregarProducto = () => {
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.stock) return;
    setProductos([
      ...productos,
      {
        id: Date.now(),
        nombre: nuevoProducto.nombre,
        precio: parseFloat(nuevoProducto.precio),
        stock: parseInt(nuevoProducto.stock),
      },
    ]);
    setNuevoProducto({ nombre: "", precio: "", stock: "" });
  };

  // 👉 Eliminar producto del stock
  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  // 👉 Agregar al carrito
  const agregarAlCarrito = (producto) => {
    if (producto.stock <= 0) return alert("Sin stock");
    setCarrito([...carrito, producto]);
    setProductos(
      productos.map((p) =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // 👉 Calcular total del carrito
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🛒 Administración</h1>

      {/* FORM ALTA PRODUCTO */}
      <h2>Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nuevoProducto.nombre}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={nuevoProducto.precio}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stock"
        value={nuevoProducto.stock}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: e.target.value })}
      />
      <button onClick={agregarProducto}>Agregar</button>

      {/* LISTA DE PRODUCTOS */}
      <h2>Productos</h2>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            {p.nombre} - ${p.precio} - Stock: {p.stock}
            <button onClick={() => agregarAlCarrito(p)}>🛒</button>
            <button onClick={() => eliminarProducto(p.id)}>❌</button>
          </li>
        ))}
      </ul>

      {/* CARRITO */}
      <h2>Carrito</h2>
      <ul>
        {carrito.map((p, i) => (
          <li key={i}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

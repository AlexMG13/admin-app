export default function Cart({ carrito }) {
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="space-y-2">
          {carrito.map((p, i) => (
            <li key={i} className="border p-2 rounded">
              {p.nombre} - ${p.precio}
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-lg font-semibold mt-4">Total: ${total}</h3>
    </div>
  );
}

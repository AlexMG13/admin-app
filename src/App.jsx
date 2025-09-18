import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";
import Prices from "./pages/Prices";
import AddProduct from "./pages/AddProduct";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

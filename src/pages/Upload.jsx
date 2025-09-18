import { useNavigate } from "react-router-dom";
import CSVUploader from "../components/CSVUploader";

export default function Upload() {
  const navigate = useNavigate();

  const handleUpload = (data) => {
    console.log("Contenido CSV:", data);
    // acá podrías parsear el CSV y actualizar productos
    // luego volver al carrito
    navigate("/carrito");
  };

  return (
    <div>
      <CSVUploader onUpload={handleUpload} />
    </div>
  );
}

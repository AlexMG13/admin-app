import { useState } from "react";

export default function CSVUploader({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (!file) return alert("Selecciona un archivo CSV primero");
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      onUpload(text); // acá lo mandás al contexto, estado global o API
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">📂 Cargar productos vía CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-[#acad62] text-white px-4 py-2 rounded hover:bg-[#9a9a4e]"
      >
        Subir CSV
      </button>
    </div>
  );
}

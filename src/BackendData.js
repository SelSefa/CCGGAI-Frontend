import React, { useEffect, useState } from "react";
import axios from "axios";

const BackendData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/home")  // Backend'in endpoint adresi
      .then((response) => {
        setData(response.data);  // Gelen veriyi state'e kaydet
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  return (
    <div>
      <h1>Backend’den Gelen Veri</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Yükleniyor...</p>}
    </div>
  );
};

export default BackendData;

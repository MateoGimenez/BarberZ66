import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export default function TestSupabase() {
  const [estado, setEstado] = useState("⏳ Probando conexión...");

  useEffect(() => {
    const probarConexion = async () => {
      try {
        // 👇 Cambiá "usuarios" por el nombre de una tabla real de tu base
        const { data, error } = await supabase.from("config_barberia").select("*").limit(1);

        if (error) {
          console.error("❌ Error Supabase:", error.message);
          setEstado(`❌ Error al conectar: ${error.message}`);
        } else {
          console.log("✅ Conexión exitosa:", data);
          setEstado("✅ Conexión exitosa con Supabase");
        }
      } catch (err) {
        console.error("⚠️ Error general:", err);
        setEstado("⚠️ Error general en la conexión (ver consola)");
      }
    };

    probarConexion();
  }, []);

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Test de conexión con Supabase</h2>
      <p>{estado}</p>
    </section>
  );
}

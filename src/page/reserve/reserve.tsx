import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import "./reserve.css";

export default function Reserve() {
  const [selected, setSelected] = useState<Date>();

  return (
    <section>
      <h1>Reserva tu turno</h1>
      <div className="contenedor-calendario">
        <DayPicker
          mode="single"
          locale={es}
          disabled={(day) => day < new Date()}
          selected={selected}
          onSelect={setSelected}
          footer={
            selected
              ? `Has elegido el ${selected.toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}`
              : "Elige un día para tu turno"
          }
          className="my-calendar"
        />
      </div>

      <div className="contenedor-horario">
        aca van los horarios
      </div>

      <button>Reservar</button>
    </section>
  );
}

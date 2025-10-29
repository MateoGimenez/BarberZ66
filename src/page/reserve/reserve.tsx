import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import "./reserve.css";

export default function Reserve() {
  const [selected, setSelected] = useState<Date>();

  const Horarios = ["09:00" , "09:30" , "10:00" , "10:30" , "11:00" , "11:30" , "12:00"]

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
        {selected && (
                  <div className="horarios">
                    {Horarios.map((value)=>(
                    <div className="listado-horarios">
                      <button>{value}</button>
                    </div>
                     ))}
                  </div>
        )}
      </div>

      <button className="reservar-bt" disabled={!selected}>Reservar</button>
    </section>
  );
}

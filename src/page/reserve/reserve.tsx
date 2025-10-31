import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import "./reserve.css";

export default function Reserve() {
  const [selected, setSelected] = useState<Date>();
  const [hora, setHora] = useState<string>("");

  const Horarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
  ];

  function HorarioElegido(fecha: Date | undefined, hora: string) {
    if (!fecha) return;
    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    console.log(`Reserva confirmada: ${fechaFormateada} a las ${hora}`);
  }

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
                })} ${hora ? `A las ${hora}` : ""}`
              : "Elige un día para tu turno"
          }
          className="my-calendar"
        />

        {selected && (
          <div className="horarios">
            {Horarios.map((value) => (
              <div className="listado-horarios" key={value}>
                <button
                  className={hora === value ? "active" : ""}
                  onClick={() => setHora(value)}
                >
                  {value}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        className="reservar-bt"
        disabled={!selected || !hora}
        onClick={() => HorarioElegido(selected, hora)}
      >
        Reservar
      </button>
    </section>
  );
}

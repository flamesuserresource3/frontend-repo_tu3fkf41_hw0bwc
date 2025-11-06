import { motion } from "framer-motion";
import { useState } from "react";

const servicios = [
  "Corte clásico",
  "Afeitado con toalla caliente",
  "Arreglo de barba",
  "Tratamiento facial masculino",
  "Corte VIP",
];

const Reservas = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "", hora: "", servicio: servicios[0] });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de reserva sin backend
    setTimeout(() => setEnviado(true), 600);
  };

  return (
    <section id="reservas" className="bg-neutral-950 text-neutral-200 py-20 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white">Reserva tu experiencia</h2>
          <p className="mt-3 text-neutral-300">Selecciona el servicio y el horario que prefieras. Te confirmaremos por WhatsApp.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-neutral-400">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                required
                value={form.telefono}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                placeholder="Ej. +34 600 000 000"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-400">Fecha</label>
                <input
                  type="date"
                  name="fecha"
                  required
                  value={form.fecha}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400">Hora</label>
                <input
                  type="time"
                  name="hora"
                  required
                  value={form.hora}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-400">Servicio</label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
              >
                {servicios.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-md border border-yellow-500/40 bg-yellow-500/10 px-6 py-3 text-sm font-semibold tracking-wide text-yellow-300 hover:bg-yellow-500/20 transition"
            >
              Confirmar reserva
            </button>
            {enviado && (
              <p className="text-green-400 text-sm">Reserva registrada. Te contactaremos en breve por WhatsApp.</p>
            )}
          </form>

          <a
            href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola, me gustaría reservar: ${form.servicio} el ${form.fecha} a las ${form.hora}. Soy ${form.nombre}.`)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-green-400 hover:text-green-300"
          >
            Reserva rápida por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl overflow-hidden border border-neutral-800"
        >
          <iframe
            title="Mapa Barbería Imperium"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159043!3d-37.816279742111334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1ses!2ses!4v1611813629387!5m2!1ses!2ses"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Reservas;

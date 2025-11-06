import { motion } from "framer-motion";

const Hero = () => {
  const scrollToBooking = () => {
    const el = document.getElementById("reservas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            <span className="block text-white">Barbería Imperium</span>
            <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
              Corte, estilo y distinción.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
            Una experiencia de barbería premium donde la tradición se une al lujo contemporáneo. Atención al detalle, técnicas de precisión y un servicio a la altura de los más exigentes.
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center rounded-md border border-yellow-500/40 bg-yellow-500/10 px-6 py-3 text-sm font-semibold tracking-wide text-yellow-300 hover:bg-yellow-500/20 transition"
            >
              Reserva tu cita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

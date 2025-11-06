import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Corte clásico",
    desc: "Técnica de precisión adaptada a tu estilo, con acabado impecable.",
    precio: "€35",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1974&auto=format&fit=crop",
  },
  {
    titulo: "Afeitado con toalla caliente",
    desc: "Ritual relajante con productos premium y navaja tradicional.",
    precio: "€30",
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2069&auto=format&fit=crop",
  },
  {
    titulo: "Arreglo de barba",
    desc: "Definición, contorno y nutrición para una barba impecable.",
    precio: "€25",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    titulo: "Tratamiento facial masculino",
    desc: "Limpieza profunda y revitalización con activos de alta gama.",
    precio: "€40",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop",
  },
  {
    titulo: "Corte VIP",
    desc: "Experiencia privada con asesoría personalizada y bebidas premium.",
    precio: "€70",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="bg-neutral-950 text-neutral-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-white"
        >
          Servicios premium
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.titulo}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{s.titulo}</h3>
                  <span className="text-yellow-300 font-medium">{s.precio}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;

import { motion } from "framer-motion";

const SobreNosotros = () => {
  return (
    <section id="sobre" className="bg-neutral-950 text-neutral-200 py-20 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white">Tradición con carácter moderno</h2>
          <p className="mt-4 text-neutral-300">
            Nacida del oficio clásico del barbero y la estética contemporánea, Barbería Imperium
            se inspira en la elegancia atemporal. Nuestro compromiso es ofrecer una experiencia artesanal,
            con productos de primera línea y un trato impecable, pensado para quienes valoran el detalle.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300">
            <li>• Atención minuciosa y asesoría personalizada</li>
            <li>• Técnicas de precisión y rituales de bienestar</li>
            <li>• Selección curada de productos profesionales</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1974&auto=format&fit=crop"
            alt="Equipo de Barbería Imperium"
            className="w-full rounded-xl border border-neutral-800"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNosotros;

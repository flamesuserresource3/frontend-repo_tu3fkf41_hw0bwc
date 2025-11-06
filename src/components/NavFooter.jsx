import { motion } from "framer-motion";

const Nav = () => {
  const items = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre", label: "Sobre" },
    { href: "#reservas", label: "Reservas" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-serif text-xl text-white">Imperium</a>
        <nav className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#reservas" className="rounded-md border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-300 hover:bg-yellow-500/20 transition">
            Reserva
          </a>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-serif text-white text-lg">Barbería Imperium</h4>
          <p className="mt-2 text-sm text-neutral-400">Estilo, tradición y lujo masculino.</p>
        </div>
        <div>
          <h5 className="text-white font-medium">Contacto</h5>
          <p className="mt-2 text-sm">Calle Principal 123, Ciudad</p>
          <p className="text-sm">+34 600 000 000</p>
          <p className="text-sm">contacto@imperium.barber</p>
          <div className="mt-3 flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
        <div className="md:text-right text-sm text-neutral-400 flex items-end md:justify-end">
          © {new Date().getFullYear()} Imperium. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export { Nav, Footer };

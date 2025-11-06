import { useEffect } from "react";
import { Nav, Footer } from "./components/NavFooter";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Reservas from "./components/Reservas";

function App() {
  useEffect(() => {
    // SEO básicos al montar
    document.title = "Barbería Imperium | Estilo, tradición y lujo masculino";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Descubre una experiencia de barbería premium en el corazón de la ciudad. Barbería Imperium: cortes clásicos, afeitados de precisión y atención de lujo."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Descubre una experiencia de barbería premium en el corazón de la ciudad. Barbería Imperium: cortes clásicos, afeitados de precisión y atención de lujo.";
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Reservas />
      </main>
      <Footer />
    </div>
  );
}

export default App;

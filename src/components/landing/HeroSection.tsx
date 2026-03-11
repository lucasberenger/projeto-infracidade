import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cidade inteligente com dashboards de dados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium gradient-primary text-primary-foreground">
            Engenharia de Software para Gestão Pública
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            Dados transformando a{" "}
            <span className="gradient-text">gestão pública</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/80">
            Cidades modernas utilizam tecnologia e aplicativos para gerar dados
            valiosos, permitindo decisões mais inteligentes e uma administração
            pública eficiente e transparente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="rounded-full px-8 py-6">
              Entenda como funciona
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-primary rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto glow-shadow"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Transforme dados em decisões inteligentes
        </h2>
        <p className="text-primary-foreground/85 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Leve tecnologia e análise de dados para a gestão do seu município.
          Nossa equipe de engenharia de software pode ajudar sua cidade a dar
          o próximo passo rumo a uma administração mais eficiente.
        </p>
        <Button
          variant="hero-outline"
          size="lg"
          className="rounded-full px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
        >
          Fale conosco
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;

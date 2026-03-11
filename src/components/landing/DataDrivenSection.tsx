import { motion } from "framer-motion";
import { CloudUpload, Layers, BrainCircuit } from "lucide-react";

const pillars = [
  {
    icon: CloudUpload,
    title: "Coleta de dados",
    desc: "Capturar informações relevantes de forma estruturada, por meio de aplicativos, sensores e sistemas digitais.",
    step: "01",
  },
  {
    icon: Layers,
    title: "Organização e integração",
    desc: "Reunir dados de diferentes fontes em um único ambiente organizado, pronto para consulta e cruzamento.",
    step: "02",
  },
  {
    icon: BrainCircuit,
    title: "Análise para decisão",
    desc: "Transformar dados brutos em insights acionáveis que orientam políticas públicas e investimentos.",
    step: "03",
  },
];

const DataDrivenSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Cultura organizacional
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cultura Data-Driven</h2>
        <p className="text-muted-foreground text-lg">
          Uma cultura orientada por dados é aquela em que as decisões são tomadas com base em
          evidências concretas — não em intuição. Isso exige três pilares fundamentais.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative glass-card rounded-2xl p-8 hover:shadow-lg transition-shadow group"
          >
            <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6 font-display group-hover:text-primary/20 transition-colors">
              {p.step}
            </span>
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
              <p.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DataDrivenSection;

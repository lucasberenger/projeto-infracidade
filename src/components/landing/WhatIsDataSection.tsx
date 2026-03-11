import { motion } from "framer-motion";
import { Database, TrendingUp, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "Registro",
    desc: "Um dado é qualquer informação que pode ser registrada — um número, uma data, uma localização, uma resposta.",
  },
  {
    icon: BarChart3,
    title: "Reunião",
    desc: "Quando muitos dados são reunidos, é possível enxergar o todo e identificar padrões que não eram visíveis isoladamente.",
  },
  {
    icon: TrendingUp,
    title: "Análise",
    desc: "Com análise adequada, dados revelam tendências, oportunidades de melhoria e pontos de atenção para gestores.",
  },
];

const WhatIsDataSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Conceito
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O que é um dado?</h2>
        <p className="text-muted-foreground text-lg">
          Entender o poder de um dado é o primeiro passo para transformar a gestão pública.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
              <item.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIsDataSection;

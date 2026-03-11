import { motion } from "framer-motion";
import { AlertTriangle, Clock, Eye } from "lucide-react";

const insights = [
  { icon: AlertTriangle, text: "Identificar problemas recorrentes antes que se tornem crises" },
  { icon: Clock, text: "Antecipar demandas e planejar recursos com antecedência" },
  { icon: Eye, text: "Revelar problemas que não são visíveis facilmente no dia a dia" },
];

const IntelligenceSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformando dados em inteligência
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Com a análise adequada dos dados coletados, gestores públicos ganham
            uma visão completa da realidade municipal — e podem agir de forma
            proativa, não apenas reativa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-center bg-accent/60 rounded-xl p-5"
            >
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default IntelligenceSection;

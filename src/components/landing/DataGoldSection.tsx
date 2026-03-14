import { motion } from "framer-motion";
import { Gem, Search, Lightbulb } from "lucide-react";

const DataGoldSection = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Valor dos dados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dados: o ouro digital
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Hoje, organizações de todos os setores tomam decisões baseadas em dados.
            Não se trata apenas de coletar informações — trata-se de usá-las
            estrategicamente para gerar resultados reais.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dados ajudam a entender comportamentos, identificar problemas antes que
            se agravem e melhorar a qualidade dos serviços prestados à população.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { icon: Gem, title: "Ativo estratégico", desc: "Dados organizados se tornam um dos ativos mais valiosos de qualquer organização pública." },
            { icon: Search, title: "Visibilidade", desc: "Permitem enxergar problemas ocultos e oportunidades que antes passavam despercebidas." },
            { icon: Lightbulb, title: "Decisões embasadas", desc: "Gestores podem agir com confiança, baseando decisões em evidências e não em suposições." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start bg-card rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default DataGoldSection;

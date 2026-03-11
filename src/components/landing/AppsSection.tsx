import { motion } from "framer-motion";
import { ShieldAlert, HeartPulse, GraduationCap, MapPin, Activity, BookOpen } from "lucide-react";

const apps = [
  {
    icon: ShieldAlert,
    title: "Registro de incidentes urbanos",
    desc: "Cidadãos reportam acidentes, roubos, problemas de trânsito e ocorrências pela cidade em tempo real.",
    data: "Gera dados de localização, frequência e tipo de incidentes — permitindo mapear áreas críticas e alocar recursos com precisão.",
    dataIcon: MapPin,
    color: "from-primary to-blue-400",
  },
  {
    icon: HeartPulse,
    title: "Saúde municipal",
    desc: "Agendamento de consultas, acesso a exames, notificações de campanhas de vacinação e acompanhamento médico.",
    data: "Gera dados sobre demanda por serviços, tempos de espera e perfil epidemiológico — melhorando o planejamento de saúde.",
    dataIcon: Activity,
    color: "from-primary to-blue-400",
  },
  {
    icon: GraduationCap,
    title: "Escolas municipais",
    desc: "Comunicação entre escola e responsáveis, avisos, frequência, atividades escolares e acompanhamento do desempenho do aluno.",
    data: "Gera indicadores educacionais importantes como evasão, rendimento e engajamento — fundamentais para políticas educacionais.",
    dataIcon: BookOpen,
    color: "from-primary to-blue-400",
  },
];

const AppsSection = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Soluções práticas
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Aplicativos como geradores de dados
        </h2>
        <p className="text-muted-foreground text-lg">
          Aplicativos utilizados pelos cidadãos geram dados valiosíssimos para
          a melhoria contínua da administração pública municipal.
        </p>
      </motion.div>

      <div className="space-y-8">
        {apps.map((app, i) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <app.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{app.desc}</p>
              </div>
              <div className="p-8 md:p-10 bg-accent/50 flex items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <app.dataIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      Dados gerados
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{app.data}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AppsSection;

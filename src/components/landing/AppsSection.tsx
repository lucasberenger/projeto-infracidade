import { motion } from "framer-motion";
import {
  ShieldAlert,
  Camera,
  BarChart3,
  HeartPulse,
  AlertTriangle,
  Eye,
  Clock,
  Thermometer,
  Activity,
  Users,
} from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Reporte de Incidentes e Transparência",
    desc: "A população alimenta o sistema em tempo real, notificando problemas de infraestrutura (buracos, iluminação, fiação), segurança (assaltos, vandalismo) e trânsito. Além de reportar, é possível visualizar as ocorrências registradas por outros usuários.",
  },
  {
    icon: Camera,
    title: "Monitoramento via IA",
    desc: "Acesso a imagens em tempo real de câmeras inteligentes instaladas em locais estratégicos, permitindo acompanhar o fluxo e a segurança de diferentes regiões do município.",
  },
  {
    icon: BarChart3,
    title: "Central de Dados e Performance",
    desc: "Dashboard de Frequência com gráficos dos problemas mais recorrentes em períodos mensais e anuais, além do Tempo Médio de Resolução — indicador de agilidade que mostra quanto tempo o Estado leva para solucionar cada tipo de ocorrência.",
  },
  {
    icon: HeartPulse,
    title: "Indicadores de Bem-Estar",
    desc: "Termômetro de Humor que mede o nível de satisfação da população e Indicador de Saúde da Região, um diagnóstico geral da qualidade de vida na localidade — tudo gerado a partir dos dados dos próprios cidadãos.",
  },
];

const AppsSection = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Soluções práticas
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Aplicativo InfraCidade: Participação Popular como Gerador de Dados
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          O objetivo principal é incentivar a participação popular na Ordem
          Pública, disponibilizando uma ferramenta acessível e de fácil
          utilização, para que a população contribua com o Município, zelando a
          convivência social, a segurança e o bem-estar coletivo.
        </p>
      </motion.div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-sm p-8 md:p-10 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Users className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold">Como funciona o aplicativo?</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          O InfraCidade é uma plataforma colaborativa que conecta o cidadão
          diretamente ao Estado. Após a identificação (via Título de Eleitor ou
          documentos oficiais), o usuário acessa um ecossistema de monitoramento
          e zeladoria urbana com as seguintes funcionalidades:
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl shadow-sm p-8"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
              <feat.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AppsSection;

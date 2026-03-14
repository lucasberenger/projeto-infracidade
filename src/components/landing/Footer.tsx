import { BarChart3 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 font-display font-semibold text-foreground">
        <BarChart3 className="h-5 w-5 text-primary" />
        InfraCidade
      </div>
      <p>© {new Date().getFullYear()} InfraCidade. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;

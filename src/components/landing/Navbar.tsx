import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 font-display font-bold text-xl">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span>DataGov</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#conceito" className="hover:text-foreground transition-colors">O que é um dado</a>
          <a href="#cultura" className="hover:text-foreground transition-colors">Cultura Data-Driven</a>
          <a href="#apps" className="hover:text-foreground transition-colors">Aplicativos</a>
          <Button variant="hero" size="sm" className="rounded-full">Fale conosco</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          <a href="#conceito" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>O que é um dado</a>
          <a href="#cultura" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Cultura Data-Driven</a>
          <a href="#apps" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Aplicativos</a>
          <Button variant="hero" size="sm" className="rounded-full w-full">Fale conosco</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

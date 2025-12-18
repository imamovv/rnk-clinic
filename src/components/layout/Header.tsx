import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Услуги", href: "/services" },
    { label: "Цены", href: "/prices" },
    { label: "Врачи", href: "/doctors" },
    { label: "О клинике", href: "/about" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary/5 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" />
              Москва, ул. Пречистенка, 40/2с1
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-primary" />
              Ежедневно 10:00 - 22:00
            </span>
          </div>
          <a href="tel:+79990000000" className="hover:text-primary transition-colors">
            +7 (495) 123-45-67
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex flex-col items-start group">
              <span className="text-2xl font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">
                KILIA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Clinic
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="hidden xl:flex border-primary text-primary hover:bg-primary hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Заказать звонок
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className="text-lg font-medium py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </Button>
              <Button className="w-full justify-center bg-primary text-white">
                Записаться онлайн
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

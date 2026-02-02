import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock, MessageCircle, Send, MessageSquare } from "lucide-react";
import { useState, useCallback } from "react";
import {RKLogo} from '@components/ui/logo';

const NAV_ITEMS = [
  { label: "Услуги", href: "/services" },
  { label: "Цены", href: "/prices" },
  { label: "Врачи", href: "/doctors" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
] as const;

const CLINIC_INFO = {
  phone: "+7 (917) 90-02-40",
  address: "г. Казань ул. Краснококшаяская 60, 2 этаж",
  hours: "Ежедневно 10:00 - 22:00",
  phoneLink: "tel:+71790900240",
  email : "ranokclinic@icloud.com",
  telegram: "https://t.me/ranokclinic",
  whatsapp: "https://wa.me/79179000240",
  max: "https://max.ranokclinic.ru/"
} as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary/5 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" />
              {CLINIC_INFO.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-primary" />
              {CLINIC_INFO.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={CLINIC_INFO.phoneLink} className="hover:text-primary transition-colors font-medium">
              {CLINIC_INFO.phone}
            </a>
            <div className="flex items-center gap-2.5 pl-4 border-l border-border/40">
              <a href={CLINIC_INFO.telegram} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors" title="Telegram">
                <Send className="w-4 h-4" />
              </a>
              <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={CLINIC_INFO.max} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors" title="Max">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex flex-col items-start group">
              <div><RKLogo /></div>
                
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
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

          {/* Мобильная полоса: иконки мессенджеров + меню */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            <a href={CLINIC_INFO.telegram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" title="Telegram" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" title="WhatsApp" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={CLINIC_INFO.max} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" title="Max" aria-label="Max">
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-foreground rounded-lg hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className="text-lg font-medium py-2 border-b border-border/50"
                  onClick={closeMenu}
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

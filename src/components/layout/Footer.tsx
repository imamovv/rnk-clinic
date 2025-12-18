import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold tracking-widest text-primary">
                KILIA
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-gray-400">
                Clinic
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Центр эстетической косметологии лица и тела. Мы объединяем передовые технологии и искусство красоты.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Меню</h3>
            <ul className="space-y-3">
              <li><Link href="/services"><a className="text-gray-400 hover:text-primary transition-colors">Услуги</a></Link></li>
              <li><Link href="/doctors"><a className="text-gray-400 hover:text-primary transition-colors">Специалисты</a></Link></li>
              <li><Link href="/prices"><a className="text-gray-400 hover:text-primary transition-colors">Прайс-лист</a></Link></li>
              <li><Link href="/about"><a className="text-gray-400 hover:text-primary transition-colors">О клинике</a></Link></li>
              <li><Link href="/contacts"><a className="text-gray-400 hover:text-primary transition-colors">Контакты</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Направления</h3>
            <ul className="space-y-3">
              <li><Link href="/services/injectables"><a className="text-gray-400 hover:text-primary transition-colors">Инъекционная косметология</a></Link></li>
              <li><Link href="/services/laser"><a className="text-gray-400 hover:text-primary transition-colors">Лазерная косметология</a></Link></li>
              <li><Link href="/services/body"><a className="text-gray-400 hover:text-primary transition-colors">Коррекция фигуры</a></Link></li>
              <li><Link href="/services/facial"><a className="text-gray-400 hover:text-primary transition-colors">Уход за лицом</a></Link></li>
              <li><Link href="/services/men"><a className="text-gray-400 hover:text-primary transition-colors">Мужская косметология</a></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Москва, ул. Пречистенка,<br />д. 40/2, стр. 1</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@kiliaclinic.ru" className="hover:text-white transition-colors">info@kiliaclinic.ru</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Ежедневно<br />10:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 KILIA CLINIC. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-300">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

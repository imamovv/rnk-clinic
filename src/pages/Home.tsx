import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { YandexMap } from "@/components/ui/map";
import { ArrowRight, Star, Shield, Heart, Sparkles } from "lucide-react";

// Asset imports
import heroBg from "@/assets/generated_images/modern_luxury_aesthetic_clinic_reception.png";
import faceImg from "@/assets/generated_images/woman_with_glowing_skin_close_up.png";
import injectImg from "@/assets/generated_images/aesthetic_injection_procedure.png";
import laserImg from "@/assets/generated_images/modern_laser_cosmetology_equipment.png";

import { DoctorsSection } from "@/components/sections/DoctorsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-in fade-in duration-1000"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left pt-20">
          <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 fade-in">
            <span className="inline-block py-1 px-3 mb-6 border border-white/30 rounded-full text-xs font-medium tracking-widest text-white uppercase backdrop-blur-sm bg-white/10">
              Косметология премиум класса
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <div className="inline-block">
                Искусство
              </div>
              <div className="md:inline-block">
                <span className="text-primary italic font-serif pr-2">естественной</span>
                <span className="md:hidden"><br /></span>
                красоты
              </div>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light leading-relaxed">
              KILIA CLINIC — это пространство эстетической медицины, где передовые технологии встречаются с заботой о вашей уникальности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base">
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 h-14 text-base backdrop-blur-sm bg-white/5">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-6xl rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Команда экспертов</h3>
              <p className="text-muted-foreground text-sm">Врачи-косметологи с медицинским образованием и многолетним опытом</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Безопасность</h3>
              <p className="text-muted-foreground text-sm">Только сертифицированные препараты и оборудование экспертного класса</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground text-sm">Персональные программы преображения для каждого пациента</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Мы предлагаем полный спектр процедур для сохранения молодости и красоты вашего лица и тела
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <ServiceCard 
              image={injectImg}
              title="Инъекционная косметология"
              description="Биоревитализация, мезотерапия, контурная пластика и ботулинотерапия для мгновенного омоложения."
              link="/services/injectables"
            />
            
            {/* Service Card 2 */}
            <ServiceCard 
              image={laserImg}
              title="Аппаратная косметология"
              description="SMAS-лифтинг, лазерное омоложение, удаление сосудов и пигментации на передовом оборудовании."
              link="/services/hardware"
            />

            {/* Service Card 3 */}
            <ServiceCard 
              image={faceImg}
              title="Эстетика лица"
              description="Уходовые процедуры, пилинги и чистки для сияния и здоровья вашей кожи."
              link="/services/aesthetic"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 rounded-full">
                Посмотреть все услуги
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DoctorsSection />

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src={heroBg} 
                alt="Interior" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="text-primary w-5 h-5" />
                  <span className="font-bold text-lg">Premium Quality</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Мы используем только лучшее оборудование и препараты мировых брендов
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-2 block">О клинике</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Добро пожаловать в <br/>KILIA CLINIC</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Наша клиника — это место, где высокие стандарты медицины сочетаются с искусством создания красоты. Мы верим, что каждый человек уникален, и наша задача — подчеркнуть вашу природную красоту, сохранив индивидуальность.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Лицензированная медицинская деятельность</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Врачи-эксперты с международной практикой</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Премиальный сервис и комфорт</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                Подробнее о нас
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <YandexMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Готовы к преображению?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Запишитесь на первичную консультацию, и наши специалисты составят для вас индивидуальный план процедур.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base">
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black rounded-full px-10 h-14 text-base backdrop-blur-sm">
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

function ServiceCard({ image, title, description, link }: { image: string, title: string, description: string, link: string }) {
  return (
    <Link href={link}>
      <a className="group block">
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            <span className="text-primary text-sm font-medium flex items-center group/btn">
              Подробнее
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}

import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { YandexMap } from "@/components/ui/map";
import { ArrowRight, Star, Shield, Heart, Sparkles } from "lucide-react";
import { TelegramPostWidget } from '@baranov-guru/react-telegram-widgets';
// Asset imports
import heroBg from "@/assets/generated_images/modern_luxury_aesthetic_clinic_reception.png";
import faceImg from "@/assets/generated_images/woman_with_glowing_skin_close_up.png";
import injectImg from "@/assets/generated_images/aesthetic_injection_procedure.png";
import laserImg from "@/assets/generated_images/modern_laser_cosmetology_equipment.png";

import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { YandexReviews } from "@/components/ui/yandexreviewwidget";


const TELEGRAM_POSTS = [
  "RKclinic/36",
  "RKclinic/33",
  "RKclinic/107",
  "RKclinic/103",
  "RKclinic/95",
];
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
      {/* <div className="flex"> 
        <TelegramPostWidget
          post="RKclinic/36"   // например: mychannel/123
          width="100%"
          dark={true}
        />
        <TelegramPostWidget
          post="RKclinic/33"   // например: mychannel/123
          width="100%"
          dark={true}
        />
        <TelegramPostWidget
          post="RKclinic/107"   // например: mychannel/123
          width="100%"
          dark={true}
        />
        <TelegramPostWidget
          post="RKclinic/103"   // например: mychannel/123
          width="100%"
          dark={true}
        />
        <TelegramPostWidget
          post="RKclinic/95"   // например: mychannel/123
          width="100%"
          dark={true}
        />
      </div> */}
        
       <TelegramPostsSection />
       <YandexReviews />
        
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


import { useState } from "react";

function TelegramPostsSection() {
  const [current, setCurrent] = useState(0);
  const totalPosts = TELEGRAM_POSTS.length;

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мы в Telegram</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Подписывайтесь на наш канал, чтобы быть в курсе новостей, акций и полезных советов по уходу за собой.
          </p>
        </div>

        {/* Карусель - ТОЛЬКО один активный пост по центру */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl" 
               style={{ height: '280px sm:320px md:360px lg:420px xl:580px' }}>
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TELEGRAM_POSTS.map((post, index) => (
                <div
                  key={post}
                  className="w-full flex-shrink-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 h-full"
                >
                  <TelegramPostCardWide post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Стрелки */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + totalPosts) % totalPosts)}
            className="absolute left-4 top-1/2 -translate-y-1/2 
                       w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                       bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl 
                       hover:bg-primary hover:text-primary-foreground transition-all z-30
                       flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold
                       border-2 border-border/50 hover:border-primary/50 hover:shadow-primary/20"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % totalPosts)}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                       bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl 
                       hover:bg-primary hover:text-primary-foreground transition-all z-30
                       flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold
                       border-2 border-border/50 hover:border-primary/50 hover:shadow-primary/20"
          >
            ›
          </button>

          {/* Точки */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 lg:mt-12">
            {TELEGRAM_POSTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-500 shadow-lg ${
                  current === i 
                    ? "bg-primary scale-125 shadow-primary/50 ring-2 ring-primary/30" 
                    : "bg-muted/70 hover:bg-primary/50 hover:scale-110"
                }`}
                aria-label={`Пост ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



interface TelegramPostCardWideProps {
  post: string;
}

const TelegramPostCardWide: React.FC<TelegramPostCardWideProps> = ({ post }) => {
  return (
    <div
      className="
        flex flex-col 
        bg-primary text-white
        rounded-2xl overflow-hidden shadow-xl
        w-full
        h-64 sm:h-80 md:h-96 lg:h-[460px] xl:h-[520px]
        transition-all duration-300
      "
    >
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900">
        <div className="flex items-start justify-center p-2 sm:p-4 h-full">
          <TelegramPostWidget
            post={post}
            width="100%"
            dark={true}
          />
        </div>
      </div>

      <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-slate-700 text-xs sm:text-sm text-slate-300 flex justify-between items-center">
        <span className="font-medium">@RKclinic</span>
        <a
          href={`https://t.me/${post}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors font-medium hover:underline flex items-center gap-1"
        >
          Открыть в Telegram →
        </a>
      </div>
    </div>
  );
};



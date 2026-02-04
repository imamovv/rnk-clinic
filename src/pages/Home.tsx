import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { YandexMap } from "@/components/ui/map";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Star, Shield, Heart, Sparkles } from "lucide-react";
// import { TelegramPostWidget } from '@baranov-guru/react-telegram-widgets';
// Asset imports
import aboutImg from "@/assets/generated_images/IMG_5946.jpg";
import faceImg from "@/assets/generated_images/woman_with_glowing_skin_close_up.png";
import injectImg from "@/assets/generated_images/aesthetic_injection_procedure.png";
import laserImg from "@/assets/generated_images/modern_laser_cosmetology_equipment.png";

import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { YandexReviews } from "@/components/ui/yandexreviewwidget";
import { MEDICAL_SERVICES } from "@/data/services";

// const TELEGRAM_POSTS = [
//   "RKclinic/36",
//   "RKclinic/33",
//   "RKclinic/107",
//   "RKclinic/103",
//   "RKclinic/95",
// ];
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section: описание слева, видео справа, шелковый фон */}
      <section className="relative min-h-[70svh] sm:min-h-[75svh] lg:min-h-[600px] overflow-hidden">
        {/* Шелковый/переливающийся фон */}
        <div className="absolute inset-0 z-0 hero-silky-bg" />

        <div className="relative z-10 container mx-auto px-4 pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pt-28 lg:pb-20 min-h-[70svh] sm:min-h-[75svh] lg:min-h-[600px] flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Левая колонка — логотип по размеру текста (заголовок + абзац), серебристый */}
          <div className="flex-1 flex flex-col justify-center text-left max-w-2xl lg:max-w-none relative">
            {/* Блок текста: логотип на заднем плане в размер этого блока */}
            <div className="relative">
              {/* Логотип — размером во весь блок текста, серебристый, слегка размыт */}
              <div className="absolute inset-0 pointer-events-none z-0 select-none flex items-center justify-center">
                <img
                  src="/rnklogo.svg"
                  alt=""
                  className="w-full h-full max-w-[min(100%,28rem)] max-h-[18rem] sm:max-h-[22rem] lg:max-h-[26rem] object-contain opacity-55"
                  style={{ filter: 'brightness(2.2) saturate(0) contrast(1.05) blur(3px)' }}
                  aria-hidden
                />
              </div>
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 mb-4 sm:mb-6 border border-white/30 rounded-full text-xs font-medium tracking-widest text-white uppercase backdrop-blur-sm bg-white/10 w-fit">
                  Косметология премиум класса
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  <span className="block">Когда восстановление</span>
                  <span className="text-[hsl(180,45%,80%)] italic font-serif">становится</span> искусством
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-10 max-w-xl font-light leading-relaxed">
                  R&K CLINIC — это пространство эстетической медицины, где передовые технологии встречаются с заботой о вашей уникальности.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base transition-colors duration-300">
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base backdrop-blur-sm bg-white/5 transition-colors duration-300">
                Наши услуги
              </Button>
            </div>
          </div>

          {/* Правая колонка — видео с размытыми краями */}
          <div className="flex-shrink-0 w-full lg:w-[45%] xl:w-[48%] mt-8 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/3] lg:aspect-[3/4] lg:max-w-none overflow-hidden rounded-2xl hero-video-blur-edge">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/movie_1.mp4"
                muted
                loop
                autoPlay
                playsInline
                aria-label="Видео о клинике"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 sm:py-10 md:py-12 bg-white border-b border-border relative z-20 -mt-4 sm:-mt-6 md:-mt-8 mx-3 sm:mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-lg transition-smooth">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
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
            {/* About Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src={aboutImg} 
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Добро пожаловать в <br/>R&K CLINIC</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
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
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Наши услуги</h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Мы предлагаем полный спектр процедур для сохранения молодости и красоты вашего лица и тела
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

          <div className="text-center mt-8 sm:mt-12">
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




      {/* Services Accordion Section */}
      <section id="services-accordion" className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Полный спектр медицинских услуг</h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Комплексное обслуживание для вашего здоровья и красоты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {MEDICAL_SERVICES.map((service) => (
                <AccordionItem key={service.slug} value={service.slug} className="border-b border-border/50 last:border-0">
                  <AccordionTrigger className="py-3 sm:py-4 text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 data-[state=open]:text-primary">
                    {service.emoji} {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-base text-muted-foreground">
                    <p className="mb-4">{service.shortDescription}</p>
                    <Link href={`/services/${service.slug}`}>
                      <a>
                        <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                        </Button>
                      </a>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <YandexMap />
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
        
       {/* <TelegramPostsSection /> */}
       <div className="container mx-auto px-4"><YandexReviews /></div>
       
       <section className="py-12 sm:py-16 lg:py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif">Готовы к преображению?</h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto">
            Запишитесь на первичную консультацию, и наши специалисты составят для вас индивидуальный план процедур.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base transition-colors duration-300">
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base backdrop-blur-sm transition-colors duration-300">
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
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
              {description}
            </p>
            <span className="text-primary text-sm font-medium flex items-center group/btn">
              Подробнее
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}


// import { useState } from "react";

// function TelegramPostsSection() {
//   const [current, setCurrent] = useState(0);
//   const totalPosts = TELEGRAM_POSTS.length;

//   return (
//     <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Мы в Telegram</h2>
//           <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-primary mx-auto mb-4 sm:mb-6" />
//           <p className="text-muted-foreground text-sm sm:text-base">
//             Подписывайтесь на наш канал, чтобы быть в курсе новостей, акций и полезных советов по уходу за собой.
//           </p>
//         </div>

//         {/* Карусель — фиксированная высота на всех экранах (не уменьшается при сужении) */}
//         <div className="relative max-w-2xl mx-auto">
//           <div className="overflow-hidden rounded-2xl shadow-xl border border-border bg-card h-[420px] min-h-[420px]">
//             <div 
//               className="flex transition-transform duration-500 ease-out h-full"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {TELEGRAM_POSTS.map((post) => (
//                 <div
//                   key={post}
//                   className="w-full flex-shrink-0 flex items-stretch justify-center p-4 sm:p-6 h-full min-w-0"
//                 >
//                   <TelegramPostCardWide post={post} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Стрелки — компактнее на мобиле */}
//           <button
//             onClick={() => setCurrent((prev) => (prev - 1 + totalPosts) % totalPosts)}
//             className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
//                        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
//                        bg-background/95 backdrop-blur-xl rounded-2xl shadow-lg 
//                        hover:bg-primary hover:text-primary-foreground transition-colors duration-300 z-30
//                        flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-bold
//                        border border-border/50 hover:border-primary/50"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => setCurrent((prev) => (prev + 1) % totalPosts)}
//             className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
//                        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
//                        bg-background/95 backdrop-blur-xl rounded-2xl shadow-lg 
//                        hover:bg-primary hover:text-primary-foreground transition-colors duration-300 z-30
//                        flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-bold
//                        border border-border/50 hover:border-primary/50"
//           >
//             ›
//           </button>

//           {/* Точки */}
//           <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10">
//             {TELEGRAM_POSTS.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
//                   current === i 
//                     ? "bg-primary scale-125 ring-2 ring-primary/30" 
//                     : "bg-muted/70 hover:bg-primary/50"
//                 }`}
//                 aria-label={`Пост ${i + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// interface TelegramPostCardWideProps {
//   post: string;
// }

// const TelegramPostCardWide: React.FC<TelegramPostCardWideProps> = ({ post }) => {
//   return (
//     <div className="flex flex-col bg-primary text-white rounded-xl overflow-hidden w-full h-full min-h-0 transition-all duration-300 border border-white/10">
//       {/* Область поста — фиксированная высота за счёт родителя, скролл при переполнении */}
//       <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
//         <div className="flex items-start justify-center p-2 sm:p-4 min-h-full [&_iframe]:max-w-full">
//           <TelegramPostWidget post={post} width="100%" dark={true} />
//         </div>
//       </div>
//       {/* Подвал карточки */}
//       <div className="shrink-0 px-3 sm:px-4 py-2.5 sm:py-3 border-t border-white/20 text-xs sm:text-sm text-white/90 flex justify-between items-center gap-2 bg-primary/95">
//         <span className="font-medium truncate">@RKclinic</span>
//         <a
//           href={`https://t.me/${post}`}
//           target="_blank"
//           rel="noreferrer"
//           className="shrink-0 hover:text-white transition-colors font-medium hover:underline flex items-center gap-1"
//         >
//           Открыть в Telegram →
//         </a>
//       </div>
//     </div>
//   );
// };



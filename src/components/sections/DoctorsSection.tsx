import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
//import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, X } from "lucide-react";

// Images
import doc1 from "@/assets/generated_images/professional_female_dermatologist.png";
import doc2 from "@/assets/generated_images/professional_male_plastic_surgeon.png";
import doc3 from "@/assets/generated_images/professional_female_cosmetologist.png";
import doc4 from "@/assets/generated_images/senior_female_aesthetic_doctor.png";
import doc5 from "@/assets/generated_images/male_trichologist.png";
import doc6 from "@/assets/generated_images/female_laser_specialist.png";
import doc7 from "@/assets/generated_images/female_nutritionist_beauty_expert.png";

type Doctor = {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
  description: string;
  specialization: string[];
  schedule: { day: string; hours: string }[];
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Др. Анна Петрова",
    role: "Дерматокосметолог",
    image: doc1,
    experience: "12 лет",
    description: "Ведущий специалист клиники по инъекционным методикам. Автор уникальных техник контурной пластики губ. Регулярный спикер международных конгрессов.",
    specialization: ["Контурная пластика", "Ботулинотерапия", "Лечение акне"],
    schedule: [
      { day: "Пн, Ср, Пт", hours: "10:00 - 18:00" },
      { day: "Сб", hours: "11:00 - 16:00" },
    ],
  },
  {
    id: 2,
    name: "Др. Михаил Соколов",
    role: "Пластический хирург",
    image: doc2,
    experience: "18 лет",
    description: "Специализируется на малоинвазивной хирургии лица и тела. Эксперт в области нитевого лифтинга Aptos.",
    specialization: ["Нитевой лифтинг", "Блефаропластика", "Липофилинг"],
    schedule: [
      { day: "Вт, Чт", hours: "09:00 - 20:00" },
    ],
  },
  {
    id: 3,
    name: "Елена Волкова",
    role: "Косметолог-эстетист",
    image: doc3,
    experience: "8 лет",
    description: "Мастер аппаратных методик омоложения. Знает все о том, как заставить вашу кожу сиять изнутри без инъекций.",
    specialization: ["Аппаратная косметология", "Чистки и пилинги", "Массаж лица"],
    schedule: [
      { day: "Ежедневно", hours: "10:00 - 22:00" },
    ],
  },
  {
    id: 4,
    name: "Др. София Романова",
    role: "Главный врач",
    image: doc4,
    experience: "25 лет",
    description: "Основатель клиники, кандидат медицинских наук. Разрабатывает индивидуальные anti-age программы для VIP-клиентов.",
    specialization: ["Anti-age терапия", "Генетика", "Сложные случаи"],
    schedule: [
      { day: "Пн, Чт", hours: "12:00 - 18:00" },
    ],
  },
  {
    id: 5,
    name: "Др. Алексей Морозов",
    role: "Трихолог",
    image: doc5,
    experience: "10 лет",
    description: "Эксперт по здоровью волос и кожи головы. Проводит диагностику и лечение всех видов алопеции.",
    specialization: ["Лечение волос", "Мезотерапия головы", "Плазмолифтинг"],
    schedule: [
      { day: "Ср, Сб, Вс", hours: "10:00 - 20:00" },
    ],
  },
  {
    id: 6,
    name: "Др. Виктория Ким",
    role: "Лазеротерапевт",
    image: doc6,
    experience: "9 лет",
    description: "Виртуозно владеет всеми видами лазерного оборудования. Удаление пигментации, сосудов и татуажа любой сложности.",
    specialization: ["Лазерная шлифовка", "Удаление сосудов", "SMAS-лифтинг"],
    schedule: [
      { day: "Вт, Пт, Вс", hours: "09:00 - 21:00" },
    ],
  },
  {
    id: 7,
    name: "Мария Иванова",
    role: "Нутрициолог",
    image: doc7,
    experience: "7 лет",
    description: "Помогает наладить внутренние процессы организма для достижения внешней красоты. Комплексный подход к здоровью.",
    specialization: ["Detox-программы", "Коррекция веса", "Витаминотерапия"],
    schedule: [
      { day: "Онлайн / Очно", hours: "По записи" },
    ],
  },
];

export function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 skew-x-12 transform translate-x-1/2 -z-10"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-2 block animate-in slide-in-from-left-5 fade-in duration-500">
              Наши специалисты
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Команда <span className="text-primary italic">профессионалов</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Врачи высшей категории, постоянно повышающие свою квалификацию в лучших клиниках мира.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            {/* Custom Navigation Buttons can go here if we want external controls */}
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 pb-10">
            {doctors.map((doctor) => (
              <CarouselItem key={doctor.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-full">
                  <div 
                    className="group relative h-full cursor-pointer"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                          <span className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Подробнее
                          </span>
                       </div>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">
                        {doctor.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 pr-4 md:pr-0">
             <CarouselPrevious className="static translate-y-0" />
             <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <Dialog open={!!selectedDoctor} onOpenChange={(open) => !open && setSelectedDoctor(null)}>
          <DialogContent
            className="max-w-3xl w-[95vw] p-0 gap-0 overflow-hidden border border-border bg-white shadow-xl
              max-h-[90dvh] sm:max-h-[88vh] left-1/2 -translate-x-1/2
              top-[5vh] sm:top-[50%] sm:-translate-y-1/2
              rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out
              [&>button]:hidden [&>button]:md:inline-flex"
          >
            {selectedDoctor && (
              <>
                {/* Мобильная шапка: всегда видна, кнопка закрытия в зоне большого пальца */}
                <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 bg-white border-b border-border shrink-0 md:hidden">
                  <span className="text-sm font-semibold text-foreground truncate">{selectedDoctor.name}</span>
                  <DialogClose
                    className="rounded-full p-2.5 bg-muted hover:bg-muted/80 text-foreground touch-manipulation"
                    aria-label="Закрыть"
                  >
                    <X className="h-5 w-5" />
                  </DialogClose>
                </div>

                <div className="flex flex-col md:flex-row min-h-0 overflow-y-auto overflow-x-hidden max-h-[calc(90dvh-52px)] sm:max-h-none md:max-h-[88vh]">
                  {/* Фото врача: на мобиле компактно, лицо в фокусе (object-top), без сильного градиента */}
                  <div className="md:w-2/5 relative shrink-0 h-44 sm:h-52 md:h-auto md:min-h-[320px]">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-full h-full object-cover object-top md:object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:from-transparent md:to-transparent pointer-events-none" />
                  </div>

                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center min-w-0">
                    <DialogHeader className="mb-4 md:mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary text-primary hover:bg-primary/10 text-xs">
                          {selectedDoctor.experience} стаж
                        </Badge>
                      </div>
                      <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-1">
                        {selectedDoctor.name}
                      </DialogTitle>
                      <DialogDescription className="text-base md:text-lg font-medium text-primary uppercase tracking-wide">
                        {selectedDoctor.role}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                          <Star className="w-4 h-4 text-primary shrink-0" />
                          Специализация
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedDoctor.specialization.map((spec, i) => (
                            <span key={i} className="text-xs sm:text-sm bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-secondary-foreground">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">
                          {selectedDoctor.description}
                        </p>
                      </div>

                      <div className="bg-secondary/30 p-3 sm:p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          График приема
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {selectedDoctor.schedule.map((slot, i) => (
                            <li key={i} className="flex justify-between text-xs sm:text-sm border-b border-border/50 last:border-0 pb-1.5 last:pb-0">
                              <span className="font-medium">{slot.day}</span>
                              <span className="flex items-center gap-1.5 text-muted-foreground">
                                <Clock className="w-3 h-3 shrink-0" />
                                {slot.hours}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-11 sm:h-12 text-base sm:text-lg touch-manipulation">
                        Записаться на прием
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

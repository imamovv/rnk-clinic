import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { ArrowLeft } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug ?? "";
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
          <Link href="/">
            <a>
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <Link href="/#services-accordion">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4" />
            Все услуги
          </a>
        </Link>

        <article className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl" aria-hidden>
              {service.emoji}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {service.title}
            </h1>
          </div>

          <div className="prose prose-neutral max-w-none text-muted-foreground">
            <div className="whitespace-pre-wrap text-base sm:text-lg leading-relaxed">
              {service.fullDescription}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <a href="tel:+79179000240">Записаться на приём</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
              <Link href="/">
                <a>На главную</a>
              </Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

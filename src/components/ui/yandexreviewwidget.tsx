// src/components/YandexReviews.tsx
import { useYandexReviews } from '../hooks/useYandexWidgetReviews';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size: string;
  fillColor?: string;
}

const StarRating = memo(({ rating, size, fillColor = 'text-primary' }: StarRatingProps) => (
  <div className="flex gap-2 justify-center">
    {Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className={`${size} ${fillColor} fill-current`} />
      ) : (
        <FaStar key={i} className={`${size} text-gray-200`} />
      )
    )}
  </div>
));

StarRating.displayName = 'StarRating';

interface CarouselIndicatorsProps {
  length: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const CarouselIndicators = memo(({ length, currentIndex, onSelect }: CarouselIndicatorsProps) => (
  <div className="flex justify-center gap-2">
    {Array.from({ length }, (_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`transition-all duration-300 rounded-full ${
          index === currentIndex
            ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-primary scale-100'
            : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-muted hover:bg-primary/50'
        }`}
        aria-label={`Отзыв ${index + 1}`}
      />
    ))}
  </div>
));

CarouselIndicators.displayName = 'CarouselIndicators';

interface NavButtonProps {
  onClick: () => void;
  direction: 'prev' | 'next';
}

const NavButton = memo(({ onClick, direction }: NavButtonProps) => (
  <button
    onClick={onClick}
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors duration-300 flex items-center justify-center hover:bg-primary/5"
    aria-label={direction === 'prev' ? 'Предыдущий отзыв' : 'Следующий отзыв'}
  >
    {direction === 'prev' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
  </button>
));

NavButton.displayName = 'NavButton';

const YandexReviewsContent = ({ reviews, loading, error }: ReturnType<typeof useYandexReviews>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автопрокрутка
  useEffect(() => {
    if (loading || error || reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length, loading, error]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const currentReview = reviews[currentIndex];
  const avgRating = useMemo(
    () => reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    [reviews]
  );

  if (loading) {
    return (
      <div className="text-center py-10 sm:py-16">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base">Загрузка отзывов...</p>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return <div className="text-center py-8 sm:py-12 text-muted-foreground text-sm sm:text-base">Отзывы недоступны</div>;
  }

  return (
    <div className="bg-background px-0 py-0">
      {/* Заголовок + рейтинг */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
          Отзывы наших пациентов
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <StarRating rating={Math.floor(avgRating)} size="w-4 h-4 sm:w-5 sm:h-5" />
          <div className="text-xl sm:text-2xl font-bold text-foreground">
            {avgRating.toFixed(1)}
          </div>
          <span className="text-muted-foreground text-xs sm:text-sm">({reviews.length} отзывов)</span>
        </div>
      </div>

      {/* Карусель */}
      <div className="relative">
        {/* Текущий отзыв */}
        <div className="mb-6 sm:mb-10">
          <div className="bg-secondary/50 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex flex-col justify-center transition-smooth">
            {/* Звезды отзыва */}
            <div className="mb-4 sm:mb-6">
              <StarRating rating={currentReview.rating} size="w-4 h-4" fillColor="text-primary" />
            </div>

            {/* Текст отзыва */}
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed mb-5 sm:mb-8 italic font-light line-clamp-5 sm:line-clamp-none">
              "{currentReview.text}"
            </p>

            {/* Автор + дата */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={currentReview.avatar || '/default-avatar.png'}
                alt={currentReview.author}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-border"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">
                  {currentReview.author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">{currentReview.date}</p>
              </div>
            </div>
          </div>
        </div>

        <CarouselIndicators 
          length={reviews.length} 
          currentIndex={currentIndex} 
          onSelect={handleIndicatorClick}
        />

        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
          <NavButton onClick={handlePrev} direction="prev" />
          <span className="text-xs sm:text-sm text-muted-foreground min-w-[52px] sm:min-w-[60px] text-center">
            {currentIndex + 1} / {reviews.length}
          </span>
          <NavButton onClick={handleNext} direction="next" />
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <a
          href="https://yandex.ru/maps/org/r_k_clinic/43778375610"
          target="_blank"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 group"
          rel="noopener noreferrer"
        >
          Все отзывы на Яндекс.Картах
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const YandexReviews = memo(() => {
  const reviewsData = useYandexReviews();
  return <YandexReviewsContent {...reviewsData} />;
});

YandexReviews.displayName = 'YandexReviews';

export { YandexReviews };

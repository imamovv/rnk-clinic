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
        className={`transition-all duration-300 ${
          index === currentIndex
            ? 'w-8 h-2 bg-primary'
            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
        } rounded-full`}
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
    className="w-10 h-10 rounded-full border border-gray-200 hover:border-primary hover:text-primary text-gray-600 transition-all duration-300 flex items-center justify-center hover:bg-primary/5"
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
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-gray-500 mt-4">Загрузка отзывов...</p>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return <div className="text-center py-12 text-gray-400">Отзывы недоступны</div>;
  }

  return (
    <div className="bg-white px-0 py-0">
      {/* Заголовок + рейтинг */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Отзывы наших пациентов
        </h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <StarRating rating={Math.floor(avgRating)} size="w-5 h-5" />
          <div className="text-2xl font-bold text-gray-900">
            {avgRating.toFixed(1)}
          </div>
          <span className="text-gray-500 text-sm">({reviews.length} отзывов)</span>
        </div>
      </div>

      {/* Карусель */}
      <div className="relative">
        {/* Текущий отзыв */}
        <div className="mb-10">
          <div className="bg-gray-50 rounded-lg p-8 md:p-10 min-h-[320px] flex flex-col justify-center">
            {/* Звезды отзыва */}
            <div className="mb-6">
              <StarRating rating={currentReview.rating} size="w-4 h-4" fillColor="text-primary" />
            </div>

            {/* Текст отзыва */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic font-light">
              "{currentReview.text}"
            </p>

            {/* Автор + дата */}
            <div className="flex items-center gap-4">
              {/* Аватар */}
              <img
                src={currentReview.avatar || '/default-avatar.png'}
                alt={currentReview.author}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {currentReview.author}
                </p>
                <p className="text-sm text-gray-500">{currentReview.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Индикаторы карусели */}
        <CarouselIndicators 
          length={reviews.length} 
          currentIndex={currentIndex} 
          onSelect={handleIndicatorClick}
        />

        {/* Навигация */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <NavButton onClick={handlePrev} direction="prev" />
          
          <span className="text-sm text-gray-500 min-w-[60px] text-center">
            {currentIndex + 1} / {reviews.length}
          </span>
          
          <NavButton onClick={handleNext} direction="next" />
        </div>
      </div>

      {/* Ссылка на все отзывы */}
      <div className="text-center mt-12">
        <a
          href="https://yandex.ru/maps/org/r_k_clinic/43778375610"
          target="_blank"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 group"
          rel="noopener noreferrer"
        >
          Все отзывы на Яндекс.Картах
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

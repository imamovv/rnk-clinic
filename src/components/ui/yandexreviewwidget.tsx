// src/components/YandexReviews.tsx
import { useYandexReviews } from '../hooks/useYandexWidgetReviews';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const YandexReviews: React.FC = () => {
  const { reviews, loading, error } = useYandexReviews();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автопрокрутка
  useEffect(() => {
    if (loading || error || reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5 секунд на отзыв

    return () => clearInterval(interval);
  }, [reviews.length, loading, error]);

  if (loading) {
    return <div className="text-center py-8">Загрузка отзывов...</div>;
  }

  if (error || reviews.length === 0) {
    return <div className="text-center py-8 text-red-500">Ошибка загрузки отзывов</div>;
  }

  const currentReview = reviews[currentIndex];
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto p-8 relative overflow-hidden">
      {/* Фон градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>

      {/* Заголовок + рейтинг */}
      <div className="relative z-10 text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`w-7 h-7 transition-all ${
                  i < Math.floor(avgRating)
                    ? 'text-yellow-400 fill-current scale-110'
                    : i < avgRating
                    ? 'text-yellow-300 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {avgRating.toFixed(1)}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Что говорят клиенты</h2>
        <p className="text-xl text-gray-600">{reviews.length} отзывов</p>
      </div>

      {/* Карусель */}
      <div className="relative z-10">
        {/* Текущий отзыв */}
        <div className="text-center mb-8 animate-fade-in">
          {/* Аватар */}
          <div className="mx-auto mb-6">
            <img
              src={currentReview.avatar || '/default-avatar.png'}
              alt={currentReview.author}
              className="w-24 h-24 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-100 mx-auto"
            />
          </div>

          {/* Автор + дата */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {currentReview.author}
            </h3>
            <p className="text-lg text-gray-500">{currentReview.date}</p>
          </div>

          {/* Звезды отзыва */}
          <div className="flex gap-1 justify-center mb-8">
            {Array.from({ length: 5 }, (_, i) =>
              i < currentReview.rating ? (
                <FaStar key={i} className="w-7 h-7 text-yellow-400 fill-current drop-shadow-lg" />
              ) : (
                <FaStar key={i} className="w-7 h-7 text-gray-300" />
              )
            )}
          </div>

          {/* Текст отзыва */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed italic text-gray-800 font-medium">
              "{currentReview.text}"
            </p>
          </div>
        </div>

        {/* Индикаторы карусели */}
        <div className="flex justify-center gap-3 mb-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Отзыв ${index + 1}`}
            />
          ))}
        </div>

        {/* Навигация */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="w-14 h-14 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-xl font-semibold text-gray-600 self-center">
            {currentIndex + 1} / {reviews.length}
          </span>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
            className="w-14 h-14 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Кнопка */}
      <div className="relative z-10 text-center">
        <a
          href="https://yandex.ru/maps/org/r_k_clinic/43778375610"
          target="_blank"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 hover:from-blue-700 hover:to-pink-700"
          rel="noopener noreferrer"
        >
          Все {reviews.length} отзывов
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export { YandexReviews };

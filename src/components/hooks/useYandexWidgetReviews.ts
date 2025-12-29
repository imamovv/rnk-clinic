// src/hooks/useYandexReviews.ts
import { useState, useEffect } from 'react';

interface YandexReview {
  author: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}

export const useYandexReviews = () => {
  const [reviews, setReviews] = useState<YandexReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const widgetID = '43778375610';
        // ✅ Правильный URL с отзывами
        const response = await fetch(`/yandex-reviews/${widgetID}?comments`);
        if (!response.ok) throw new Error('Fetch failed');

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // ✅ Парсим ВСЕ .comment блоки (5 штук)
        const commentElements = doc.querySelectorAll('.comment');
        const parsedReviews: YandexReview[] = [];
        commentElements.forEach((commentEl, index) => {
          // Автор
          
          const authorEl = commentEl.querySelector('.comment__name');
          const author = authorEl?.textContent?.trim() || `Клиент ${index + 1}`;
          // Дата
          const dateEl = commentEl.querySelector('.comment__date');
          const date = dateEl?.textContent?.trim() || 'Недавно';

          // Текст отзыва
          const textEl = commentEl.querySelector('.comment__text');
          let text = textEl?.textContent?.trim() || '';
          // Убираем "ещё" ссылку из текста
          text = text.replace(/\.\.\. ещё.*/, '').trim();
          // Рейтинг (всегда 5 звезд)
          const stars = commentEl.querySelectorAll('.comment__stars .stars-list__star');
          const rating = stars.length;

          // Аватар
          const avatarEl = commentEl.querySelector('.comment__header img');
          const avatar = avatarEl?.getAttribute('src') || '';
          parsedReviews.push({
            author,
            date,
            rating,
            text: text.slice(0, 200) + (text.length > 200 ? '...' : ''),
            avatar
          });
        });

        setReviews(parsedReviews); // ✅ Все 5 отзывов
      } catch (err) {
        console.error('Парсинг отзывов:', err);
        setError('Ошибка парсинга');
        setReviews([]); // Покажет ошибку
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

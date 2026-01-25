// src/hooks/useYandexReviews.ts
import { useState, useEffect, useRef } from 'react';

interface YandexReview {
  author: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}

// Кеш для отзывов с TTL 1 час
const CACHE_KEY = 'yandex_reviews_cache';
const CACHE_TTL = 60 * 60 * 1000; // 1 час

interface CacheData {
  reviews: YandexReview[];
  timestamp: number;
}

const getFromCache = (): YandexReview[] | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CacheData = JSON.parse(cached);
    const isExpired = Date.now() - data.timestamp > CACHE_TTL;
    
    return isExpired ? null : data.reviews;
  } catch {
    return null;
  }
};

const setToCache = (reviews: YandexReview[]): void => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      reviews,
      timestamp: Date.now()
    }));
  } catch {
    // Ignore cache errors
  }
};

export const useYandexReviews = () => {
  const [reviews, setReviews] = useState<YandexReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Проверяем кеш
    const cachedReviews = getFromCache();
    if (cachedReviews) {
      setReviews(cachedReviews);
      setLoading(false);
      return;
    }

    const fetchReviews = async () => {
      try {
        // Отменяем предыдущий запрос если он есть
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        setLoading(true);
        setError(null);
        const widgetID = '43778375610';
        
        const response = await fetch(`/yandex-reviews/${widgetID}?comments`, {
          signal: abortControllerRef.current.signal
        });
        
        if (!response.ok) throw new Error('Fetch failed');

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const commentElements = doc.querySelectorAll('.comment');
        const parsedReviews: YandexReview[] = [];
        
        commentElements.forEach((commentEl, index) => {
          const authorEl = commentEl.querySelector('.comment__name');
          const author = authorEl?.textContent?.trim() || `Клиент ${index + 1}`;
          
          const dateEl = commentEl.querySelector('.comment__date');
          const date = dateEl?.textContent?.trim() || 'Недавно';

          const textEl = commentEl.querySelector('.comment__text');
          let text = textEl?.textContent?.trim() || '';
          text = text.replace(/\.\.\. ещё.*/, '').trim();
          
          const stars = commentEl.querySelectorAll('.comment__stars .stars-list__star');
          const rating = stars.length;

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

        setReviews(parsedReviews);
        setToCache(parsedReviews);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return; // Запрос отменён, не ошибка
        }
        console.error('Парсинг отзывов:', err);
        setError('Ошибка парсинга');
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();

    // Очистка при размонтировании
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return { reviews, loading, error };
};

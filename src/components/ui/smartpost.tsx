import React, { useState, useEffect, useCallback } from 'react';
import { TelegramPostWidget } from '@baranov-guru/react-telegram-widgets';

interface SmartPostProps {
  postId: string;
  channel?: string; // по умолчанию RKclinic
}

const SmartPost: React.FC<SmartPostProps> = ({ 
  postId, 
  channel = 'RKclinic' 
}) => {
  const [isBigMedia, setIsBigMedia] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const checkBigMedia = useCallback(() => {
    const widget = document.querySelector(`iframe[src*="t.me/${channel}/${postId}"]`) 
      || document.querySelector('[data-telegram-post]');
    
    if (widget) {
      const container = widget.closest('.telegram-post') || widget.parentElement;
      const hasBigMediaError = container?.textContent?.includes('media is too big') 
        || container?.innerText?.includes('media is too big');
      
      if (hasBigMediaError) {
        setIsBigMedia(true);
      }
    }
    setIsLoaded(true);
  }, [postId, channel]);

  useEffect(() => {
    // Даём время на загрузку виджета
    const timeoutId = window.setTimeout(checkBigMedia, 2500);
    
    // Проверяем ещё раз через MutationObserver для динамических изменений
    const observer = new MutationObserver(() => {
      if (!isBigMedia) {
        checkBigMedia();
      }
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      characterData: true 
    });

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [checkBigMedia, isBigMedia]);

  const getPreviewUrl = (): string => {
    // Telegram Instant View URL для превью поста
    return `https://t.me/iv?url=https://t.me/${channel}/${postId}&rhash=333a1a2b0a1b6b`;
  };

  const postLink = `https://t.me/${channel}/${postId}`;

  if (isBigMedia) {
    return (
      <div className="big-media-fallback p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="mb-4">
          <img 
            src={getPreviewUrl()}
            alt={`Пост ${channel}/${postId}`}
            className="w-full max-w-md h-48 object-cover rounded-lg shadow-md mx-auto"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Видео слишком большое для предварительного просмотра
          </p>
          <a 
            href={postLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Смотреть в Telegram →
          </a>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="animate-pulse p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="telegram-post-container">
      <TelegramPostWidget 
        post={`${channel}/${postId}`}
        width="100%"
        dark={true}
      />
    </div>
  );
};

export {SmartPost};

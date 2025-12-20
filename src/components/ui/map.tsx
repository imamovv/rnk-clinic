import React, { useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap: React.FC = () => {
  const mapRef = useRef<any>(null);
  
  const clinicCoords: number[] = [55.810250, 49.074860]; // Р.К. Клиник
  
  const clinicInfo = {
    hintContent: 'Р.К. Клиник - нажмите для информации',
    balloonContent: `
      <div style="padding: 10px;">
        <h3 style="margin-top: 0; color: #333;">Р.К. Клиник</h3>
        <p><strong>📍 Адрес:</strong> Казань, точные координаты</p>
        <p><strong>📞 Телефон:</strong> +7 (8442) XX-XX-XX</p>
        <p><strong>🕐 Часы работы:</strong> Пн-Пт 8:00-20:00</p>
        <a 
          href="https://yandex.ru/maps/org/r_k_clinic/43778375610/" 
          target="_blank"
          style="color: #fa6600; text-decoration: none; font-weight: bold;"
          onmouseover="this.style.textDecoration='underline'"
          onmouseout="this.style.textDecoration='none'"
        >
          📍 Подробнее на Яндекс.Картах
        </a>
        <p style="margin-top: 10px; font-size: 12px; color: #666; font-style: italic;">
          Медицинская клиника
        </p>
      </div>
    `,
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <YMaps>
        <Map
          instanceRef={mapRef}
          defaultState={{ 
            center: clinicCoords, 
            zoom: 16 
          }}
          width="100%" 
          height="100%"
        >
          <Placemark 
            geometry={clinicCoords}
            properties={clinicInfo}
            options={{
              openBalloonOnClick: true,
              preset: "islands#greenDotIcon",
              iconColor: '#fa6600',
              balloonCloseButton: true, // Добавляем кнопку закрытия
              hideIconOnBalloonOpen: false, // Не скрывать иконку при открытии
              balloonOffset: [0, -40], // Смещение балуна
            }}
            modules={['geoObject.addon.balloon']}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export { YandexMap };
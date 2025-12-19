import React, { useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap: React.FC = () => {
  const mapRef = useRef<any>(null);
  
  const clinicCoords: number[] = [55.810537,49.074210 ]; // Р.К. Клиник
  
  const clinicInfo = {
    hintContent: 'Р.К. Клиник',
    balloonContentHeader: '<h3>Р.К. Клиник</h3>',
    balloonContentBody: `
      <div>
        <strong>Адрес:</strong> Волгоград, точные координаты<br>
        <strong>Телефон:</strong> +7 (8442) XX-XX-XX<br>
        <strong>Часы работы:</strong> Пн-Пт 8:00-20:00<br>
        <a href="https://yandex.ru/maps/org/r_k_clinic/43778375610/" target="_blank">
          Подробнее на Яндекс.Картах
        </a>
      </div>
    `,
    balloonContentFooter: 'Медицинская клиника'
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
              preset: 'islands#icon',
              iconColor: '#fa6600'
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export {YandexMap};

import  { useRef, useMemo, memo } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const CLINIC_COORDS: [number, number] = [55.810250, 49.074860];

const CLINIC_INFO = {
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

const PlacemarkComponent = memo(() => (
  <Placemark 
    geometry={CLINIC_COORDS}
    properties={CLINIC_INFO}
    options={{
      openBalloonOnClick: true,
      preset: "islands#greenDotIcon",
      iconColor: '#fa6600',
      balloonCloseButton: true,
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -40],
    }}
    modules={['geoObject.addon.balloon']}
  />
));

PlacemarkComponent.displayName = 'PlacemarkComponent';

const YandexMapComponent = memo(() => {
  const mapRef = useRef<any>(null);
  
  const defaultState = useMemo(() => ({
    center: CLINIC_COORDS,
    zoom: 16
  }), []);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <YMaps>
        <Map
          instanceRef={mapRef}
          defaultState={defaultState}
          width="100%" 
          height="100%"
        >
          <PlacemarkComponent />
        </Map>
      </YMaps>
    </div>
  );
});

YandexMapComponent.displayName = 'YandexMap';

export { YandexMapComponent as YandexMap };
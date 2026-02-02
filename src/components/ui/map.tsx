import  { useRef, useMemo, memo } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { MapPin, ExternalLink } from 'lucide-react';

const CLINIC_COORDS: [number, number] = [55.810250, 49.074860];
const YANDEX_MAPS_LINK = 'https://yandex.ru/maps/org/r_k_clinic/43778375610/';

const CLINIC_INFO = {
  hintContent: 'Р.К. Клиник — нажмите для информации',
  balloonContent: `
    <div style="padding: 10px; font-family: system-ui, sans-serif;">
      <h3 style="margin-top: 0; color: #065353;">Р.К. Клиник</h3>
      <p><strong>📍 Адрес:</strong> г. Казань, ул. Краснококшайская 60, 2 этаж</p>
      <p><strong>📞 Телефон:</strong> +7 (917) 90-02-40</p>
      <p><strong>🕐 Часы работы:</strong> Ежедневно 10:00–22:00</p>
      <a 
        href="${YANDEX_MAPS_LINK}" 
        target="_blank"
        style="color: #065353; text-decoration: none; font-weight: bold;"
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
      preset: 'islands#greenDotIcon',
      iconColor: '#065353',
      balloonCloseButton: true,
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -40],
    }}
    modules={['geoObject.addon.balloon']}
  />
));

PlacemarkComponent.displayName = 'PlacemarkComponent';

const YandexMapComponent = memo(() => {
  const mapRef = useRef<unknown>(null);
  
  const defaultState = useMemo(() => ({
    center: CLINIC_COORDS,
    zoom: 16
  }), []);

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Как нас найти</h2>
        <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-primary mx-auto mb-4 sm:mb-6" />
        <p className="text-muted-foreground text-sm sm:text-base">
          г. Казань, ул. Краснококшайская 60, 2 этаж
        </p>
      </div>

      {/* Компактная карта: меньше высота на мобиле, стиль в духе сайта */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card transition-smooth">
        <div 
          className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
          aria-label="Карта: Р.К. Клиник на Яндекс.Картах"
        >
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

        {/* Кнопка для мобилы: открыть в приложении/браузере — удобно с телефона */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 sm:p-4 bg-secondary/30 border-t border-border">
          <a
            href={YANDEX_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            <MapPin className="w-4 h-4 shrink-0" />
            Маршрут в Яндекс.Картах
          </a>
          <a
            href={`https://yandex.ru/maps/?pt=${CLINIC_COORDS[1]},${CLINIC_COORDS[0]}&z=16&l=map`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            Открыть карту
          </a>
        </div>
      </div>
    </div>
  );
});

YandexMapComponent.displayName = 'YandexMap';

export { YandexMapComponent as YandexMap };

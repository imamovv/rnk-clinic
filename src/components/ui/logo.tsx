import React, {  useRef } from 'react';
import '@components/logo.css'; // Стили вынесены в отдельный файл

const RKLogo: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="wrapper justify-items-center">
      <svg 
        className=''
        id="rk-logo" 
        viewBox="0 0 320 320"
        ref={svgRef}
        width="50" 
        height="50"
      >
        <g id="circles" stroke="#0e5a52" strokeWidth="6" fill="none">
          <circle cx="160" cy="80" r="70"/>
          <circle cx="240" cy="160" r="70"/>
          <circle cx="160" cy="240" r="70"/>
          <circle cx="80" cy="160" r="70"/>
        </g>

        <g id="flower">
          {/* Верхний лепесток */}
          <path d="M160 110 C160 100,135 140,160 160 C160 160,180 140,160 110 Z" 
                fill="white" stroke="#0e5a52" strokeWidth="8"/>
          
          {/* Правый лепесток */}
          <path d="M210 160 C220 160,180 135,160 160 C160 160,180 180,210 160 Z" 
                fill="white" stroke="#0e5a52" strokeWidth="8"/>
          
          {/* Нижний лепесток */}
          <path d="M160 210 C160 220,185 180,160 160 C160 160,140 180,160 210 Z" 
                fill="white" stroke="#0e5a52" strokeWidth="8"/>
          
          {/* Левый лепесток */}
          <path d="M110 160 C100 160,140 185,160 160 C160 160,140 140,110 160 Z" 
                fill="white" stroke="#0e5a52" strokeWidth="8"/>
        </g>
      </svg>

      <div className="brand">R&K CLINIC</div>
      {/* <div className="sub">Регенеративная медицина и косметология</div> */}
    </div>
  );
};

export { RKLogo};
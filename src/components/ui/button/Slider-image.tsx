// En tu archivo Slider-image.tsx

import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; // Importa los iconos de flecha de Material-UI

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function SampleNextArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight /> {/* Agrega el icono de flecha hacia la derecha */}
    </div>
  );
}

export function SamplePrevArrow(props: SampleArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft /> {/* Agrega el icono de flecha hacia la izquierda */}
    </div>
  );
}

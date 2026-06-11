import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilter?: string; // Optional custom filter
  afterFilter?: string;
}

export default function BeforeAfterSlider({
  beforeImg,
  afterImg,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeFilter = "contrast-[0.9] saturate-[0.75] brightness-[0.9]",
  afterFilter = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div 
      id="before-after-container" 
      ref={containerRef} 
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] bg-brand-bg select-none overflow-hidden rounded-sm group shadow-sm border border-brand-border"
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          id="before-image"
          src={beforeImg} 
          alt="Before treatment" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none ${beforeFilter}"
        />
        <div id="before-badge" className="absolute top-4 left-4 bg-brand-primary/75 text-brand-bg text-[10px] tracking-widest font-mono py-1 px-2.5 rounded-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Overlaid width slider) */}
      <div 
        id="after-overlay-container"
        className="absolute inset-0 h-full overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
          <img 
            id="after-image"
            src={afterImg} 
            alt="After treatment" 
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover select-none ${afterFilter}`}
            style={{ width: containerRef.current?.getBoundingClientRect().width, maxWidth: 'none' }}
          />
        </div>
        <div id="after-badge" className="absolute top-4 right-4 bg-brand-accent/85 text-brand-bg text-[10px] tracking-widest font-mono py-1 px-2.5 rounded-sm whitespace-nowrap">
          {afterLabel}
        </div>
      </div>

      {/* Center Drag Handle Line and Circle Pill */}
      <div 
        id="slider-bar"
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          id="slider-knob"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className="w-10 h-10 rounded-full bg-brand-bg text-brand-primary shadow-md border border-brand-border flex items-center justify-center cursor-ew-resize active:scale-105 active:bg-brand-bg hover:scale-105 transition-all duration-150 absolute z-10"
        >
          <ChevronsLeftRight className="w-4 h-4 text-brand-primary" />
        </div>
      </div>

      {/* Accessible native input overlay to click anywhere to shift position */}
      <input 
        id="accessible-range-input"
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize focus:outline-none"
        aria-label="Before and after slider zoom"
      />
    </div>
  );
}

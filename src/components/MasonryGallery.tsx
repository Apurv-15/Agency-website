import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowUpRight } from 'lucide-react';

/** Utility for Tailwind class merging */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Hook to handle media queries for responsive columns */
const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    const match = queries.findIndex(q => window.matchMedia(q).matches);
    return values[match] !== undefined ? values[match] : defaultValue;
  };

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
  }, [queries]);

  return value;
};

/** Hook to measure element size via ResizeObserver */
const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

/** Utility to ensure images are loaded before layout/animation */
const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

export interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  height: number;
  title?: string;
  subtitle?: string;
  hideButton?: boolean;
  onClick?: () => void;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface MasonryGalleryProps {
  /** Array of items to display in the gallery */
  items: MasonryItem[];
  /** GSAP easing function */
  ease?: string;
  /** Duration of movement animations */
  duration?: number;
  /** Stagger delay between item animations */
  stagger?: number;
  /** Direction from which items enter the screen */
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  /** Whether to scale items down on hover */
  scaleOnHover?: boolean;
  /** Scale factor for hover state */
  hoverScale?: number;
  /** Whether to apply a blur-to-focus entry effect */
  blurToFocus?: boolean;
  /** Whether to show a color overlay on hover */
  colorShiftOnHover?: boolean;
  /** CSS class for the container */
  className?: string;
  /** CSS class for individual item containers */
  itemClassName?: string;
  /** On item select */
  onSelectItem?: (item: MasonryItem) => void;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.06,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.98,
  blurToFocus = true,
  colorShiftOnHover = false,
  className,
  itemClassName,
  onSelectItem
}) => {
  const columns = useMedia(
    ['(min-width: 1024px)', '(min-width: 640px)'],
    [3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  // Initial animation calculations
  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)] as any;
    }

    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: item.y + 120 };
      case 'left': return { x: -200, y: item.y };
      case 'right': return { x: window.innerWidth + 200, y: item.y };
      case 'center': return {
        x: containerRect.width / 2 - item.w / 2,
        y: containerRect.height / 2 - item.h / 2
      };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  // Preload logic
  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // Layout calculation
  const { grid, containerHeight } = useMemo(() => {
    if (!width) return { grid: [] as GridItem[], containerHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const gap = 20; // Crisp symmetric gap
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const gridItems = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = (child.height / 380) * columnWidth; // Calculated proportional height
      const y = colHeights[col];
      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    return { grid: gridItems, containerHeight: Math.max(...colHeights) };
  }, [columns, items, width]);

  // GSAP Animation logic
  useLayoutEffect(() => {
    if (!imagesReady || !grid.length) return;

    grid.forEach((item, index) => {
      const element = document.querySelector(`[data-key="${item.id}"]`);
      if (!element) return;

      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(20px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 1.1,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(element, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    if (grid.length > 0) hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: hoverScale,
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = (element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: 1,
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  };

  const handleItemClick = (item: MasonryItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (onSelectItem) {
      onSelectItem(item);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener');
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full', className)}
      style={{ height: containerHeight, minHeight: '600px' }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className={cn(
            'absolute overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem] bg-neutral-900 border border-neutral-800/80 transition-all shadow-xl group',
            itemClassName
          )}
          style={{
            willChange: 'transform, width, height, opacity, filter',
            transform: `translate3d(${item.x}px, ${item.y}px, 0)`
          }}
          onMouseEnter={e => handleMouseEnter(e.currentTarget)}
          onMouseLeave={e => handleMouseLeave(e.currentTarget)}
        >
          {/* Main Card Image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat grayscale contrast-115 group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url(${item.img})` }}
          />

          {/* Vignette Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Title tag if available */}
          {item.title && (
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-mono text-neutral-300 border border-white/10">
                {item.title}
              </span>
            </div>
          )}

          {/* Frosted View Casestudy Button Pill */}
          {!item.hideButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(item);
              }}
              className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 py-2.5 sm:py-3 px-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>View Casestudy</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;

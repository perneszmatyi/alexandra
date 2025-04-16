declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface SplideInstance {
    index: number;
    length: number;
    go: (index: number) => void;
    move: (index: number) => void;
  }

  export interface SplideProps {
    options?: any;
    children: ReactNode;
    ref?: any;
    onMoved?: (splide: SplideInstance) => void;
  }

  export interface SplideSlideProps {
    children: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

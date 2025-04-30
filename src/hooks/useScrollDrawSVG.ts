import { useEffect, useRef, useState } from 'react';

interface ScrollProps {
  numParts: number;
  layoutKey: number;
}

export const useScrollDrawSVG = ({ numParts, layoutKey }: ScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lengths, setLengths] = useState(Array(numParts).fill(0));
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  const partRefs = Array.from({ length: numParts }, () =>
    useRef<SVGLineElement & SVGPathElement>(null),
  );

  const calculateLengths = () => {
    setLengths(partRefs.map((ref) => ref.current?.getTotalLength() || 0));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }
    calculateLengths();
  }, [isDesktop, layoutKey]);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }
    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight - window.innerHeight * 0.4;
      const totalScroll = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;

      const prog = Math.min(Math.max(scrolled / totalScroll, 0), 1);
      setProgress(prog);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, layoutKey]);

  if (!isDesktop) {
    return {
      containerRef,
      partRefs,
      dashoffsets: Array(numParts).fill(0),
      lengths: Array(numParts).fill(0),
      progress: 0,
    };
  } else {
    let multiplier = 1;
    if (window.innerWidth < 2560) {
      multiplier = 4;
    } else {
      multiplier = 2;
    }

    const adjustedTotalLength = lengths.reduce((total, len) => total + len, 0);

    let remaining = progress * adjustedTotalLength;

    const dashoffsets = lengths.map((len, index) => {
      const isHorizontal = index === 1 || index === 3;
      const adjustedLen = isHorizontal ? len / multiplier : len;

      if (remaining >= adjustedLen) {
        remaining -= adjustedLen;
        return 0;
      } else {
        const offset = len - remaining * (isHorizontal ? multiplier : 1);
        remaining = 0;
        return offset > 0 ? offset : 0;
      }
    });

    return { containerRef, partRefs, dashoffsets, lengths, progress };
  }
};

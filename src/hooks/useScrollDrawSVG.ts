import { use, useEffect, useRef, useState } from 'react';

export const useScrollDrawSVG = (numParts: number) => {
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

    const handleResize = () => {
      calculateLengths();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }
    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight - 500;
      const totalScroll = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;

      const prog = Math.min(Math.max(scrolled / totalScroll, 0), 1);
      setProgress(prog);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return {
      containerRef,
      partRefs,
      dashoffsets: Array(numParts).fill(0),
      lengths: Array(numParts).fill(0),
      progress: 0,
    };
  }

  const adjustedTotalLength = lengths.reduce(
    (total, len, index) => total + (index === 2 ? len / 2 : len),
    0,
  );

  let remaining = progress * adjustedTotalLength;

  const dashoffsets = lengths.map((len, index) => {
    const isHorizontal = index === 2 || index === 4;
    const adjustedLen = isHorizontal ? len / 2 : len;

    if (remaining >= adjustedLen) {
      remaining -= adjustedLen;
      return 0;
    } else {
      const offset = len - remaining * (isHorizontal ? 2 : 1);
      remaining = 0;
      return offset > 0 ? offset : 0;
    }
  });

  return { containerRef, partRefs, dashoffsets, lengths, progress };
};

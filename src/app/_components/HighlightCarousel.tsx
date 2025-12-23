"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styles from "../_styles/highlightCarousel.module.css";

export default function HighlightCarousel({
  children,
  slideCount,
}: {
  children: React.ReactNode;
  slideCount: number; //3
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>{children}</div>
      </div>

      <div className={styles.dots} aria-label="Highlight navigation">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
            aria-label={`Go to highlight ${i + 1}`}
            aria-current={i === selectedIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
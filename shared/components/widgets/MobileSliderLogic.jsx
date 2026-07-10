"use client";
import {
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement,
  isValidElement,
} from "react";

export default function MobileSliderLogic({ children, className }) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = Children.count(children);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // وقتی ۵۰ درصد کارت دیده شد، ایندکس را ست کن
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: slider,
        threshold: 0.6, // مقدار را کمی بالا بردیم تا دقیق‌تر عمل کند
      },
    );

    // مشاهده تمام فرزندان مستقیم اسلایدر
    Array.from(slider.children).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [total]);

  return (
    <div ref={sliderRef} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            // پاس دادن مقادیر به PostCard
            activeIndex: activeIndex,
            totalSlides: total,
            "data-index": index,
          });
        }
        return child;
      })}
    </div>
  );
}

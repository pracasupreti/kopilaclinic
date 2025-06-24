"use client";
import { useEffect, useRef, useState } from 'react';

type CountUpNumberProps = {
  end: number;
  suffix?: string;
};

const CountUpNumber = ({ end, suffix = '+' }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [hasAnimated, end]);

  const display = end >= 1000 ? `${(count / 1000).toFixed(1)}K` : count;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUpNumber;

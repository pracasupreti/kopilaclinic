// components/CountUpNumber.jsx
import { useEffect, useState } from 'react';

type CountUpNumberProps = {
  end: number;
  suffix?: string;
};

const CountUpNumber = ({ end, suffix = '+' }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  const display = end >= 1000 ? `${(count / 1000).toFixed(1)}K` : count;

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export default CountUpNumber;

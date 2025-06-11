'use client';

import { useEffect, useState } from 'react';

function useCountUp(end: number, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 30)); // smooth steps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function StatsSection() {
  const deliveryCount = useCountUp(500);
  const experienceYears = useCountUp(10);
  const counselingCount = useCountUp(2000);
  const doctorsCount = useCountUp(7);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">
          {deliveryCount}+
        </h2>
        <p className="text-primary text-lg md:text-xl font-medium">Successful Delivery</p>
        <p className="mt-2 text-gray-600 text-sm">
          Celebrating the joy of motherhood with over 500 successful deliveries.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">
          {experienceYears}+
        </h2>
        <p className="text-primary text-lg md:text-xl font-medium">Years Of Experience</p>
        <p className="mt-2 text-gray-600 text-sm">
          A decade of excellence in fertility and women's healthcare.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">
          {counselingCount.toLocaleString()}+
        </h2>
        <p className="text-primary text-lg md:text-xl font-medium">Plus Counselling</p>
        <p className="mt-2 text-gray-600 text-sm">
          Providing personalized guidance through over 2,000 counseling sessions.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">
          {doctorsCount}+
        </h2>
        <p className="text-primary text-lg md:text-xl font-medium">Experience Doctors</p>
        <p className="mt-2 text-gray-600 text-sm">
          Trusted care from a team of 7+ highly skilled and experienced doctors.
        </p>
      </div>
    </div>
  );
}

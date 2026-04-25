import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function StatItem({ icon, value, suffix, label, color }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"
        style={{ backgroundColor: color }}
      />
      <div className="text-center">
        <span className="text-4xl md:text-5xl block mb-3">{icon}</span>
        <div className="flex items-baseline justify-center gap-1 mb-1">
          <span className="text-3xl md:text-4xl font-bold" style={{ color }}>
            {count}
          </span>
          <span className="text-lg text-gray-400">{suffix}</span>
        </div>
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-herb-bg via-green-50/30 to-herb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatItem
            icon="🌿"
            value={32}
            suffix="عشبة"
            label="نوع من الأعشاب الطبية"
            color="#2d6a4f"
          />
          <StatItem
            icon="📚"
            value={6}
            suffix="فئات"
            label="تصنيفات وفوائد متنوعة"
            color="#e9c46a"
          />
          <StatItem
            icon="✨"
            value={160}
            suffix="فائدة"
            label="فائدة صحية موثقة"
            color="#52b788"
          />
          <StatItem
            icon="💡"
            value={96}
            suffix="طريقة"
            label="طريقة استخدام وتطبيق"
            color="#d4a373"
          />
        </div>
      </div>
    </section>
  );
}

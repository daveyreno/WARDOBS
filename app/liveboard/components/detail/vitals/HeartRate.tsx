import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

interface HeartRateProps {
  value: number;
}

export function HeartRate({ value }: HeartRateProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useAnimationFrame(() => {
    // Even smaller chance of update (1% per frame)
    if (Math.random() < 0.01) {
      const variation = value + (Math.random() * 2 - 1);
      setDisplayValue(Math.round(variation));
    }
  });

  return (
    <div className="md:row-span-2 p-6 hover:bg-muted/50 transition-colors duration-200 border-b md:border-r">
      <div className="flex flex-row md:flex-col justify-between md:justify-center items-center h-full">
        <div className="flex flex-col items-start md:items-center">
          <p className="text-sm text-muted-foreground">Heart Rate</p>
          <div className="flex items-baseline gap-1">
            <p className="text-4xl md:text-5xl tracking-tighter font-semibold tabular-nums">
              {displayValue}
            </p>
            <p className="text-sm text-muted-foreground">bpm</p>
          </div>
        </div>

        <div className="w-32 h-8 md:mt-8 md:mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <defs>
              <linearGradient id="fadeEdge" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="1" />
                <stop offset="90%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="lineMask">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="20"
                  fill="url(#fadeEdge)"
                />
              </mask>
            </defs>
            <motion.path
              fill="none"
              strokeWidth="4"
              stroke="rgb(16 185 129)"
              strokeLinecap="round"
              strokeOpacity={0.15}
              d="M 0,10 L 45,10 L 47,10 L 50,2 L 53,18 L 56,10 L 58,10 L 100,10"
              initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: [100, -100] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              mask="url(#lineMask)"
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke="rgb(16 185 129)"
              strokeLinecap="round"
              d="M 0,10 L 45,10 L 47,10 L 50,2 L 53,18 L 56,10 L 58,10 L 100,10"
              initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: [100, -100] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              mask="url(#lineMask)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

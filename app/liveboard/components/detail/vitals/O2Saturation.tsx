import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

interface O2SaturationProps {
  value: number;
}

export function O2Saturation({ value }: O2SaturationProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useAnimationFrame(() => {
    if (Math.random() < 0.01) {
      const variation = value + (Math.random() * 0.6 - 0.3); // Smaller variation for O2
      setDisplayValue(Math.round(variation));
    }
  });

  return (
    <div className="p-6 hover:bg-muted/50 transition-colors duration-200 border-b">
      <div className="relative">
        <p className="text-sm text-muted-foreground">O2 Saturation</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold tabular-nums">{displayValue}</p>
          <p className="text-sm text-muted-foreground">%</p>
        </div>
        <div className="absolute bottom-3 right-3 flex gap-[2px]">
          {[0.6, 0.9, 1, 0.7].map((height, i) => (
            <motion.div
              key={i}
              className="w-[3px] bg-blue-500 rounded-full"
              animate={{
                height: ["8px", "16px", "8px"],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

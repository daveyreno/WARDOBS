import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

interface TemperatureProps {
  value: number;
}

export function Temperature({ value }: TemperatureProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useAnimationFrame(() => {
    if (Math.random() < 0.01) {
      const variation = value + (Math.random() * 0.2 - 0.1); // Very small variation for temp
      setDisplayValue(Number(variation.toFixed(1)));
    }
  });

  return (
    <div className="p-6 hover:bg-muted/50 transition-colors duration-200 border-b">
      <div className="relative">
        <p className="text-sm text-muted-foreground">Temperature</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold tabular-nums">{displayValue}</p>
          <p className="text-sm text-muted-foreground">°C</p>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-0.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
            animate={{
              backgroundColor: [
                "rgb(161 161 170 / 0.2)",
                "rgb(234 179 8)",
                "rgb(234 179 8)",
              ],
              opacity: [0.2, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              times: [0, 0.2, 1],
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"
            animate={{
              backgroundColor: [
                "rgb(161 161 170 / 0.2)",
                "rgb(161 161 170 / 0.2)",
                "rgb(249 115 22)",
                "rgb(249 115 22)",
              ],
              opacity: [0.2, 0.2, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              times: [0, 0.2, 0.4, 1],
            }}
          />
          <motion.div
            className="w-3.5 h-3.5 rounded-full bg-muted-foreground/20"
            animate={{
              backgroundColor: [
                "rgb(161 161 170 / 0.2)",
                "rgb(161 161 170 / 0.2)",
                "rgb(161 161 170 / 0.2)",
                "rgb(161 161 170 / 0.2)",
              ],
              opacity: [0.2, 0.2, 0.2, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              times: [0, 0.2, 0.4, 1],
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

interface BloodPressureProps {
  value: string;
}

export function BloodPressure({ value }: BloodPressureProps) {
  const [sys, dia] = value.split("/").map(Number);
  const [displaySys, setDisplaySys] = useState(sys);
  const [displayDia, setDisplayDia] = useState(dia);

  useAnimationFrame(() => {
    if (Math.random() < 0.01) {
      const sysVariation = sys + (Math.random() * 2 - 1);
      const diaVariation = dia + (Math.random() * 2 - 1);
      setDisplaySys(Math.round(sysVariation));
      setDisplayDia(Math.round(diaVariation));
    }
  });

  return (
    <div className="p-6 hover:bg-muted/50 transition-colors duration-200 border-b md:border-r">
      <div className="relative">
        <p className="text-sm text-muted-foreground">Blood Pressure</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold tabular-nums">
            {displaySys}/{displayDia}
          </p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
        <div className="absolute bottom-3 right-3">
          <motion.div
            className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500"
            animate={{
              scale: [1, 4.5],
              opacity: [0.35, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 1],
            }}
          />
          <motion.div
            className="relative w-2.5 h-2.5 rounded-full bg-red-500"
            animate={{
              scale: [0.97, 1.03, 0.97],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

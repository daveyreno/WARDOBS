import { motion } from "framer-motion";

interface SysDiaProps {
  value: string;
}

export function SysDia({ value }: SysDiaProps) {
  return (
    <div className="p-6 hover:bg-muted/50 transition-colors duration-200 border-b md:border-r">
      <div className="relative">
        <p className="text-sm text-muted-foreground">SYS/DIA</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="relative w-2.5 h-6 rounded-full bg-purple-600/20">
            <motion.div
              className="absolute w-2.5 h-2 rounded-full bg-purple-600"
              animate={{
                top: ["calc(100% - 8px)", "0px", "calc(100% - 8px)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

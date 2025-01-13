import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Bed } from "lucide-react";
import { useState } from "react";
import { Patient } from "../data/mockData";

interface PatientRowProps {
  patient: Patient;
  isSelected: boolean;
  progress: number;
  onClick: () => void;
}

export default function PatientRow({
  patient,
  isSelected,
  progress,
  onClick,
}: PatientRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex border-b hover:bg-muted/50 transition-all duration-300 cursor-pointer relative ${
        isSelected ? "bg-muted/70" : ""
      }`}
    >
      <motion.div
        initial={false}
        animate={{
          width: isSelected ? "3px" : "6px",
          height: isSelected ? "calc(100% - 6px)" : "6px",
          borderRadius: "9999px",
          opacity: isHovered || isSelected ? 1 : 0,
          left: isSelected ? "3px" : "6px",
          top: isSelected ? "3px" : "calc(50% - 3px)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="bg-primary absolute"
      />
      {isSelected && (
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: `${progress}%`,
          }}
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
          className="absolute left-0 top-0 w-[3px] bg-primary/30 rounded-full"
          style={{ margin: "3px" }}
        />
      )}
      <div className="p-2 w-full ml-4">
        <div className="flex justify-between items-center">
          <div className="font-semibold">{patient.name}</div>
          <Badge variant={"outline"}>{patient.lastChecked}</Badge>
        </div>
        <div className="flex text-sm gap-2 items-center mt-0.5">
          <div className="rounded-full text-xs w-4 h-4 flex items-center justify-center bg-green-500 text-white">
            {patient.name[0]}
          </div>
          <div className="flex gap-1 items-center text-muted-foreground">
            <Bed className="w-4 h-4" />
            <p>{patient.bed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
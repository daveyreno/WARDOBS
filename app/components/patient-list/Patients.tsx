"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Bed } from "lucide-react";
import { useEffect, useState } from "react";
import PatientOverview from "../patient-overview/PatientOverview";
import { patients } from "./data";

interface PatientsProps {
  isRotating: boolean;
}

export default function Patients({ isRotating }: PatientsProps) {
  const ROTATION_INTERVAL = 5000;
  const [currentPatients, setCurrentPatients] = useState(patients);
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [isProgressComplete, setIsProgressComplete] = useState(false);
  const [countdowns, setCountdowns] = useState<string[]>(
    Array(patients.length).fill("")
  );

  useEffect(() => {
    const calculateTimeLeft = (targetDate: Date) => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return "CHECK";
      }

      const minutes = Math.floor(difference / 60000);
      const seconds = Math.floor((difference % 60000) / 1000);

      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const timer = setInterval(() => {
      setCountdowns(
        currentPatients.map((patient) => calculateTimeLeft(patient.nextCheck))
      );
    }, 1000);

    // Initial calculation
    setCountdowns(
      currentPatients.map((patient) => calculateTimeLeft(patient.nextCheck))
    );

    return () => clearInterval(timer);
  }, [currentPatients]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRotating) {
      interval = setInterval(() => {
        setIsProgressComplete(true);
        setTimeout(() => {
          setCurrentPatients((prev) => {
            const newPatients = [...prev];
            const firstPatient = newPatients.shift();
            if (firstPatient) newPatients.push(firstPatient);
            setSelectedPatient(newPatients[0]);
            return newPatients;
          });
          setIsProgressComplete(false);
        }, 300);
      }, ROTATION_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [isRotating]);

  return (
    <div className="flex gap-3 h-full">
      <div className="w-1/3 border rounded overflow-hidden">
        <ScrollArea className="h-full">
          <div className="relative">
            <motion.div
              className="absolute inset-x-0 h-[68px]"
              layout
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            >
              <div className="absolute inset-0 bg-primary/5" />
              {isRotating && !isProgressComplete && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: 1,
                    transition: {
                      duration: ROTATION_INTERVAL / 1000,
                      ease: "linear",
                    },
                  }}
                  onAnimationComplete={() => {
                    setIsProgressComplete(true);
                  }}
                />
              )}
            </motion.div>
            <div className="divide-y relative">
              <AnimatePresence mode="popLayout" initial={false}>
                {currentPatients.map((patient, index) => {
                  const timeLeft = countdowns[index];
                  const needsCheck = timeLeft === "CHECK";

                  return (
                    <motion.div
                      key={patient.name}
                      layout
                      initial={index === 0 ? { x: 0 } : { y: 50 }}
                      animate={{ x: 0, y: 0 }}
                      exit={
                        index === 0
                          ? {
                              x: "-100%",
                              transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                              },
                            }
                          : {
                              y: 0,
                              transition: {
                                duration: 0.4,
                                type: "spring",
                                bounce: 0.2,
                                stiffness: 100,
                                damping: 20,
                              },
                            }
                      }
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        bounce: 0.2,
                        stiffness: 100,
                        damping: 20,
                      }}
                      className="p-3 relative cursor-pointer"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <p className="font-semibold">{patient.name}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Bed size={14} />
                            {patient.bed}
                          </div>
                        </div>
                        <Badge variant={needsCheck ? "destructive" : "outline"}>
                          {timeLeft}
                        </Badge>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
      <div className="w-2/3 border rounded overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4">
            <PatientOverview patient={selectedPatient} />
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}

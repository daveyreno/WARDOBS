import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import { Bed, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Patient, mockPatients } from "../../data/mockData";

interface IntroProps {
  patient: Patient;
  onPatientChange: (patient: Patient) => void;
  isAutoRotating: boolean;
  onAutoRotateChange: (value: boolean) => void;
}

export default function Intro({
  patient,
  onPatientChange,
  isAutoRotating,
  onAutoRotateChange,
}: IntroProps) {
  const [showDoctor, setShowDoctor] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowDoctor((prev) => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    const currentIndex = mockPatients.findIndex((p) => p.id === patient.id);
    const prevIndex =
      currentIndex === 0 ? mockPatients.length - 1 : currentIndex - 1;
    onPatientChange(mockPatients[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = mockPatients.findIndex((p) => p.id === patient.id);
    const nextIndex = (currentIndex + 1) % mockPatients.length;
    onPatientChange(mockPatients[nextIndex]);
  };

  return (
    <div>
      <div className="border-b p-2 md:hidden">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePrevious}
            className="border rounded-full p-2 hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Switch
              checked={isAutoRotating}
              onCheckedChange={onAutoRotateChange}
              className="scale-75"
            />
            Auto Rotate
          </div>
          <button
            onClick={handleNext}
            className="border rounded-full p-2 hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter">
              {patient.name}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Bed className="w-4 h-4" />
              <span>{patient.bed}</span>
              <span className="text-xs">•</span>
              <span>{patient.age}yrs</span>
              <span className="text-xs">•</span>
              <span>{patient.gender}</span>
            </div>
          </div>

          <div className="relative h-[40px] flex items-center">
            <AnimatePresence mode="wait">
              {showDoctor ? (
                <motion.div
                  key="doctor"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-end"
                >
                  <p className="text-muted-foreground text-sm">Doctor</p>
                  <p className="font-medium">{patient.staff.doctor.name}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="nurse"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-end"
                >
                  <p className="text-muted-foreground text-sm">Nurse</p>
                  <p className="font-medium">{patient.staff.nurse.name}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import UserOptions from "@/components/common/UserOptions";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import PatientDetail from "./components/detail/PatientDetail";
import PatientRow from "./components/PatientRow";
import { Patient, mockPatients } from "./data/mockData";

const ROTATION_INTERVAL = 5000; // 5 seconds per patient

export default function LiveboardPage() {
  const [selectedPatient, setSelectedPatient] = useState<Patient>(
    mockPatients[0]
  );
  const [progress, setProgress] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const startTime = Date.now();
    const currentIndex = mockPatients.findIndex(
      (p) => p.id === selectedPatient.id
    );

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / ROTATION_INTERVAL) * 100;

      if (newProgress >= 100) {
        // Move to next patient
        const nextIndex = (currentIndex + 1) % mockPatients.length;
        setSelectedPatient(mockPatients[nextIndex]);
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, 16); // Update progress smoothly

    return () => clearInterval(timer);
  }, [selectedPatient, isAutoRotating]);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setProgress(0);
    setIsAutoRotating(false);
  };

  return (
    <div className="h-screen flex flex-col p-2 md:p-3">
      <div className="flex justify-between items-center mb-3 p-2">
        <p className="text-xl font-bold tracking-tighter">WardOBS</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch
              checked={isAutoRotating}
              onCheckedChange={setIsAutoRotating}
            />
            <span className="text-sm text-muted-foreground">Auto</span>
          </div>
          <UserOptions />
        </div>
      </div>
      <div className="flex gap-4 flex-1 min-h-0">
        <ScrollArea className="hidden md:block w-1/3 border rounded-lg">
          {mockPatients.map((patient) => (
            <PatientRow
              key={patient.id}
              patient={patient}
              isSelected={selectedPatient.id === patient.id}
              progress={selectedPatient.id === patient.id ? progress : 0}
              onClick={() => handlePatientClick(patient)}
            />
          ))}
        </ScrollArea>
        <div className="w-full md:w-2/3 border rounded-lg overflow-auto">
          <PatientDetail patient={selectedPatient} />
        </div>
      </div>
    </div>
  );
}

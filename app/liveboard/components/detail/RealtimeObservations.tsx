"use client";

import { WifiIcon } from "lucide-react";
import { Patient } from "../../data/mockData";
import { BloodPressure } from "./vitals/BloodPressure";
import { HeartRate } from "./vitals/HeartRate";
import { O2Saturation } from "./vitals/O2Saturation";
import { SysDia } from "./vitals/SysDia";
import { Temperature } from "./vitals/Temperature";

interface RealtimeObservationsProps {
  patient: Patient;
}

export function RealtimeObservations({ patient }: RealtimeObservationsProps) {
  const { realtime } = patient.vitals;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border rounded-xl">
      <HeartRate value={realtime.heartRate} />
      <BloodPressure value={realtime.bloodPressure} />
      <O2Saturation value={realtime.o2Saturation} />
      <SysDia value={realtime.sysDia} />
      <Temperature value={realtime.temperature} />
      <div className="flex justify-center p-4 col-span-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50">
          <WifiIcon className="w-3.5 h-3.5 text-emerald-500" />
          <p className="tracking-widest uppercase text-[10px] text-muted-foreground">
            Realtime Active
          </p>
        </div>
      </div>
    </div>
  );
}

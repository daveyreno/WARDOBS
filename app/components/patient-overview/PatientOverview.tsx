"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Bed, Clock, Wifi } from "lucide-react";
import { Patient } from "../patient-list/data";

interface PatientOverviewProps {
  patient: Patient;
}

export default function PatientOverview({ patient }: PatientOverviewProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={patient.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{
          duration: 0.3,
          type: "spring",
          bounce: 0.2,
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{patient.name}</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed size={16} />
                {patient.bed}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
              <div>{patient.age} years</div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
              <div>{patient.gender}</div>
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="flex items-center gap-2 p-4 border-b">
              <h2 className="text-xl font-semibold tracking-tighter">
                {patient.procedure.name}
              </h2>
            </div>

            <div className="p-4 border-b flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Next Step</div>
              <div className="font-semibold">{patient.nextStep.action}</div>
            </div>

            <div className="p-3 text-sm flex text-muted-foreground justify-between items-center">
              <Badge
                variant={
                  patient.procedure.status === "delayed"
                    ? "destructive"
                    : patient.procedure.status === "scheduled"
                    ? "secondary"
                    : "default"
                }
              >
                {patient.procedure.status.toUpperCase()}
              </Badge>

              <div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <p>{patient.procedure.time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* VITALS */}

          <div className="border rounded-lg">
            <div className="flex border-b">
              <div className="border-r w-full text-center p-4">
                <p className="text-xs text-muted-foreground">Heart Rate</p>
                <p className="font-bold text-2xl tracking-tighter">
                  {patient.vitals.hr} bpm
                </p>
              </div>
              <div className="border-r w-full text-center p-4">
                <p className="text-xs text-muted-foreground">Blood Pressure</p>
                <p className="font-bold text-2xl tracking-tighter">
                  {patient.vitals.bp}
                </p>
              </div>
              <div className=" w-full text-center p-4">
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="font-bold text-2xl tracking-tighter">
                  {patient.vitals.temp}°C
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <div className="ml-2 text-xs flex items-center gap-1">
                <Wifi className="w-4 h-4 text-green-500" />
                <p className="font-semibold">3.2k Auto Vitals</p>
              </div>
              <Button variant="outline">Add</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

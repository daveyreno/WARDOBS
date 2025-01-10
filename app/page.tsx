"use client";

import UserOptions from "@/components/common/UserOptions";
import { Toaster } from "@/components/ui/sonner";
import { Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Patients from "./components/patient-list/Patients";

export default function Home() {
  const [isRotating, setIsRotating] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);
  const PAUSE_DURATION = 3000;

  useEffect(() => {
    const handleMouseMove = () => {
      if (!isUserInteracting) {
        setIsUserInteracting(true);
        setIsRotating(false);

        toast("Rotation Paused", {
          description:
            "Auto-rotation paused while you interact. Will resume in 3 seconds.",
          duration: 2000,
          icon: <Pause className="h-4 w-4" />,
        });
      }

      if (pauseTimer.current) {
        clearTimeout(pauseTimer.current);
      }

      pauseTimer.current = setTimeout(() => {
        setIsUserInteracting(false);
        setIsRotating(true);
      }, PAUSE_DURATION);
    };

    if (!isUserInteracting) {
      setIsRotating(true);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (pauseTimer.current) {
        clearTimeout(pauseTimer.current);
      }
    };
  }, [isUserInteracting]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Toaster />
      <div className="p-3 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">WardObs</div>
        <UserOptions
          isRotating={isRotating}
          onRotationToggle={() => {
            setIsRotating(!isRotating);
            setIsUserInteracting(!isRotating);
          }}
        />
      </div>
      <div className="flex-1 mx-3 mb-3 mt-3 min-h-0 overflow-hidden">
        <Patients isRotating={isRotating} />
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bed, EllipsisVertical } from "lucide-react";
import { Patient } from "../../data/mockData";

interface IntroProps {
  patient: Patient;
}

export default function Intro({ patient }: IntroProps) {
  // Add color mapping for alertness levels
  const alertnessColors = {
    Awake: "bg-green-500",
    Verbal: "bg-yellow-500",
    Pain: "bg-orange-500",
    Unresponsive: "bg-red-500",
  };

  // Get first letter of alertness for compact display
  const alertnessInitial = patient.alertness[0];

  return (
    <div className="border-b flex justify-between items-center p-4">
      <div className="flex items-center gap-2 md:gap-3">
        <Tooltip>
          <TooltipTrigger>
            <div
              className={`w-7 h-7 md:w-8 md:h-8 text-white font-medium text-base md:text-lg flex ${
                alertnessColors[patient.alertness]
              } rounded-full items-center justify-center`}
            >
              {alertnessInitial}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              <strong>AVPU:</strong> {patient.alertness}
            </p>
          </TooltipContent>
        </Tooltip>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl font-bold tracking-tighter">
            {patient.name}
          </h1>
          <div className="flex gap-1 md:gap-2 items-center text-muted-foreground text-sm">
            <div className="flex gap-1 items-center">
              <Bed className="w-4 h-4 md:w-5 md:h-5" />
              {patient.bed}
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <div className="">{patient.age}yrs</div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <div className="">{patient.gender}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="w-7 h-7 md:w-8 md:h-8 -mr-2 border-2">
                <AvatarImage
                  src={patient.staff.nurse.image}
                  alt={`Nurse ${patient.staff.nurse.name}`}
                />
                <AvatarFallback>
                  {patient.staff.nurse.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nurse: {patient.staff.nurse.name}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="w-7 h-7 md:w-8 md:h-8 border-2">
                <AvatarImage
                  src={patient.staff.doctor.image}
                  alt={`Dr. ${patient.staff.doctor.name}`}
                />
                <AvatarFallback>
                  {patient.staff.doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Doctor: {patient.staff.doctor.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Button variant={"ghost"}>
          <EllipsisVertical />
        </Button>
      </div>
    </div>
  );
}

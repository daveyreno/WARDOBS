import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Patient } from "../../data/mockData";

interface NextStepsProps {
  patient: Patient;
}

export default function NextSteps({ patient }: NextStepsProps) {
  return (
    <div className="border rounded-xl">
      <div className="flex justify-between p-2 items-center border-b">
        <p className="text-lg ml-2 font-semibold tracking-tight">
          {patient.nextStep.title}
        </p>
      </div>

      <div className="flex justify-between items-center p-3 border-b">
        <div className="text-sm text-muted-foreground">Next Step</div>
        <div className="font-medium">{patient.nextStep.description}</div>
      </div>
      <div className="flex justify-between items-center p-3">
        <div className="">
          <Badge variant={"outline"}>{patient.nextStep.status}</Badge>
        </div>
        <div className="flex gap-1 items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <p>{patient.nextStep.time}</p>
        </div>
      </div>
    </div>
  );
}

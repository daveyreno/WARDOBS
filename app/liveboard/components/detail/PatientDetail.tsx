import { Patient } from "../../data/mockData";
import Intro from "./Intro";
import { ManualObservations } from "./ManualObservations";

import NextSteps from "./NextSteps";
import { RealtimeObservations } from "./RealtimeObservations";

interface PatientDetailProps {
  patient: Patient;
}

export default function PatientDetail({ patient }: PatientDetailProps) {
  return (
    <div className="flex flex-col">
      <Intro patient={patient} />
      <div className="flex flex-col gap-3 p-2 md:p-3">
        <NextSteps patient={patient} />
        {patient.observationType === "realtime" ? (
          <RealtimeObservations patient={patient} />
        ) : (
          <ManualObservations patient={patient} />
        )}
      </div>
    </div>
  );
}

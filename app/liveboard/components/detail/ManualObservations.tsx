import { Button } from "@/components/ui/button";
import { Patient } from "../../data/mockData";

interface ManualObservationsProps {
  patient: Patient;
}

export function ManualObservations({ patient }: ManualObservationsProps) {
  const { manual } = patient.vitals;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 rounded-xl border">
      <div className="p-4 md:p-6 border-b border-r">
        <p className="text-sm text-muted-foreground">Last Checked</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.lastChecked}
          </p>
          <p className="text-sm text-muted-foreground">ago</p>
        </div>
      </div>
      <div className="p-4 md:p-6 border-b border-r md:border-r">
        <p className="text-sm text-muted-foreground">Heart Rate</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.heartRate}
          </p>
          <p className="text-sm text-muted-foreground">bpm</p>
        </div>
      </div>
      <div className="p-4 md:p-6 border-b border-r md:border-r-0">
        <p className="text-sm text-muted-foreground">Blood Pressure</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.bloodPressure}
          </p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
      </div>
      <div className="p-4 md:p-6 border-b border-r">
        <p className="text-sm text-muted-foreground">O2 Saturation</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.o2Saturation}
          </p>
          <p className="text-sm text-muted-foreground">%</p>
        </div>
      </div>
      <div className="p-4 md:p-6 border-b border-r md:border-r">
        <p className="text-sm text-muted-foreground">SYS/DIA</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.sysDia}
          </p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
      </div>
      <div className="p-4 md:p-6 border-b md:border-b-0">
        <p className="text-sm text-muted-foreground">Temperature</p>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl md:text-4xl tracking-tighter font-semibold tabular-nums">
            {manual.temperature}
          </p>
          <p className="text-sm text-muted-foreground">°C</p>
        </div>
      </div>
      <div className="col-span-2 md:col-span-3 border-t p-2 flex gap-2">
        <Button className="w-full" variant={"outline"}>
          Request
        </Button>
        <Button className="w-full" variant={"outline"}>
          Add
        </Button>
      </div>
    </div>
  );
}

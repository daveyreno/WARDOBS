import { Button } from "@/components/ui/button";

export default function ManualObservations() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 rounded-xl border">
      <div className="p-4 border-r border-b text-center">
        <p className="text-sm text-muted-foreground">Last Checked</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">0:00</p>
          <p className="text-sm text-muted-foreground">ago</p>
        </div>
      </div>
      <div className="p-4 border-b text-center md:border-r">
        <p className="text-sm text-muted-foreground">Heart Rate</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">82</p>
          <p className="text-sm text-muted-foreground">bpm</p>
        </div>
      </div>
      <div className="p-4 border-r border-b md:border-r-0 text-center">
        <p className="text-sm text-muted-foreground">Blood Pressure</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">138/88</p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
      </div>
      <div className="p-4 border-b md:border-b-0 text-center md:border-r">
        <p className="text-sm text-muted-foreground">O2 Saturation</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">97</p>
          <p className="text-sm text-muted-foreground">%</p>
        </div>
      </div>
      <div className="p-4 border-r md:border-r text-center">
        <p className="text-sm text-muted-foreground">SYS/DIA</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">102/75</p>
          <p className="text-sm text-muted-foreground">mmHg</p>
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-muted-foreground">Temperature</p>
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <p className="text-2xl font-semibold">37.1</p>
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

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-6 justify-center items-center">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tighter">Product</h1>
        <p className="text-lg">Innovating nursing observations to save lives</p>
      </div>
      <div className="">
        <div className="max-w-xl w-full flex flex-col md:flex-row gap-3 p-4">
          <Link
            href="/observations"
            className="border hover:bg-muted transition-all duration-300 rounded-lg p-4 w-full md:w-1/2 flex justify-between items-center gap-2"
          >
            <div>
              <h2 className="text-lg font-bold">Observations</h2>
              <p className="text-sm text-muted-foreground">
                Real-time patient observations and task management
              </p>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-muted-foreground shrink-0" />
          </Link>
          <Link
            href="/liveboard"
            className="border hover:bg-muted transition-all duration-300 rounded-lg p-4 w-full md:w-1/2 flex justify-between items-center gap-2"
          >
            <div>
              <h2 className="text-lg font-bold">Liveboard</h2>
              <p className="text-sm text-muted-foreground">
                Real-time digital patient visibility dashboard
              </p>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-muted-foreground shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}

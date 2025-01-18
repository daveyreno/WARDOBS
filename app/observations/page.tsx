import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";
import TaskItem from "./components/TaskItem";

export default function ObservationsPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center">
        <div className="w-full max-w-xl p-4 flex flex-col gap-4">
          <div className="border rounded-lg p-3 text-center text-muted-foreground text-sm">
            Rotating Patient Records
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="active" className="flex-1">
                To do
              </TabsTrigger>
              <TabsTrigger value="complete" className="flex-1">
                Complete
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-muted-foreground mt-3">
                <Clock className="w-4 h-4" />
                <p className="text-xs  uppercase tracking-widest">Upcoming</p>
              </div>
              <TaskItem />
              <TaskItem />
              <TaskItem />

              <div className="flex items-center gap-1 text-muted-foreground mt-3">
                <Clock className="w-4 h-4" />
                <p className="text-xs  uppercase tracking-widest">15mins</p>
              </div>
              <TaskItem />
              <TaskItem />
              <div className="flex items-center gap-1 text-muted-foreground mt-3">
                <Clock className="w-4 h-4" />
                <p className="text-xs  uppercase tracking-widest">1hr</p>
              </div>
              <TaskItem />
              <div className="border rounded-lg p-3 text-center text-muted-foreground text-sm">
                Great, you have nothing in your queue!
              </div>
            </TabsContent>
            <TabsContent value="complete">Completed items here</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

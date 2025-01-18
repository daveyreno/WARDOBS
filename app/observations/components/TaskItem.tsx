import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRightLeft,
  Bed,
  Check,
  Clock,
  EllipsisVertical,
} from "lucide-react";

export default function TaskItem() {
  return (
    <div className="flex flex-col md:flex-row justify-between border rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer">
      <div className="flex gap-3 p-2 border-b md:border-b-0">
        <div className="">
          <Badge variant={"outline"}>0:00</Badge>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Manual Observations</div>
          </div>

          <div className="flex text-sm gap-2 items-center text-muted-foreground">
            <div className="flex gap-1 items-center">
              <Bed className="w-4 h-4" />
              <p>1A</p>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <div className="">Dave Reynolds</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Clock className="mr-2 h-4 w-4" />
              <span>Snooze</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              <span>Transfer</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="w-full">
          <Check />
        </Button>
      </div>
    </div>
  );
}

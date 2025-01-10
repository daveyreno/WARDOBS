"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Moon, Pause, Play, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface UserOptionsProps {
  isRotating: boolean;
  onRotationToggle: () => void;
}

export default function UserOptions({
  isRotating,
  onRotationToggle,
}: UserOptionsProps) {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="/avatars/nurses/jelle.png" alt="User avatar" />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <p>Jelle Reichert</p>
          <span className="text-xs text-muted-foreground">
            jelle.reichert@ward247.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark Mode</span>
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onRotationToggle}>
          {isRotating ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              <span>Pause Rotation</span>
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              <span>Start Rotation</span>
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

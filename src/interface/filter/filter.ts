import { LucideIcon } from "lucide-react";

export interface IFilter {
    id: string;
    label: string;
    icon: LucideIcon;
    option: string[];
  }
export interface StatProps {
    name: string;
    label: string[];
    labelNote: string;
    dataChart: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    position?: "top" | "bottom"| "left" | "right" | "center" | "chartArea";
}
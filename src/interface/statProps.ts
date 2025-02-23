export interface StatProps {
    name: string;
    label: string[];
    labelNote: string;
    dataChart: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    position?: "top" | "left" | "bottom" | "right" | "center" | "chartArea";
}
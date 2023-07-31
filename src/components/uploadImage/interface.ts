import { LegacyRef } from "react";

export interface Ipreset {
    children: React.ReactNode
    preset: string
    setUrl: (url: string) => void;
}
import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";

// types/apod.ts
export interface APODImage {
  date: string;
  title: string;
  url: string;
  hdurl?: string;
  media_type: "image" | "video";
  explanation: string;
  copyright?: string;
  thumbnail_url?: string;
  concept_tags?: boolean;
  concepts?: Record<number, string>;
  service_version: string;
  resource?: {
    image_set?: string;
    planet?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  endpoint?: string;
  status: "live" | "coming-soon";
  icon: ReactElement<LucideIcon>;
  color: string;
}

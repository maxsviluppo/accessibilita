import { LucideIcon } from "lucide-react";

export enum SectionType {
  INTRO = 'INTRO',
  VISUAL = 'VISUAL',
  AUDITORY = 'AUDITORY',
  MOTOR = 'MOTOR',
  COGNITIVE = 'COGNITIVE',
  AI_FUTURE = 'AI_FUTURE',
  LEGAL = 'LEGAL',
  SUMMARY_REPORT = 'SUMMARY_REPORT'
}

export interface TechItem {
  name: string;
  description: string;
  isModern: boolean; // True for AI/New tech, False for traditional
}

export interface LessonSection {
  id: SectionType;
  title: string;
  icon: LucideIcon;
  summary: string;
  deepDive: string; // New field for the expanded historical/theoretical context
  traditionalTech: TechItem[];
  modernTech: TechItem[];
  details: string[];
}
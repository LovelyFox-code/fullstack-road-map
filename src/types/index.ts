export interface WeekData {
  id: number;
  title: string;
  description: string;
  topics: string[];
  resources: Resource[];
  checklist: ChecklistItem[];
  project: Project;
}

export interface Resource {
  type: 'video' | 'article' | 'github' | 'documentation';
  title: string;
  url: string;
  duration?: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
}

export interface Project {
  title: string;
  description: string;
  requirements: string[];
  deliverables: string[];
}

export interface KnowledgeArea {
  id: string;
  title: string;
  color: string;
  icon: string;
  items: ChecklistItem[];
}

export interface WeekNote {
  weekId: number;
  content: string;
  timestamp: string;
}

export interface AppState {
  activeWeek: number;
  activeTab: 'roadmap' | 'checklist' | 'progress';
  weekProgress: Record<number, ChecklistItem[]>;
  knowledgeProgress: Record<string, ChecklistItem[]>;
  weekNotes: WeekNote[];
}
import React, { useState } from 'react';
import { WeekCard } from './WeekCard';
import { WeekData, ChecklistItem, WeekNote } from '../types';

interface RoadmapViewProps {
  weeks: WeekData[];
  weekProgress: Record<number, ChecklistItem[]>;
  onWeekProgressUpdate: (weekId: number, checklist: ChecklistItem[]) => void;
  weekNotes: WeekNote[];
  onNoteUpdate: (weekId: number, content: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  weeks,
  weekProgress,
  onWeekProgressUpdate,
  weekNotes,
  onNoteUpdate
}) => {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const handleWeekToggle = (weekId: number) => {
    setActiveWeek(activeWeek === weekId ? null : weekId);
  };

  const getWeekNote = (weekId: number) => {
    const note = weekNotes.find(n => n.weekId === weekId);
    return note ? note.content : '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">3-Month Fullstack Developer Roadmap</h1>
        <p className="text-gray-600">Your structured path to becoming a well-rounded fullstack developer</p>
      </div>

      <div className="space-y-6">
        {weeks.map((week) => (
          <WeekCard
            key={week.id}
            week={week}
            isActive={activeWeek === week.id}
            onToggle={() => handleWeekToggle(week.id)}
            checklist={weekProgress[week.id] || week.checklist}
            onChecklistUpdate={(checklist) => onWeekProgressUpdate(week.id, checklist)}
            note={getWeekNote(week.id)}
            onNoteUpdate={(note) => onNoteUpdate(week.id, note)}
          />
        ))}
      </div>
    </div>
  );
};
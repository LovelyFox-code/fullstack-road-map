import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { RoadmapView } from './components/RoadmapView';
import { KnowledgeChecklist } from './components/KnowledgeChecklist';
import { ProgressOverview } from './components/ProgressOverview';
import { useLocalStorage } from './hooks/useLocalStorage';
import { weeksData, knowledgeAreas } from './data/roadmapData';
import { AppState, ChecklistItem, WeekNote } from './types';

// Debug log for imported data
console.log('Imported knowledgeAreas:', knowledgeAreas);
console.log('First knowledge area:', knowledgeAreas[0]);
console.log('First knowledge area items:', knowledgeAreas[0]?.items);

function App() {
  const [appState, setAppState] = useLocalStorage<AppState>('fullstack-roadmap-state', {
    activeWeek: 1,
    activeTab: 'roadmap',
    weekProgress: {},
    knowledgeProgress: {},
    weekNotes: []
  });

  // Function to reset local storage (for debugging)
  const resetLocalStorage = () => {
    if (window.confirm('Reset all progress data? This cannot be undone.')) {
      localStorage.removeItem('fullstack-roadmap-state');
      window.location.reload();
    }
  };

  // Debug log to check the state
  useEffect(() => {
    console.log('Current appState:', appState);
    console.log('Knowledge areas from data:', knowledgeAreas);
    console.log('Knowledge progress from state:', appState.knowledgeProgress);
    
    // Add a reset button to the page for debugging
    const existingButton = document.getElementById('reset-data-button');
    if (!existingButton) {
      const resetButton = document.createElement('button');
      resetButton.id = 'reset-data-button';
      resetButton.textContent = 'Reset All Data (Debug)';
      resetButton.style.position = 'fixed';
      resetButton.style.bottom = '10px';
      resetButton.style.right = '10px';
      resetButton.style.zIndex = '9999';
      resetButton.style.padding = '8px 12px';
      resetButton.style.backgroundColor = '#f44336';
      resetButton.style.color = 'white';
      resetButton.style.border = 'none';
      resetButton.style.borderRadius = '4px';
      resetButton.style.cursor = 'pointer';
      resetButton.onclick = resetLocalStorage;
      document.body.appendChild(resetButton);
    }
  }, [appState]);

  const handleTabChange = (tab: 'roadmap' | 'checklist' | 'progress') => {
    setAppState(prev => ({ ...prev, activeTab: tab }));
  };

  const handleWeekProgressUpdate = (weekId: number, checklist: ChecklistItem[]) => {
    setAppState(prev => ({
      ...prev,
      weekProgress: {
        ...prev.weekProgress,
        [weekId]: checklist
      }
    }));
  };

  const handleKnowledgeProgressUpdate = (areaId: string, items: ChecklistItem[]) => {
    console.log('Updating knowledge progress for area:', areaId, 'with items:', items);
    setAppState(prev => {
      const newState = {
        ...prev,
        knowledgeProgress: {
          ...prev.knowledgeProgress,
          [areaId]: items
        }
      };
      console.log('New state after update:', newState);
      return newState;
    });
  };

  const handleNoteUpdate = (weekId: number, content: string) => {
    setAppState(prev => {
      const existingNoteIndex = prev.weekNotes.findIndex(note => note.weekId === weekId);
      const newNote: WeekNote = {
        weekId,
        content,
        timestamp: new Date().toISOString()
      };

      const updatedNotes = [...prev.weekNotes];
      if (existingNoteIndex >= 0) {
        updatedNotes[existingNoteIndex] = newNote;
      } else {
        updatedNotes.push(newNote);
      }

      return {
        ...prev,
        weekNotes: updatedNotes
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={appState.activeTab} setActiveTab={handleTabChange} />
      
      <main>
        {appState.activeTab === 'roadmap' && (
          <RoadmapView
            weeks={weeksData}
            weekProgress={appState.weekProgress}
            onWeekProgressUpdate={handleWeekProgressUpdate}
            weekNotes={appState.weekNotes}
            onNoteUpdate={handleNoteUpdate}
          />
        )}
        
        {appState.activeTab === 'checklist' && (
          <KnowledgeChecklist
            knowledgeAreas={knowledgeAreas}
            knowledgeProgress={appState.knowledgeProgress}
            onProgressUpdate={handleKnowledgeProgressUpdate}
          />
        )}
        
        {appState.activeTab === 'progress' && (
          <ProgressOverview
            weeks={weeksData}
            knowledgeAreas={knowledgeAreas}
            weekProgress={appState.weekProgress}
            knowledgeProgress={appState.knowledgeProgress}
          />
        )}
      </main>
    </div>
  );
}

export default App;
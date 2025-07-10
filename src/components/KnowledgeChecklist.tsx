import React, { useEffect } from 'react';
import { Monitor, Server, Cloud, Network, CheckCircle, Circle } from 'lucide-react';
import { KnowledgeArea, ChecklistItem } from '../types';

interface KnowledgeChecklistProps {
  knowledgeAreas: KnowledgeArea[];
  knowledgeProgress: Record<string, ChecklistItem[]>;
  onProgressUpdate: (areaId: string, items: ChecklistItem[]) => void;
}

export const KnowledgeChecklist: React.FC<KnowledgeChecklistProps> = ({
  knowledgeAreas,
  knowledgeProgress,
  onProgressUpdate
}) => {
  // Debug log to check props
  useEffect(() => {
    console.log('KnowledgeChecklist received props:');
    console.log('- knowledgeAreas:', knowledgeAreas);
    console.log('- knowledgeAreas length:', knowledgeAreas.length);
    console.log('- First knowledge area items:', knowledgeAreas[0]?.items);
    console.log('- knowledgeProgress:', knowledgeProgress);
  }, [knowledgeAreas, knowledgeProgress]);

  // Initialize knowledge progress if empty
  useEffect(() => {
    if (knowledgeAreas.length === 0) {
      console.error('No knowledge areas available!');
      return;
    }

    const uninitialized = knowledgeAreas.filter(area => !knowledgeProgress[area.id]);
    
    if (uninitialized.length > 0) {
      console.log('Initializing knowledge areas:', uninitialized.map(a => a.id));
      
      // Initialize each uninitialized area with its default items
      uninitialized.forEach(area => {
        console.log(`Initializing area ${area.id} with items:`, area.items);
        if (area.items && area.items.length > 0) {
          onProgressUpdate(area.id, JSON.parse(JSON.stringify(area.items)));
        } else {
          console.error(`Area ${area.id} has no items!`);
        }
      });
    }
  }, [knowledgeAreas, knowledgeProgress, onProgressUpdate]);

  const handleItemToggle = (areaId: string, itemId: string) => {
    // Find the area to get default items if needed
    const area = knowledgeAreas.find(a => a.id === areaId);
    if (!area) {
      console.error(`Could not find area with id ${areaId}`);
      return;
    }

    // Use existing progress or initialize from area.items if not yet in progress
    const currentItems = knowledgeProgress[areaId] || (area.items ? JSON.parse(JSON.stringify(area.items)) : []);
    
    console.log('Toggle item:', itemId, 'in area:', areaId);
    console.log('Current items before toggle:', currentItems);
    
    const updatedItems = currentItems.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    
    console.log('Updated items after toggle:', updatedItems);
    onProgressUpdate(areaId, updatedItems);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="h-6 w-6" />;
      case 'Server': return <Server className="h-6 w-6" />;
      case 'Cloud': return <Cloud className="h-6 w-6" />;
      case 'Network': return <Network className="h-6 w-6" />;
      default: return <Monitor className="h-6 w-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Checklist</h1>
        <p className="text-gray-600">Track your progress across all fullstack development areas</p>
        <p className="text-sm text-gray-500 mt-2">Areas: {knowledgeAreas.length}, Items in first area: {knowledgeAreas[0]?.items?.length || 0}</p>
      </div>

      {knowledgeAreas.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-yellow-800">No knowledge areas found. Please check your data.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {knowledgeAreas.map((area) => {
            const areaProgress = knowledgeProgress[area.id] || (area.items ? [...area.items] : []);
            const completedItems = areaProgress.filter(item => item.completed).length;
            const totalItems = areaProgress.length;
            const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

            return (
              <div key={area.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className={`${area.color} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getIcon(area.icon)}
                      <div>
                        <h3 className="text-lg font-semibold">{area.title}</h3>
                        <p className="text-white/80 text-sm">{completedItems}/{totalItems} completed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {!area.items || areaProgress.length === 0 ? (
                    <p className="text-gray-500 italic">No items found for this knowledge area.</p>
                  ) : (
                    <div className="space-y-3">
                      {areaProgress.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <button
                            onClick={() => handleItemToggle(area.id, item.id)}
                            className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            {item.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <Circle className="h-5 w-5" />
                            )}
                          </button>
                          <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {item.task}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
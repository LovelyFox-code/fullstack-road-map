import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, FileText, Github, Book, CheckCircle, Circle } from 'lucide-react';
import { WeekData, ChecklistItem } from '../types';

interface WeekCardProps {
  week: WeekData;
  isActive: boolean;
  onToggle: () => void;
  checklist: ChecklistItem[];
  onChecklistUpdate: (checklist: ChecklistItem[]) => void;
  note: string;
  onNoteUpdate: (note: string) => void;
}

export const WeekCard: React.FC<WeekCardProps> = ({
  week,
  isActive,
  onToggle,
  checklist,
  onChecklistUpdate,
  note,
  onNoteUpdate
}) => {
  const [noteExpanded, setNoteExpanded] = useState(false);
  
  const completedTasks = checklist.filter(item => item.completed).length;
  const totalTasks = checklist.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const handleChecklistToggle = (taskId: string) => {
    const updatedChecklist = checklist.map(item =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    onChecklistUpdate(updatedChecklist);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'github': return <Github className="h-4 w-4" />;
      case 'documentation': return <Book className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{week.id}</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{week.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{week.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                {completedTasks}/{totalTasks} tasks
              </div>
              <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            {isActive ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
          </div>
        </div>
      </div>

      {isActive && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Topics */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {week.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                <div className="space-y-2">
                  {week.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
                    >
                      <div className="text-gray-500 group-hover:text-blue-600">
                        {getResourceIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          {resource.title}
                        </div>
                        {resource.duration && (
                          <div className="text-sm text-gray-500">{resource.duration}</div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Project */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Week Project</h4>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h5 className="font-medium text-gray-900 mb-2">{week.project.title}</h5>
                  <p className="text-gray-600 text-sm mb-3">{week.project.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-700">Requirements:</span>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        {week.project.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Deliverables:</span>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        {week.project.deliverables.map((deliverable, index) => (
                          <li key={index}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Checklist */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Weekly Checklist</h4>
                <div className="space-y-2">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <button
                        onClick={() => handleChecklistToggle(item.id)}
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
              </div>

              {/* Notes */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Week Notes</h4>
                  <button
                    onClick={() => setNoteExpanded(!noteExpanded)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {noteExpanded ? 'Collapse' : 'Expand'}
                  </button>
                </div>
                {noteExpanded && (
                  <textarea
                    value={note}
                    onChange={(e) => onNoteUpdate(e.target.value)}
                    placeholder="Add your reflections, learnings, or notes for this week..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={6}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
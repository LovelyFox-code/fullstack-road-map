import React from 'react';
import { Calendar, Target, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { WeekData, KnowledgeArea, ChecklistItem } from '../types';

interface ProgressOverviewProps {
  weeks: WeekData[];
  knowledgeAreas: KnowledgeArea[];
  weekProgress: Record<number, ChecklistItem[]>;
  knowledgeProgress: Record<string, ChecklistItem[]>;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  weeks,
  knowledgeAreas,
  weekProgress,
  knowledgeProgress
}) => {
  // Calculate overall progress
  const totalWeekTasks = weeks.reduce((sum, week) => sum + week.checklist.length, 0);
  const completedWeekTasks = weeks.reduce((sum, week) => {
    const weekTasks = weekProgress[week.id] || week.checklist;
    return sum + weekTasks.filter(task => task.completed).length;
  }, 0);

  const totalKnowledgeTasks = knowledgeAreas.reduce((sum, area) => sum + area.items.length, 0);
  const completedKnowledgeTasks = knowledgeAreas.reduce((sum, area) => {
    const areaTasks = knowledgeProgress[area.id] || area.items;
    return sum + areaTasks.filter(task => task.completed).length;
  }, 0);

  const overallProgress = ((completedWeekTasks + completedKnowledgeTasks) / (totalWeekTasks + totalKnowledgeTasks)) * 100;

  // Calculate weekly progress
  const weeklyProgress = weeks.map(week => {
    const weekTasks = weekProgress[week.id] || week.checklist;
    const completed = weekTasks.filter(task => task.completed).length;
    const total = weekTasks.length;
    return {
      weekId: week.id,
      title: week.title,
      completed,
      total,
      percentage: total > 0 ? (completed / total) * 100 : 0
    };
  });

  // Calculate area progress
  const areaProgress = knowledgeAreas.map(area => {
    const areaTasks = knowledgeProgress[area.id] || area.items;
    const completed = areaTasks.filter(task => task.completed).length;
    const total = areaTasks.length;
    return {
      areaId: area.id,
      title: area.title,
      color: area.color,
      completed,
      total,
      percentage: total > 0 ? (completed / total) * 100 : 0
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Overview</h1>
        <p className="text-gray-600">Track your journey to becoming a fullstack developer</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{Math.round(overallProgress)}%</div>
            <div className="text-blue-100">Overall Progress</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{completedWeekTasks + completedKnowledgeTasks}</div>
            <div className="text-blue-100">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{totalWeekTasks + totalKnowledgeTasks}</div>
            <div className="text-blue-100">Total Tasks</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Weekly Progress</h2>
          </div>
          <div className="space-y-4">
            {weeklyProgress.map((week) => (
              <div key={week.weekId} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-medium text-sm">{week.weekId}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 truncate">{week.title}</span>
                    <span className="text-sm text-gray-500">{week.completed}/{week.total}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${week.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Areas Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Target className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Knowledge Areas</h2>
          </div>
          <div className="space-y-4">
            {areaProgress.map((area) => (
              <div key={area.areaId} className="flex items-center space-x-4">
                <div className={`w-8 h-8 ${area.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{area.title}</span>
                    <span className="text-sm text-gray-500">{area.completed}/{area.total}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${area.color.replace('bg-', 'bg-')}`}
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{Math.round(overallProgress)}%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 rounded-full p-3">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-gray-600">Total Weeks</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 rounded-full p-3">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-gray-600">Skill Areas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
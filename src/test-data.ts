// Test file to verify data imports
import { knowledgeAreas } from './data/roadmapData';

console.log('TEST FILE - knowledgeAreas:', knowledgeAreas);
console.log('TEST FILE - knowledgeAreas length:', knowledgeAreas.length);

if (knowledgeAreas.length > 0) {
  console.log('TEST FILE - First area:', knowledgeAreas[0]);
  console.log('TEST FILE - First area items:', knowledgeAreas[0].items);
  console.log('TEST FILE - First area items length:', knowledgeAreas[0].items.length);
} else {
  console.error('TEST FILE - No knowledge areas found!');
}

// Export something to make TypeScript happy
export const testCompleted = true; 
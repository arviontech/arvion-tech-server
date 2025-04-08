export const Skill_Level = {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
  Expert: 'Expert',
} as const;

export const Skill_Category = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  DevOps: 'DevOps',
  Database: 'Database',
  Android: 'Android',
  Tools: 'Tools',
  Other: 'Other',
} as const;

export interface TSkill {
  name: string;
  level: keyof typeof Skill_Level;
  category: keyof typeof Skill_Category;
  icon: string;
}

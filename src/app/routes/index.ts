import { Router } from 'express';
import { SkillRoute } from '../Modules/Skills/skill.route';
import { ExperienceRoutes } from '../Modules/Experience/experience.route';
import { ProjectRoutes } from '../Modules/Projects/project.route';
import { BlogRoutes } from '../Modules/Blogs/blog.route';
import { ContactRoutes } from '../Modules/Contact/contact.route';
import { ServiceRoutes } from '../Modules/Services/service.route';
import { TeamMemberRoutes } from '../Modules/TeamMembers/teamMember.route';

const middlewareRoutes = Router();

const routes = [
  {
    path: '/skill',
    route: SkillRoute,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/sendemail',
    route: ContactRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
  {
    path: '/team-member',
    route: TeamMemberRoutes,
  },
];

routes.forEach((route) => middlewareRoutes.use(route.path, route.route));
export const MiddlewareRoutes = middlewareRoutes;

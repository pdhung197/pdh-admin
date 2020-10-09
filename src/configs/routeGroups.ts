import { RouteGroup } from '../Models/Route';
import { pageRoutes, authRoutes, appRoutes, formRoutes, tableRoutes, adminRoutes } from './routes';

export const pageGroup: RouteGroup = {
  title: '',
  routes: pageRoutes,
};

export const appGroup: RouteGroup = {
  title: 'common.route.appGroup',
  routes: appRoutes,
};

export const componentGroup: RouteGroup = {
  title: 'common.route.componentGroup',
  routes: [...formRoutes, ...tableRoutes],
};

export const authGroup: RouteGroup = {
  title: 'common.route.authGroup',
  routes: authRoutes,
};

export const adminGroup: RouteGroup = {
  title: 'common.route.adminGroup',
  routes: adminRoutes,
};

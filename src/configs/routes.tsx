import { About } from '../pages/About';
import { ChangePass } from '../pages/PublicViews/ChangePass';
import { ResetPass } from '../pages/PublicViews/ResetPass';
import { SignIn } from '../pages/PublicViews/SignIn';
import { SignUp } from '../pages/PublicViews/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { RouteTyping } from '../Models/Route';

export const publicRoutes: RouteTyping[] = [
  {
    path: '/signin',
    accessLevel: 'public',
    component: SignIn,
    routeKey: 'common.route.signIn',
    routeLabel: 'Sign in',
  },
  {
    path: '/signup',
    accessLevel: 'public',
    component: SignUp,
    routeKey: 'common.route.signUp',
    routeLabel: 'Sign up',
  },
  {
    path: '/forgetpass',
    accessLevel: 'public',
    component: ResetPass,
    routeKey: 'common.route.forgetPass',
    routeLabel: 'Forget Pass',
  },
  {
    path: '/auth/callback',
    accessLevel: 'public',
    redirect: '/dashboard',
  },
];

export const privateRoutes: RouteTyping[] = [
  {
    path: '/admin/dashboard',
    accessLevel: 'viewer',
    component: Dashboard,
    exact: true,
    routeKey: 'common.route.dashboard',
    routeLabel: 'Dash board',
  },
  {
    path: '/admin/about',
    accessLevel: 'viewer',
    component: About,
    routeKey: 'common.route.about',
    routeLabel: 'About',
  },
];

export const adminRoutes: RouteTyping[] = [
  {
    path: '/user/changepass',
    accessLevel: 'admin',
    component: ChangePass,
    routeKey: 'common.route.changePass',
    routeLabel: 'Change pass',
  },
];

export const routes: RouteTyping[] = [...privateRoutes, ...publicRoutes, ...adminRoutes];

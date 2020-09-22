import { RouteTyping } from '../Components/Routing/Routing';
import { About } from '../pages/About';
import { ChangePass } from '../pages/AuthViews/ChangePass';
import { ResetPass } from '../pages/AuthViews/ResetPass';
import { SignIn } from '../pages/AuthViews/SignIn';
import { SignUp } from '../pages/AuthViews/SignUp';
import { Dashboard } from '../pages/Dashboard';

export const routes: RouteTyping[] = [
  {
    path: '/',
    accessLevel: 'viewer',
    component: Dashboard,
    exact: true,
    routeKey: 'common.route.dashboard',
    routeLabel: 'Dash board',
  },
  {
    path: '/about',
    accessLevel: 'viewer',
    component: About,
    routeKey: 'common.route.about',
    routeLabel: 'About',
  },
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
    path: '/admin/changepass',
    accessLevel: 'admin',
    component: ChangePass,
    routeKey: 'common.route.changePass',
    routeLabel: 'Change pass',
  },
  {
    path: '/auth/callback',
    accessLevel: 'public',
    redirect: '/',
  },
];

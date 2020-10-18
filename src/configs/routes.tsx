import { ChangePass } from '../pages/PublicViews/ChangePass';
import { ResetPass } from '../pages/PublicViews/ResetPass';
import { SignIn } from '../pages/PublicViews/SignIn';
import { SignUp } from '../pages/PublicViews/SignUp';
import { Dashboard } from '../pages/AuthViews/Dashboard';
import { RouteTyping } from '../Models/Route';
import { UserGrid } from '../pages/AuthViews/AppsPage/ContactPage/UserGrid';
import { UserList } from '../pages/AuthViews/AppsPage/ContactPage/UserList';
import { UserProfile } from '../pages/AuthViews/AppsPage/ContactPage/UserProfile';
import { Products } from '../pages/AuthViews/AppsPage/Ecommerce/Products';
import { ProductDetail } from '../pages/AuthViews/AppsPage/Ecommerce/ProductDetail';
import { BasicThings } from '../pages/AuthViews/FormPage/BasicThings';
import { ValidationForms } from '../pages/AuthViews/FormPage/ValidationForms';
import { WizardPage } from '../pages/AuthViews/FormPage/WizardPage';
import { BasicTables } from '../pages/AuthViews/TablePage/BasicTables';
import { DataTables } from '../pages/AuthViews/TablePage/DataTables';
import { EditableTables } from '../pages/AuthViews/TablePage/EditableTables';
import { defaultPath } from '../helpers/common';

export const authRoutes: RouteTyping[] = [
  {
    path: defaultPath + '/signin',
    accessLevel: 'public',
    component: SignIn,
    routeKey: 'common.route.signIn',
    routeLabel: 'Sign in',
  },
  {
    path: defaultPath + '/signup',
    accessLevel: 'public',
    component: SignUp,
    routeKey: 'common.route.signUp',
    routeLabel: 'Sign up',
  },
  {
    path: defaultPath + '/forgetpass',
    accessLevel: 'public',
    component: ResetPass,
    routeKey: 'common.route.forgetPass',
    routeLabel: 'Forget Pass',
  },
  {
    path: defaultPath + '/changepass',
    accessLevel: 'admin',
    component: ChangePass,
    routeKey: 'common.route.changePass',
    routeLabel: 'Change pass',
  },
  {
    path: defaultPath + '/auth/callback',
    accessLevel: 'public',
    redirect: defaultPath + '/dashboard',
  },
];

export const adminRoutes: RouteTyping[] = [
  {
    path: defaultPath + '/user/changepass',
    accessLevel: 'admin',
    component: ChangePass,
    routeKey: 'common.route.changePass',
    routeLabel: 'Change pass',
  },
];

export const pageRoutes: RouteTyping[] = [
  {
    path: defaultPath + '/admin/dashboard',
    accessLevel: 'viewer',
    component: Dashboard,
    exact: true,
    routeKey: 'common.route.dashboard',
    routeLabel: 'Dash board',
  },
];

export const appRoutes: RouteTyping[] = [
  {
    routeKey: 'common.route.contactPage',
    child: [
      {
        path: defaultPath + '/admin/user-grid',
        component: UserGrid,
        routeKey: 'common.route.userGrid',
      },
      {
        path: defaultPath + '/admin/user-list',
        component: UserList,
        routeKey: 'common.route.userList',
      },
      {
        path: defaultPath + '/admin/profile',
        component: UserProfile,
        routeKey: 'common.route.userProfile',
      },
    ],
  },
  {
    routeKey: 'common.route.ecommercePage',
    child: [
      {
        path: defaultPath + '/admin/products',
        component: Products,
        routeKey: 'common.route.products',
      },
      {
        path: defaultPath + '/admin/product-detail',
        component: ProductDetail,
        routeKey: 'common.route.productDetail',
      },
    ],
  },
];

export const formRoutes: RouteTyping[] = [
  {
    routeKey: 'common.route.forms',
    child: [
      {
        path: defaultPath + '/admin/basic-form',
        component: BasicThings,
        routeKey: 'common.route.basicForm',
      },
      {
        path: defaultPath + '/admin/validation-form',
        component: ValidationForms,
        routeKey: 'common.route.validationForm',
      },
      {
        path: defaultPath + '/admin/wizard',
        component: WizardPage,
        routeKey: 'common.route.wizardPage',
      },
    ],
  },
];

export const tableRoutes: RouteTyping[] = [
  {
    routeKey: 'common.route.tablePage',
    child: [
      {
        path: defaultPath + '/admin/basic-table',
        component: BasicTables,
        routeKey: 'common.route.basicTable',
      },
      {
        path: defaultPath + '/admin/data-table',
        component: DataTables,
        routeKey: 'common.route.dataTables',
      },
      {
        path: defaultPath + '/admin/editable-table',
        component: EditableTables,
        routeKey: 'common.route.editableTable',
      },
    ],
  },
];

export const privateRoutes: RouteTyping[] = [
  ...pageRoutes,
  ...appRoutes,
  ...formRoutes,
  ...tableRoutes,
];
export const publicRoutes: RouteTyping[] = [...authRoutes];

export const routes: RouteTyping[] = [...privateRoutes, ...publicRoutes, ...adminRoutes];

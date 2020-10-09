import { FunctionComponent } from 'react';

type AccessLevel = 'public' | 'viewer' | 'admin';

export type RouteTyping = {
  path?: string;
  accessLevel?: AccessLevel;
  exact?: boolean;
  redirect?: string;
  component?: FunctionComponent<any>;
  routeKey?: string;
  routeLabel?: string;
  child?: RouteTyping[];
};

export type RouteGroup = {
  title: string;
  routes: RouteTyping[];
};

export interface PrivateRouteType {
  accessLevel: AccessLevel;
}

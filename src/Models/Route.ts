import { FunctionComponent } from 'react';

type AccessLevel = 'public' | 'viewer' | 'admin';

export type RouteTyping = {
  path: string;
  accessLevel: AccessLevel;
  exact?: boolean;
  redirect?: string;
  component?: FunctionComponent<any>;
  child?: RouteTyping[];
  routeKey?: string;
  routeLabel?: string;
};

export interface PrivateRouteType {
  accessLevel: AccessLevel;
}

import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../../configs/routes';
import { AuthLayout } from '../../Containers/Layouts/AuthLayout';
import { FallBack } from '../FallBack/FallBack';
import { NotFound } from '../NotFound/NotFound';

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

const createManualRoute = (route: RouteTyping, key: number) => {
  const { path, accessLevel, exact, redirect, component: RenderingComponent } = route;

  const render = () => {
    if (redirect) return <Redirect to={redirect} />;

    if (!RenderingComponent) return <FallBack />;

    switch (accessLevel) {
      case 'public':
        return <RenderingComponent />;
      default:
        return (
          <AuthLayout {...route}>
            <RenderingComponent />
          </AuthLayout>
        );
    }
  };

  return <Route key={key} path={path} exact={exact} render={render} />;
};

export const Routing = () => {
  return (
    <Switch>
      {Object.values(routes).map(createManualRoute)}
      <Route component={NotFound} />
    </Switch>
  );
};

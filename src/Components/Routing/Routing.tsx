import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../../configs/routes';
import { AuthLayout } from '../../Containers/Layouts/AuthLayout';
import { flattenRoutesGroup } from '../../helpers/routeFnc';
import { PrivateRouteType, RouteTyping } from '../../Models/Route';
import { FallBack } from '../FallBack/FallBack';
import { NotFound } from '../NotFound/NotFound';

const createManualRoute = (route: RouteTyping, key: number) => {
  const { path, exact, redirect, component: RenderingComponent, child } = route;

  if ((!redirect && !RenderingComponent) || child) return null;

  const render = () => {
    if (redirect) return <Redirect to={redirect} />;

    if (!RenderingComponent) return <FallBack />;

    return <RenderingComponent />;
  };

  return <Route key={key} path={path} exact={exact} render={render} />;
};

const PrivateRouting = ({ accessLevel }: PrivateRouteType) => {
  const flattenRoutes: RouteTyping[] = flattenRoutesGroup(
    accessLevel === 'viewer' ? privateRoutes : adminRoutes
  );

  return (
    <AuthLayout accessLevel={accessLevel}>
      <Switch>
        {Object.values(flattenRoutes).map(createManualRoute)}
        <Redirect from="/admin*" to="/404" />
        <Redirect from="/user*" to="/404" />
      </Switch>
    </AuthLayout>
  );
};

export const Routing = () => {
  console.log({ route: process.env.PUBLIC_URL });
  return (
    <Switch>
      {Object.values(publicRoutes).map(createManualRoute)}
      <Route path="/admin" render={() => <PrivateRouting accessLevel="viewer" />} />
      <Route path="/user" render={() => <PrivateRouting accessLevel="admin" />} />
      <Redirect exact from="/" to={privateRoutes[0].path || '/'} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

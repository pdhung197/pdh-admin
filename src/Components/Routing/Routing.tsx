import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../../configs/routes';
import { AuthLayout } from '../../Containers/Layouts/AuthLayout';
import { defaultPath } from '../../helpers/common';
import { flattenRoutesGroup } from '../../helpers/routeFnc';
import { PrivateRouteType, RouteTyping } from '../../Models/Route';
import { FallBack } from '../FallBack/FallBack';
import { NotFound } from '../NotFound/NotFound';

const createManualRoute = (route: RouteTyping, key: number) => {
  const { path, exact, redirect, component: RenderingComponent, child } = route;

  if ((!redirect && !RenderingComponent) || child) return null;

  const render = () => {
    if (redirect) return <Redirect to={defaultPath + redirect} />;

    if (!RenderingComponent) return <FallBack />;

    return <RenderingComponent />;
  };

  return <Route key={key} path={defaultPath + path} exact={exact} render={render} />;
};

const PrivateRouting = ({ accessLevel }: PrivateRouteType) => {
  const flattenRoutes: RouteTyping[] = flattenRoutesGroup(
    accessLevel === 'viewer' ? privateRoutes : adminRoutes
  );

  return (
    <AuthLayout accessLevel={accessLevel}>
      <Switch>
        {Object.values(flattenRoutes).map(createManualRoute)}
        <Redirect from={`${defaultPath}/admin*`} to={`${defaultPath}/404`} />
        <Redirect from={`${defaultPath}/user*`} to={`${defaultPath}/404`} />
      </Switch>
    </AuthLayout>
  );
};

export const Routing = () => {
  return (
    <Switch>
      {Object.values(publicRoutes).map(createManualRoute)}
      <Route path={`${defaultPath}/admin`} render={() => <PrivateRouting accessLevel="viewer" />} />
      <Route path={`${defaultPath}/user`} render={() => <PrivateRouting accessLevel="admin" />} />
      <Redirect
        exact
        from={`${defaultPath}/`}
        to={`${defaultPath}${privateRoutes[0].path}` || `${defaultPath}/`}
      />
      <Route path={`${defaultPath}/*`} component={NotFound} />
    </Switch>
  );
};

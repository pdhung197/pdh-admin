import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../../configs/routes';
import { AuthLayout } from '../../Containers/Layouts/AuthLayout';
import { PrivateRouteType, RouteTyping } from '../../Models/Route';
import { FallBack } from '../FallBack/FallBack';
import { NotFound } from '../NotFound/NotFound';

const createManualRoute = (route: RouteTyping, key: number) => {
  const { path, exact, redirect, component: RenderingComponent } = route;

  const render = () => {
    if (redirect) return <Redirect to={redirect} />;

    if (!RenderingComponent) return <FallBack />;

    return <RenderingComponent />;
  };

  return <Route key={key} path={path} exact={exact} render={render} />;
};

const PrivateRouting = ({ accessLevel }: PrivateRouteType) => {
  return (
    <AuthLayout accessLevel={accessLevel}>
      <Switch>{Object.values([...privateRoutes, ...adminRoutes]).map(createManualRoute)}</Switch>
    </AuthLayout>
  );
};

export const Routing = () => {
  return (
    <Switch>
      {Object.values(publicRoutes).map(createManualRoute)}
      <Route path="/admin" render={() => <PrivateRouting accessLevel="viewer" />} />
      <Route path="/user" render={() => <PrivateRouting accessLevel="admin" />} />
      <Redirect exact from="/" to={privateRoutes[0].path} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

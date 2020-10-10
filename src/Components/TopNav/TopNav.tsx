import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  adminGroup,
  appGroup,
  authGroup,
  componentGroup,
  pageGroup,
} from '../../configs/routeGroups';
import { defaultPath } from '../../helpers/common';
import { PrivateRouteType, RouteGroup, RouteTyping } from '../../Models/Route';
import { useTranslation } from '../../useTranslation';

export const TopNav = React.memo(({ accessLevel }: PrivateRouteType) => {
  const { t } = useTranslation();

  const renderGroups =
    accessLevel === 'viewer' ? [pageGroup, appGroup, authGroup, componentGroup] : [adminGroup];

  const generateNavLinks = (groupRoutes: RouteTyping[]): ReactNode[] =>
    (groupRoutes || []).map((groupRoute: RouteTyping, index: number) => {
      const { path, routeKey, child } = groupRoute;
      if (!routeKey) return null;

      return (
        <React.Fragment key={index + routeKey}>
          <div>
            {path ? <Link to={defaultPath + path}>{t(routeKey)}</Link> : <span>{t(routeKey)}</span>}
            {child ? ' >' : ''}
          </div>
          {child && generateNavLinks(child)}
        </React.Fragment>
      );
    });

  return (
    <nav style={{ padding: 20 }}>
      {Object.values(renderGroups).map((group: RouteGroup, index: number) => {
        const { title, routes } = group;
        if (!routes || !routes.length) return null;

        return (
          <React.Fragment key={index}>
            {title && <h3>{t(title)}</h3>}
            {generateNavLinks(routes)}
          </React.Fragment>
        );
      })}
      <div>
        <Link to={`${defaultPath}/abcxyz`}>404</Link>
      </div>
    </nav>
  );
});

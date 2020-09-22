import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../configs/routes';
import { useTranslation } from '../../hooks/useTranslation/TranslationProvider';
import { RouteTyping } from '../../Models/Route';

export const TopNav = React.memo((props: any) => {
  const t = useTranslation();
  console.log('Render');
  return (
    <nav>
      {Object.values(routes).map((route: RouteTyping, index: number) => {
        const { path, routeKey } = route;
        if (!routeKey) return null;
        return (
          <div key={index}>
            <Link to={path}>{t(routeKey)}</Link>
          </div>
        );
      })}
      <div>
        <Link to="/abcxyz">404</Link>
      </div>
    </nav>
  );
});

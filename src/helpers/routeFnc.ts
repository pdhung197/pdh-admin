import { RouteTyping } from './../Models/Route';

export const flattenRoutesGroup = (routes: RouteTyping[]): any =>
  (routes || []).reduce((flatRoutes: RouteTyping[], route) => {
    const { child, ...otherRouteOptions } = route;
    flatRoutes.push(otherRouteOptions);
    if (child) flatRoutes.push(...flattenRoutesGroup(child));
    return flatRoutes;
  }, []);

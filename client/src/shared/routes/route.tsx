// import { Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
// import { publicRoute } from "./allRoutes";
// import type { AppRoute } from "./allRoutes";

// function AuthRoute() {
//   return (
//     <>
//       <Routes>
//         {publicRoute.map((route: AppRoute, inx: number) => {
//           return (
//             <Route
//               path={route.path}
//               key={`${route.title}-${inx}`}
//               element={<route.Component />}
//             />
//           );
//         })}
//       </Routes>
//     </>
//   );
// }

// export default AuthRoute;

import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoute, privateRoute, type AppRoute } from "./allRoutes";
import { RouteConstant } from "./routeConstant";
import { ProtectedRoute } from "./protectedRoutes";

function AuthRoute() {
  return (
    <Routes>
      {publicRoute.map((route: AppRoute, idx: number) => (
        <Route
          path={route.path}
          key={`public-${route.title}-${idx}`}
          element={<route.Component />}
        />
      ))}

      {privateRoute.map((route: AppRoute, idx: number) => (
        <Route
          path={route.path}
          key={`private-${route.title}-${idx}`}
          element={
            <ProtectedRoute>
              <route.Component />
            </ProtectedRoute>
          }
        />
      ))}

      <Route
        path="*"
        element={<Navigate to={RouteConstant.portfolio.path} replace />}
      />
    </Routes>
  );
}

export default AuthRoute;

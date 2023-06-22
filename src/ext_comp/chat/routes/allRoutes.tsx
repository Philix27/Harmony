import ChangePassword from "../views/Authentication/ChangePassword";
import LockScreen from "../views/Authentication/LockScreen";
import Login from "../views/Authentication/Login";
import Logout from "../views/Authentication/Logout";
import RecoverPassword from "../views/Authentication/RecoverPassword";
import Register from "../views/Authentication/Register";
import Dashboard from "../views/Dashboard";
import Root from "../views/Root";
import StarterPage from "../views/StarterPage";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const publicRoutes: Array<RouteProps> = [
  { path: "/auth-login", component: <Login /> },
  { path: "/auth-register", component: <Register /> },
  { path: "/auth-recoverpw", component: <RecoverPassword /> },
  { path: "/auth-changepassword", component: <ChangePassword /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/logout", component: <Logout /> },
];

const privateRoutes: Array<RouteProps> = [
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/", component: <Root /> },
];

export { publicRoutes, privateRoutes };

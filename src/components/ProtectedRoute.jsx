import { useContext } from "react";
import { Route } from "react-router-dom";
import NotLogged from "../pages/notlogged/NotLogged";
import AuthContext from "./authContext";

function ProtectedRoute({ children, ...rest }) {
  const authCtx = useContext(AuthContext);
  return (
    <Route {...rest}>
      {authCtx.isUserLoggedin ? children : <NotLogged />}{" "}
    </Route>
  );
}

export default ProtectedRoute;

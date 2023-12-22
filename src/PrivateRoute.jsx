import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loader from "./components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <Loader />
    }

    if (!isLoading && user) {
        return children

    } else {
        return <Navigate to={'/login'} state={location.pathname} />
    }
};

export default PrivateRoute;
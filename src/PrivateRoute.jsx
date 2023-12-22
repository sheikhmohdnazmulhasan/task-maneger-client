import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loader from "./components/Loader";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    if (!isLoading && user) {
        return children

    } else {
        return <Navigate to={'/login'} />
    }
};

export default PrivateRoute;
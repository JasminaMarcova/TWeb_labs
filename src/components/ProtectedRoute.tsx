import {Navigate, useLocation} from "react-router-dom";
import UserStore from "../store/UserStore";

const ProtectedRoute = ({children}: any) => {
    const location = useLocation();
    if (!UserStore.session) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
}

export default ProtectedRoute;
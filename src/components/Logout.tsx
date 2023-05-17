import {Navigate} from "react-router-dom";
import UserStore from "../store/UserStore";

export default function Logout() {
    UserStore.clearSession()
    return (<Navigate to="/login" replace />)
}
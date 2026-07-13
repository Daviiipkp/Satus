import { Navigate } from "react-router-dom";

export default function Redirect_Dashboard() {
    return <Navigate to="/dashboard" replace/>;
}
import { Navigate } from "react-router-dom";

export default function Redirect_Sign_In() {
    return <Navigate to="/sign-in" replace/>;
}
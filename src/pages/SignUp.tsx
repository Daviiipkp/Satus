import Gradient_Background from "../components/Gradient_Background";
import { Header } from "../components/Header";
import { Horizontal_Divisor } from "../components/Horizontal_Divisor";
import { SignedIn, SignedOut, SignUp as ClerkSignUp} from "@clerk/clerk-react";
import Redirect_Dashboard from "../components/Redirect_Dashboard";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Back_Home_Button from "../components/Back_Home_Button";


export default function SignUp() {
    return (
        <>
            <SignedIn>
                <Redirect_Dashboard/>
            </SignedIn>
            <SignedOut>
                <div className="h-screen w-screen overflow-hidden">
                    <Gradient_Background>
                        <Header/>
                        <Horizontal_Divisor/>
                        <div className="h-full w-full p-5 gap-5 relative ">
                            <div className="absolute left-15 top-10">
                                <Back_Home_Button/>
                            </div>
                            <div className="absolute top-3/7 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-145">
                                <ClerkSignUp signInUrl="/sign-in"></ClerkSignUp>
                            </div>
                        </div>
                    </Gradient_Background>
                </div>
            </SignedOut>
        </>
    );
}
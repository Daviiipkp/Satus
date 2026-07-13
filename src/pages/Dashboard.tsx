import Gradient_Background from "../components/Gradient_Background";
import { Header } from "../components/Header";
import { Horizontal_Divisor } from "../components/Horizontal_Divisor";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Redirect_Sign_In from "../components/Redirect_Sign_In";

export default function Dashboard() {
    return (
        <>
            <SignedIn>
                <Gradient_Background>
                    <Header/>
                    <Horizontal_Divisor/>
                    <div>
                        
                    </div>
                </Gradient_Background>
            </SignedIn>
            <SignedOut>
                <Redirect_Sign_In/>
            </SignedOut>
        </>
    );
}
import Gradient_Background from "../components/Gradient_Background";
import { Header } from "../components/Header";
import { Horizontal_Divisor } from "../components/Horizontal_Divisor";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Redirect_Sign_In from "../components/Redirect_Sign_In";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import Horizontal_Logo from "../components/Horizontal_Logo";
import { useState } from "react";

export default function Dashboard() {

    const [isPanelOpen, setPanel] = useState(true);

    return (
        <>
            <SignedIn>
                <Gradient_Background>
                    <div className="flex w-screen h-screen">
                        {/*The panel starts here*/}
                        <div className={isPanelOpen?"h-full w-100 outline-1 outline-white flex flex-col transition-all duration-300":"h-full w-20 outline-1 outline-white flex flex-col transition-all duration-300"}>
                            <div className="w-full h-ful flex flex-col relative">
                                <div className="w-full h-20 relative z-1">
                                    {isPanelOpen?<RiMenuUnfold4Fill className="text-gray-500 text-5xl right-5 top-4 absolute hover:text-gray-300 transition-colors duration:300" onClick={() => setPanel(!isPanelOpen)} />:<></>}
                                    
                                    {isPanelOpen?
                                    <div className="absolute w-full h-full -left-5 -top-10 opacity-100 ">
                                        <Horizontal_Logo/>
                                    </div>
                                    :
                                    <RiMenuUnfold3Fill className="text-gray-500 text-5xl left-5 top-4 absolute hover:text-gray-300 transition-colors duration:300" onClick={() => setPanel(!isPanelOpen)} />
                                    }

                                </div>
                                <div className="z-2">
                                    <Horizontal_Divisor/>
                                </div>
                            </div>
                        </div>
                        {/*Panel ends here*/}
                        
                    </div>
                </Gradient_Background>
            </SignedIn>
            <SignedOut>
                <Redirect_Sign_In/>
            </SignedOut>
        </>
    );
}
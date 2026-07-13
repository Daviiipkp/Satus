import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Vertical_Divisor } from './Vertical_Divisor'
import SmallLogo from "../assets/1.png"
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="w-full h-20 flex border-b-4 ">
            <div className="w-1/2 min-h-full bg-black flex items-center px-10">
                <img src={SmallLogo} alt="Small Logo" className="w-46 h-40" />
                <button className="text-white text-4xl font-light font-marker cursor-pointer hover:text-amber-100 transition-colors duration-300 -translate-x-8 -translate-y-1">Brasil</button>
            </div>
            <div className="w-1/2 min-h-full outline bg-black items-center flex justify-end gap-10 px-10">
                <Vertical_Divisor/>
                <button className="text-gray-400 text-xl font-syne uppercase cursor-pointer hover:text-amber-100 transition-colors duration-300">Photography</button>
                <Vertical_Divisor/>
                <button className="text-gray-400 text-xl font-syne uppercase cursor-pointer hover:text-amber-100 transition-colors duration-300">Digital Solutions</button>
                <Vertical_Divisor/>
                <SignedOut>
                    <Link to="/sign-in" className="text-gray-800 bg-white text-xl justify-center flex items-center rounded-2xl w-1/7 h-4/7 font-syne uppercase cursor-pointer hover:bg-amber-100 transition-colors duration-300">Sign-In</Link>
                </SignedOut>
                <SignedIn>
                    <UserButton 
                        appearance={{
                            elements: {
                                userButtonTrigger: {
                                    width: "36px",
                                    height: "36px",
                                    transition: "transform 0.2s",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    }
                                },
                                userButtonAvatarBox: {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "0.5rem"
                                }
                            }
                        }}
                    />
                </SignedIn>
            </div>
        </div>
    );
}
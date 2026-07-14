import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Vertical_Divisor } from './Vertical_Divisor'
import { Link } from 'react-router-dom';
import Horizontal_Logo from './Horizontal_Logo';

export function Header() {
    return (
        <div className="w-full h-20 flex ">
            <Horizontal_Logo/>
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
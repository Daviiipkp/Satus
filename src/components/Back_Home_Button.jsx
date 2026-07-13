import { FaArrowLeftLong } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Back_Home_Button() {
    return (
        
        <div className=" flex gap-4 items-center">
            <IoArrowBackCircle className="text-gray-500 scale-200" />
            <Link to="/" className="text-3xl font-mono uppercase text-gray-500 translate-y-0.5">Back to Home</Link>
        </div>
    );
}
import SmallLogo from "../assets/1.png"

export default function Horizontal_Logo() {
    return (
        <>
            <div className="w-1/2 min-h-full bg-black flex items-center">
                <img src={SmallLogo} alt="Small Logo" className="w-46 h-40" />
                <button className="text-white text-4xl font-light font-marker cursor-pointer hover:text-amber-100 transition-colors duration-300 -translate-x-8 -translate-y-1">Brasil</button>
            </div>
        </>
    );
}
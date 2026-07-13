

export default function Gradient_Background( { children } ) {
    return (
        <div className="w-screen h-screen bg-linear-to-b from-black to-gray-950 flex flex-col items-center">
            {children}
        </div>

    );
}
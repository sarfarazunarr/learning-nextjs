export function Navbar(){
    let name = "Sarfaraz"
    return (
        <nav className="flex justify-center gap-4 items-center w-full h-auto py-3 bg-black text-white border-b-2 border-green-400">
            <div className="text-white font-semibold text-2xl">GIAIC</div>
            <ul className="flex list-none gap-3 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Courses</li>
                <li>Complaints</li>
                <li>Acount</li>
            </ul>
            <div className="flex justify-center items-center gap-4">
                <h5 className="text-xl text-gray-300">Hi {name}</h5>
                <button className="px-3 py-2 rounded-md bg-yellow-500 text-white">Signup</button>
                <button className="px-3 py-2 rounded-md bg-yellow-500 text-white">Login</button>
            </div>
        </nav>
    )
}
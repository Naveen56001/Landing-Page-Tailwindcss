import { FaBars } from 'react-icons/fa';

function Header()
{
    return (
        <>
        <div className="flex justify-between lg:pl-20">
            <div className="flex items-center justify-center gap-2">
                <img src="./assets/Logo.svg" alt="Logo" />
                <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl px-2.5 py-1.5 text-xs text-white">Hoster is hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center font-lato gap-6 text-gray-500">
                <li>
                    <a href="#">Plans</a>
                </li>
                <li>
                    <a href="#">Find Domain</a>
                </li>
                <li>
                    <a href="#">Why Hosterr</a>
                </li>
            </ul>
            <div className="hidden lg:flex justify-between items-center font-lato gap-6">
                <a href="#" className="text-gray-500">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-600 hover:bg-blue-800 text-white">Join Waitlist</button>
            </div>
            <div className="lg:hidden">
                <FaBars className="size-5 mt-1"/>
            </div>
        </div>
        </>
    );
}

export default Header;
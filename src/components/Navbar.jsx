import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { LuLogIn } from 'react-icons/lu';
import { useContext } from 'react';
import Headroom from 'react-headroom';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navItem = <>
        <div className="md:flex gap-3 space-y-3 md:space-y-0">
            <p><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''}>Home</NavLink></p>
            <p><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''}>About</NavLink></p>
            <p><NavLink to={'/pricing'} className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''}>Pricing</NavLink></p>
            <p><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''}>Contact</NavLink></p>
        </div>
    </>
    function handleLogout() {
        signOut(auth)
        toast.success('Logged Out');
    }
    return (
        <div>
            <Toaster />
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* Navbar */}
                    <Headroom className='z-[1000]'> <div className="w-full navbar bg-base-300 z-[500]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-xl font-bold"><Link to={'/'}>TASK <span className="text-red-600">FORGE</span></Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <div className="flex items-center">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}
                                    {navItem}
                                </ul>
                                {user ? <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Profile" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-50 bg-white p-2 shadow menu menu-sm dropdown-content rounded-box w-72">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li><a>{user.email}</a></li>
                                        <li onClick={handleLogout}><a className='text-red-500 font-bold'>Logout</a></li>
                                    </ul>
                                </div> :
                                    <NavLink to={'/login'} className='flex items-center gap-1'>Login <LuLogIn className="text-2xl" /> </NavLink>}
                            </div>

                        </div>
                        {user ? <div className="flex justify-end md:hidden">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Profile" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-50 bg-white p-2 shadow menu menu-sm dropdown-content rounded-box w-72">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                        </a>
                                    </li>
                                    <li><a>{user.email}</a></li>
                                    <li onClick={handleLogout}><a className='text-red-500 font-bold'>Logout</a></li>
                                </ul>
                            </div>
                        </div> :
                            <NavLink to={'/login'} className='flex md:hidden items-center gap-1'>Login <LuLogIn className="text-2xl" /> </NavLink>}
                    </div></Headroom>
                    {/* Page content here */}
                    <div className="overflow-hidden">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 bg-opacity-90 z-50 pt-20">
                        {/* Sidebar content here */}
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div>
            {/* Navbar */}
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-xl font-bold">TASK <span className="text-red-600">FORGE</span></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div>
                <div className=" bg-gray-900">
                    <div className="max-w-2xl mx-auto text-white py-10">
                        <div className="text-center">
                            <h3 className="text-3xl mb-3"> Download our fitness app </h3>
                            <p> Stay fit. All day, every day. </p>
                            <div className="flex justify-center my-10">
                                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                                </div>
                                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Apple Store </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
                            <div className="order-1 md:order-2">
                                <span className="px-2">About us</span>
                                <span className="px-2 border-l">Contact us</span>
                                <span className="px-2 border-l">Privacy Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;
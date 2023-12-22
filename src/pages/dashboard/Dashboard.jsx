import { useContext } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../AuthProvider";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <body className="md:bg-gray-100 min-h-screen">
                <div className="min-h-full">
                    <div className="bg-blue-300 flex justify-between">
                        <div className=" max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">

                            <img className=" flex-1 w-48 h-48 rounded-full shadow-lg" src={user?.photoURL} alt="" />
                        </div>
                        <div className="bg-blue-300 hidden md:block max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className=" text-3xl font-sans tracking-tight text-gray-900">
                                {user?.displayName}
                            </h1>
                            <p className="font-semibold">{user?.email}</p>
                        </div>

                        <div className="bg-blue-300 mx-auto max-w-7xl px-4 hidden md:block py-6 sm:px-6 lg:px-8">

                            <div className="flex justify-between">

                                <div className="flex-1">
                                </div>

                                <div className="flex space-x-4 hidden lg:block md:block">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Request a Change</button>
                                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md">Settings</button>
                                </div>

                            </div>

                        </div>

                    </div>
                    <main className="min-h-96">
                        <div className="md:flex no-wrap md:-mx-2 w-full  ">

                            <div className=" hidden md:block w-full md:w-[20%] min-h-96 bg-white">

                                <div className=" p-3 ">

                                    <ul className="-mt-3 text-sm font-semibold text-gray-500 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded bg-white ">
                                        <li className="items-center py-3">
                                            <span>Joining Date</span><br />
                                            <span className="ml-auto">{user?.metadata.creationTime}</span>

                                        </li>
                                        <li className="items-center py-3">
                                            <h1>Last Logged in Time</h1>
                                            <span>{user?.metadata.lastSignInTime}</span><br />
                                            {/* <span className="ml-auto">10m - 15d</span> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" min-h-96 md:block lg:block ml-2 w-full">
                                <div className="w-full">
                                    <ul className="flex  ">
                                        <li className="mr-1 flex md:hidden">
                                            <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Add </a>
                                        </li>
                                        <li className="mr-1 hidden md:flex">
                                            <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Add Todo</a>
                                        </li>
                                        <li className="mr-1">
                                            <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Todo</a>
                                        </li>
                                        <li className="mr-1">
                                            <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Ongoing</a>
                                        </li>

                                        <li className="mr-1">
                                            <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Completed</a>
                                        </li>

                                    </ul>
                                    <div className="mt-5 px-10 w-full border">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </div>
    );
};

export default Dashboard;
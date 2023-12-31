import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import Swal from "sweetalert2";

const Dashboard = () => {
    document.title = 'TaskForge | Add Todo'
    const { user } = useContext(AuthContext);
    const [addTodoLinkStyle, setAddTodoLinkStyle] = useState(true);
    const [clickNameChangeButton, setClickNameChangeButton] = useState(false);

    function handleChangeName(event) {
        event.preventDefault();
        const name = event.target.name.value;
        updateProfile(auth.currentUser, { displayName: name }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Profile Name Updated'
            });
            setClickNameChangeButton(false);

        }).catch(err => console.log(err));
    }

    return (
        <div data-aos="fade-up">
            <body className="md:bg-gray-100 min-h-screen">
                <div className="min-h-full">
                    <div className="bg-blue-300 flex justify-between">
                        <div className=" max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">

                            <img className=" flex-1 w-48 h-48 rounded-full shadow-lg" src={user?.photoURL} alt="" />
                        </div>
                        <div className="bg-blue-300 hidden md:block max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {clickNameChangeButton ? <form className="flex items-center w-full gap-2" onSubmit={handleChangeName} data-aos="fade-down">
                                <input type="text" name="name" defaultValue={user?.displayName}
                                    className="px-2 py-[5px] rounded-md bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required />
                                <input type="submit" value="Update" className="py-1 rounded-md px-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" />
                                <span className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => setClickNameChangeButton(false)}>Cancel</span>
                            </form> :
                                <h1 className=" text-3xl font-sans tracking-tight text-gray-900">
                                    {user?.displayName}
                                </h1>}
                            <p className="font-semibold">{user?.email}</p>
                        </div>

                        <div className="bg-blue-300 mx-auto max-w-7xl px-4 hidden md:block py-6 sm:px-6 lg:px-8">

                            <div className="flex justify-between">

                                <div className="flex-1">
                                </div>

                                {!clickNameChangeButton && <div className="flex space-x-4 hidden lg:block md:block" onClick={() => setClickNameChangeButton(true)}>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Change Name</button>
                                </div>}
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
                                        <li className="mr-1 flex md:hidden" onClick={() => setAddTodoLinkStyle(true)}>
                                            <NavLink to={'/dashboard'} className={addTodoLinkStyle ? 'bg-[#2563EB] text-white inline-block py-2 px-4 border-l border-t border-r rounded-t font-semibold' : 'bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold'} >Add</NavLink>
                                        </li>
                                        <li className="mr-1 hidden md:flex" onClick={() => setAddTodoLinkStyle(true)}>
                                            <NavLink to={'/dashboard'} className={addTodoLinkStyle ? 'bg-[#2563EB] text-white inline-block py-2 px-4 border-l border-t border-r rounded-t font-semibold' : 'bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold'}>Add Todo</NavLink>
                                        </li>
                                        <li className="mr-1" onClick={() => setAddTodoLinkStyle(false)}>
                                            <NavLink to={'/dashboard/todo'} className={({ isActive }) => isActive ? 'bg-[#2563EB] text-white inline-block py-2 px-4 border-l border-t border-r rounded-t font-semibold' : 'bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold'} >Todo</NavLink>
                                        </li>
                                        <li className="mr-1" onClick={() => setAddTodoLinkStyle(false)}>
                                            <NavLink to={'/dashboard/ongoing'} className={({ isActive }) => isActive ? 'bg-[#2563EB] text-white inline-block py-2 px-4 border-l border-t border-r rounded-t font-semibold' : 'bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold'}  >Ongoing</NavLink>
                                        </li>

                                        <li className="mr-1" onClick={() => setAddTodoLinkStyle(false)}>
                                            <NavLink to={'/dashboard/completed'} className={({ isActive }) => isActive ? 'bg-[#2563EB] text-white inline-block py-2 px-4 border-l border-t border-r rounded-t font-semibold' : 'bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold'} >Completed</NavLink>
                                        </li>

                                    </ul>
                                    <div className="my-5 md:px-10 w-full">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body >
        </div >
    );
};

export default Dashboard;
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConPassword, setShowConPassword] = useState(false)

    function handleRegister(event) {
        alert('form submited')
    }

    return (
        <div>
            <div className="flex flex-col justify-center font-[sans-serif] my-20 text-[#333] sm:h-screen p-4">
                <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
                    <div className="text-center mb-12">
                        <p className="text-xl uppercase font-bold">create account</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm mb-2 block">Name</label>
                                <input name="email" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Email Address</label>
                                <input name="email" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Password</label>
                                <div className="flex relative">
                                    <input name="password" type={showPassword ? 'text' : 'password'} className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                                    {!showPassword ? <IoEye className="absolute right-3 mt-[15px] cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> :
                                        <IoEyeOff className="absolute right-3 mt-[15px] cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                                </div>
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Confirm Password</label>
                                <div className="flex relative">
                                    <input name="password" type={showConPassword? 'text' : 'password'} className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                                    {!showConPassword ? <IoEye className="absolute right-3 mt-[15px] cursor-pointer" onClick={() => setShowConPassword(!showConPassword)} /> :
                                        <IoEyeOff className="absolute right-3 mt-[15px] cursor-pointer" onClick={() => setShowConPassword(!showConPassword)} />}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="text-sm mb-2 block">Profile Picture</label>
                                <input
                                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    id="formFileSm"
                                    type="file" />
                            </div>
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm">
                                    I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="!mt-10">
                            <button type="submit" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center">Already have an account? <span className="text-blue-600 font-semibold hover:underline ml-1">Login here</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
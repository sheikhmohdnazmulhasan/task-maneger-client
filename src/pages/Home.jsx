import { FaLaptopCode } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import Testimonial from "../components/Testimonial";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="relative  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[300px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 uppercase">Welcome to Task<span className="text-red-600">Forge</span></h2>
                    <p className="text-lg text-center text-gray-200">Unlock the power of seamless task management with TaskForge! <br /> Your gateway to productivity, collaboration, and organized success.</p>
                    <a href="javascript:void(0)"
                        className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        Let’s Explore
                    </a>
                </div>
            </div>
            <div className="my-20">
                <h1 className="text-2xl md:text-3xl uppercase text-center font-bold">What type of people are <br /> using Task<span className="text-red-600">Forge</span> ?</h1>
                <div className="mt-10">
                    <div className="max-w-6xl mx-auto font-[sans-serif] text-[#333]">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                            <div className="p-4 text-center">
                                <FaLaptopCode className="inline-block w-10 h-10" />

                                <h3 className="text-xl font-semibold mb-2">Developers</h3>
                                <p className="text-gray-500 text-sm">TaskForge help developers organize their projects by breaking them down into manageable tasks. This ensures that each aspect of a project is clearly defined and progress can be tracked effectively.</p>
                            </div>
                            <div className="p-4 text-center">
                                <RiBankCardFill className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Bankers</h3>
                                <p className="text-gray-500 text-sm">Bankers often have multiple responsibilities and tasks to juggle, from client meetings to financial analysis. TaskForge help them prioritize tasks, set deadlines, and allocate time effectively.</p>
                            </div>
                            <div className="p-4 text-center">
                                <GrUserManager className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
                                <p className="text-gray-500 text-sm">Many corporate roles involve project-based work. TaskForge provide features for project planning, task assignment, progress tracking, and collaboration, facilitating effective project management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
         <Testimonial/>
            </div>
        </div>
    );
};

export default Home;
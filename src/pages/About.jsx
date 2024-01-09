const About = () => {
    document.title = 'TaskForge | About'

    return (
        <div className='min-h-screen my-20 mx-10 overflow-hidden' data-aos="fade-left">
            <div className="bg-white min-h-[475px] text-[#333] font-[sans-serif]">
                <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
                    <div className="max-w-md mx-auto p-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">TASK FORGE: Forging Your Path to Productivity and Beyond!</h2>
                        <p className="text-base">Welcome to TASK FORGE, where efficiency meets innovation in the world of task management. TASK FORGE is not just an app; it's a powerful tool designed to empower individuals and teams to conquer their tasks, projects, and goals with precision.</p>
                        <div className="mt-8 space-y-6">
                            <input name="name" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 outline-[#333]" placeholder="Enter name" />
                            <button type="button"
                                className="w-full px-4 py-2 text-base tracking-wider font-semibold outline-none border border-[#333] bg-[#222] text-white hover:bg-transparent hover:text-[#333] transition-all duration-300">Try now</button>
                        </div>
                    </div>
                    <div className="md:text-right max-md:mt-12 h-full">
                        <img src="https://readymadeui.com/team-image.webp" alt="Premium Benefits" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
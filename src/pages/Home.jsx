

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="relative  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6">Welcome to TaskForge</h2>
                    <p className="text-lg text-center text-gray-200">Unlock the power of seamless task management with TaskForge! <br /> Your gateway to productivity, collaboration, and organized success.</p>
                    <a href="javascript:void(0)"
                        className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        Let’s Explore
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
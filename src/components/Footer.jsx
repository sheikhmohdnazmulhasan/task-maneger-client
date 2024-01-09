import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
    function handleAppDownloadButton() {
        Swal.fire({
            icon: 'info',
            title: 'Not Ready Yet',
            text: 'Thank you for your interest. Our mobile app is not ready for production yet. We are working on it very quickly. we will let you know when it is available'
        });
    }
    return (
        <div>
            <div>
                <div className=" bg-gray-900">
                    <div className="max-w-2xl mx-auto text-white py-10">
                        <div className="text-center">
                            <h3 className="text-3xl mb-3 uppercase"> Download our TASK<span className="text-red-600">
                                FORGE</span> app </h3>
                            <p> Stay Manageable. All day, every day. </p>
                            <div className="flex justify-center my-10">
                                <div className="flex cursor-pointer items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2" onClick={handleAppDownloadButton}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                                </div>
                                <div className="flex cursor-pointer items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2" onClick={handleAppDownloadButton}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Apple Store </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; TASKFORGE - 2023 </p>
                            <div className="order-1 md:order-2">
                                <Link to={'/about'} className="px-2">About us</Link>
                                <Link to={'/contact'} className="px-2 border-l">Contact us</Link>
                                <span className="px-2 border-l">Privacy Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
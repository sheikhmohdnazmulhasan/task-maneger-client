import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    function handleUpdatedTodo(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const descriptions = form.descriptions.value;
        const dateline = form.dateline.value;
        const priority = form.priority.value;

        const updatedDoc = { title, descriptions, dateline, priority }

        axios.patch(`https://job-task-1-server-sable.vercel.app/update?id=${data._id}`, updatedDoc).then(res => {
            console.log(res.data);

            if (res.data.modifiedCount) {
                Swal.fire({
                    icon: 'success',
                    title: 'TODO Updated'
                });
                navigate('/dashboard/todo')

            } else if (res.data.modifiedCount < 1 && res.data.matchedCount > 0) {
                Swal.fire({
                    icon: 'info',
                    title: "You haven't updated anything"
                });
                navigate('/dashboard/todo')

            }

        }).catch(err => console.log(err));

    }
    return (
        <div>
            < div className='flex w-full justify-center' >
                < div className="p-6 rounded-xl lg:col-span-2" >
                    <form onSubmit={handleUpdatedTodo}>
                        <div className="relative flex items-center my-4">
                            <input type="text" name="title" defaultValue={data?.title}
                                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required />
                        </div>
                        <div className="relative flex items-center sm:col-span-2 my-4">
                            <textarea name="descriptions" defaultValue={data?.descriptions}
                                className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required></textarea>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">

                            <div className="relative flex items-center">
                                <input type="date" name="dateline" defaultValue={data.dateline}
                                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required />
                            </div>
                            <div className="relative flex items-center">
                                <select type="number" name="priority" defaultValue={data.priority}
                                    className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required>
                                    <option value="" disabled selected className="">Priority</option>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                        </div>
                        <button type="submit"
                            className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full w-full transition-all text-white rounded px-4 py-2.5 font-semibold bg-[#3A82F6] hover:bg-[#3f64a0]">
                            Update
                        </button>
                    </form>
                </ div>
            </div >
        </div>
    );
};

export default Edit;
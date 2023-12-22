import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddTodo = () => {
    const { user } = useContext(AuthContext);

    function handleAddTodo(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const descriptions = form.descriptions.value;
        const dateline = form.dateline.value;
        const priority = form.priority.value;

        const newTodo = { email: user.email, title, descriptions, dateline, priority, status: 'Todo' };

        axios.post('http://localhost:5000/new-todo', newTodo).then(res => {

            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Task Added'
                })
                form.reset()
            }

        }).catch(err => console.log(err))

    }

    return (
        < div className='flex w-full justify-center' >
            < div className="p-6 rounded-xl lg:col-span-2" >
                <form onSubmit={handleAddTodo}>
                    <div className="relative flex items-center my-4">
                        <input type="text" name="title" placeholder="Title"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required />
                    </div>
                    <div className="relative flex items-center sm:col-span-2 my-4">
                        <textarea name="descriptions" placeholder="Descriptions"
                            className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required></textarea>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">

                        <div className="relative flex items-center">
                            <input type="date" name="dateline" placeholder="Dateline"
                                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" required />
                        </div>
                        <div className="relative flex items-center">
                            <select type="number" name="priority" placeholder="Priority"
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
                        Add Todo
                    </button>
                </form>
            </ div>
        </div >
    );
};

export default AddTodo;
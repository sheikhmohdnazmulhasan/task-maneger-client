import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import NoData from "../../components/NoData";


const Todo = () => {
    document.title = 'TaskForge | Todo'

    const { user } = useContext(AuthContext);

    const { data = [], refetch, isPending } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const response = await axios.get(`https://job-task-1-server-sable.vercel.app/todo?email=${user.email}`);
            return response.data
        }
    })

    function handleChangeStatus(_id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://job-task-1-server-sable.vercel.app/todo-ongoing?id=${_id}`).then(res => {

                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Status Changed",
                            text: "Your Todo status has been updated.",
                            icon: "success"
                        });
                        refetch();
                    }

                }).catch(err => console.log(err))
            }
        });
    }

    if (isPending) {
        return <Loader />
    }

    if (data.length < 1) {
        return <NoData />
    }

    return (
        <div data-aos="fade-up">
            <div className="">
                {data.map(todo => <div key={todo._id} className="card bg-white text-primary mb-3 border md:border-none">
                    <div className="card-body">
                        <h2 className="card-title">{todo?.title}</h2>
                        <p className="text-black">{todo?.descriptions}</p>
                        <p>Dateline: {todo?.dateline}</p>
                        <p>Priority : {todo?.priority}</p>

                        <div className="card-actions justify-end">
                            <Link to={`/dashboard/edit/${todo._id}`}> <button className="btn">Edit</button></Link>
                            <button className="btn" onClick={() => handleChangeStatus(todo._id)}>Ongoing</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Todo;
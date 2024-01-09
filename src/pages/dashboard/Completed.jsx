import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import NoData from "../../components/NoData";

const Completed = () => {
    document.title = 'TaskForge | Completed Todo'
    const { user } = useContext(AuthContext);

    const { data = [], refetch, isPending } = useQuery({
        queryKey: ['ongoing'],
        queryFn: async () => {
            const response = await axios.get(`https://job-task-1-server-sable.vercel.app/completed?email=${user.email}`);
            return response.data
        }
    });

    function handleDeleteTodo(_id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://job-task-1-server-sable.vercel.app/delete?id=${_id}`).then(res => {

                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your todo has been deleted.",
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
                {data.map(completed => <div key={completed._id} className="card bg-white text-primary mb-3 border md:border-none">
                    <div className="card-body">
                        <h2 className="card-title">{completed?.title}</h2>
                        <p className="text-black">{completed?.descriptions}</p>
                        <p>Dateline: {completed?.dateline}</p>
                        <p>Priority : {completed?.priority}</p>

                        <div className="card-actions justify-end">
                            <button className="btn text-white bg-red-500 hover:bg-red-600" onClick={() => handleDeleteTodo(completed._id)}>Delete</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Completed;
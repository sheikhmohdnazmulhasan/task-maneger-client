import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";

const Ongoing = () => {
    const { user } = useContext(AuthContext);

    const { data = [], refetch } = useQuery({
        queryKey: ['ongoing'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/ongoing?email=${user.email}`);
            return response.data
        }
    });

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
                axios.patch(`http://localhost:5000/todo-completed?id=${_id}`).then(res => {

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

    return (
        <div>
            <div className="">
                {data.map(ongoing => <div key={ongoing._id} className="card bg-white text-primary mb-3 border md:border-none">
                    <div className="card-body">
                        <h2 className="card-title">{ongoing?.title}</h2>
                        <p className="text-black">{ongoing?.descriptions}</p>
                        <p>Dateline: {ongoing?.dateline}</p>
                        <p>Priority : {ongoing?.priority}</p>

                        <div className="card-actions justify-end">
                            <button className="btn" onClick={() => handleChangeStatus(ongoing._id)}>Completed</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Ongoing;
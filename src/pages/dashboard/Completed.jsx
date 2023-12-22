import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../AuthProvider";
import { useContext } from "react";

const Completed = () => {
    const { user } = useContext(AuthContext);

    const { data = [], refetch } = useQuery({
        queryKey: ['ongoing'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/completed?email=${user.email}`);
            return response.data
        }
    });

    function handleDeleteTodo(_id) {
        console.log(_id);
    }

    return (
        <div>
            <div className="">
                {data.map(completed => <div key={completed._id} className="card bg-white text-primary mb-3 border md:border-none">
                    <div className="card-body">
                        <h2 className="card-title">{completed?.title}</h2>
                        <p className="text-black">{completed?.descriptions}</p>
                        <p>Dateline: {completed?.dateline}</p>
                        <p>Priority : {completed?.priority}</p>

                        <div className="card-actions justify-end">
                            <button className="btn" onClick={() => handleDeleteTodo(completed._id)}>Completed</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Completed;
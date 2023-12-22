import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const Todo = () => {
    const { user } = useContext(AuthContext);

    const { data = [] } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/todo?email=${user.email}`);
            return response.data
        }
    })

    function handleChangeStatus(_id) {
        console.log(_id);
    }

    return (
        <div>
            <div className="">
                {data.map(todo => <div key={todo._id} className="card bg-white text-primary mb-3 border md:border-none">
                    <div className="card-body">
                        <h2 className="card-title">{todo?.title}</h2>
                        <p className="text-black">{todo?.descriptions}</p>
                        <p>Dateline: {todo?.dateline}</p>
                        <p>Priority : {todo?.priority}</p>

                        <div className="card-actions justify-end">
                            <button className="btn">Edit</button>
                            <button className="btn">Ongoing</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Todo;
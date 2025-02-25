import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("User not found");
                return response.json();
            })
            .then((data) => setUser(data))
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) return <h2>{error}<NotFound /></h2>;
    if (!user) return <h2>Loading...</h2>;

    return (

        <div>
            <h1>User Details:</h1>
            <h2 class="text-decoration-underline ">{user.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            <p>website:{user?.website}</p>
        </div>
    );
};
export default User;





import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../redux/users/operations';
import { selectUsers} from '../redux/users/selectorUsers';

export const UsersPage = () => {

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUser = () => {
        navigate("/users/add", { replace: true });
    }
    
    useEffect(() => {
        dispatch(fetchUsers());
        
    }, [dispatch]);
    
    return (
        <>
            <ul>
                {users.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.id}>{item.name}</Link>
                        </li>
                    )
                })}

            </ul>

            <button onClick={addUser}>Add user</button>

            {/* <Link to='add'>Add user</Link> */}
        </>
    )
}
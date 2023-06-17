import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOne } from '../redux/users/operations';
import { selectUserOne } from '../redux/users/selectorUsers';

export const UserDetalePage = () => {

    const { id } = useParams();
    const user = useSelector(selectUserOne);
    const dispatch = useDispatch();
    console.log(id);
    
    useEffect(() => {
        dispatch(fetchOne(id))
    }, [dispatch, id]);
    
    return (
        <>
            <h2>User</h2>
                {user && 
                    <>
                        <p>Name : {user.name}</p>
                        <p>Email: { user.email}</p>
                        <p>Phone: {user.Phone}</p>
                        <p>Adress: {user.Adress}</p>
                        <img src={user.avatar} alt={user.name} />
                    </>
                }
        </>
    )
}
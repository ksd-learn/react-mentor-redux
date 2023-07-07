import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletUser } from '../redux/users/operations';

export const ModalDelete = ({ closeModal, id }) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deletUsers = () => {
        dispatch(deletUser(id));
        navigate("/users", { replace: true });
    }

    return (
        <>
            <p>A you sure?</p>
            <button onClick={ ()=>deletUsers() }>Yes</button>
            <button onClick={closeModal}>No</button> 
        </>
        
    )
}
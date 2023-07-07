import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from '../redux/users/operations';
import { selectUsers, selectAddUserId } from '../redux/users/selectorUsers';

export const UsersAddPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(selectUsers);
    const isAddUser = useSelector(selectAddUserId);

    const handlSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            Phone: event.target.elements.phone.value,
            Adress: event.target.elements.adress.value,
            avatar: event.target.elements.avatar.value,
        };
        dispatch(addUser(newUser));
    }

    useEffect(() => {
        const newUserId = users[users.length - 1].id;
        if (isAddUser) {
            navigate(`/users/${newUserId}`, { replace: true });
        }
    }, [ users, navigate, isAddUser]);

    return (
        <form onSubmit={handlSubmit}>
            <label >
                Name
                <input
                    name="name" type="text"
                />
            </label>
            <label >
                Email
                <input
                    name="email" type="email"
                />
            </label>

            <label >
                Phone
                <input
                    name="phone" type="number"
                />
            </label>

            <label >
                Adress
                <input
                    name="adress" type="text"
                />
            </label>

            <label >
                Avatar
                <input
                    name="avatar" type="url"
                />
            </label>

            <button  type="submit">Add contact</button>
        </form>
    )
}
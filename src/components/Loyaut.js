const { NavLink, Outlet } = require("react-router-dom")

export const Loyaut = () => {
    return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'>Users</NavLink>
                    </li>
                </ul> 
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </>
       
    )
}
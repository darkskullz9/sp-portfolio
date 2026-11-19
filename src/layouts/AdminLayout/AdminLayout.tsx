import {Link, Outlet} from "react-router";

function AdminLayout() {
    return (
        <>
            <header>
                <h1>SP Portfolio - Administration</h1>

                <nav aria-label="Navigation administrateur">
                    <Link to="/">Voir le portfolio</Link>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default AdminLayout;
import { Link, Outlet } from "react-router";

function PublicLayout() {
    return (
        <>
            <header>
                <nav aria-label="Navigation principale">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                    <Link to="/skills">Compétences</Link>
                    <Link to="/projects">Projets</Link>
                    <Link to="/experiences">Expériences</Link>
                    <Link to="/e5">Épreuves E5</Link>
                    <Link to="/watch">Veille</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default PublicLayout;
import {Link} from "react-router";

function NotFound() {
    return (
        <main>
            <h1>404 - Page introuvables</h1>
            <p>La page que vous cherchez n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </main>
    );
}

export default NotFound;
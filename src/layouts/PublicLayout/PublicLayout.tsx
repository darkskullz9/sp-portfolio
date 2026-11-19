import { Link, Outlet } from "react-router";
import styles from "./PublicLayout.module.css";

function PublicLayout() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav} aria-label="Navigation principale">
                    <Link className={styles.navLink} to="/">
                        Accueil
                    </Link>

                    <Link className={styles.navLink} to="/about">
                        A propos
                    </Link>

                    <Link className={styles.navLink} to="/skills">
                        Compétences
                    </Link>

                    <Link className={styles.navLink} to="/projects">
                        Projets
                    </Link>

                    <Link className={styles.navLink} to="/experiences">
                        Expériences
                    </Link>

                    <Link className={styles.navLink} to="/e5">
                        Épreuves E5
                    </Link>

                    <Link className={styles.navLink} to="/watch">
                        Veille
                    </Link>

                    <Link className={styles.navLink} to="/contact">
                        Contact
                    </Link>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default PublicLayout;
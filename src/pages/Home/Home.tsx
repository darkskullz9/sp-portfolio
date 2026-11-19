import { Link } from "react-router";
import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>
                        Portfolio — BTS SIO option SLAM
                    </p>

                    <h1 className={styles.title}>
                        Bonjour, je suis Steven.
                        <span>Développeur web en formation.</span>
                    </h1>

                    <p className={styles.description}>
                        Passionné par le développement web et les nouvelles technologies,
                        je conçois des applications et des expériences numériques en mettant l'accent sur la fonctionnalité, l'accessibilité et l'expérience utilisateur.
                    </p>

                    <div className={styles.actions}>
                        <Link to="/projects" className={styles.primaryButton}>
                            Découvrir mes projets
                        </Link>

                        <Link to="/contact" className={styles.secondaryButton}>
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
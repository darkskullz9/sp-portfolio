import { Link } from "react-router";
import styles from "./About.module.css";

function About() {
    return (
        <main className={styles.about}>
            <section className={styles.introduction}>
                <p className={styles.eyebrow}>À propos de moi</p>

                <h1 className={styles.title}>
                    Développer, apprendre et concevoir.
                </h1>

                <p className={styles.lead}>
                    Je suis étudiant en BTS SIO, option SLAM, et passionné
                    par le développement informatique et les nouvelles
                    technologies.
                </p>

                <p className={styles.description}>
                    Je m'intéresse particulièrement à la conception
                    d'applications web, au développement logiciel et à
                    la création de solutions numériques fonctionnelles,
                    accessibles et intuitives.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Mon parcours</h2>

                <div className={styles.content}>
                    <h3>BTS Services Informatiques aux Organisations</h3>
                    <p className={styles.subtitle}>
                        Option SLAM — Solutions Logicielles et Applications
                        Métiers
                    </p>
                    <p>
                        Cette formation me permet de développer mes
                        compétences en programmation, conception
                        d'applications, gestion de bases de données et
                        développement de solutions logicielles.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Mes domaines d'intérêt</h2>

                <div className={styles.interests}>
                    <article className={styles.interest}>
                        <h3>Développement web</h3>
                        <p>
                            Création d'interfaces modernes et développement
                            d'applications web dynamiques.
                        </p>
                    </article>

                    <article className={styles.interest}>
                        <h3>Développement logiciel</h3>
                        <p>
                            Conception d'applications et exploration de
                            nouvelles technologies.
                        </p>
                    </article>

                    <article className={styles.interest}>
                        <h3>Informatique et matériel</h3>
                        <p>
                            Maintenance informatique, assemblage de PC
                            et compréhension des architectures matérielles.
                        </p>
                    </article>
                </div>
            </section>

            <section className={styles.closing}>
                <h2>Découvrir mon travail</h2>
                <p>
                    Consulte mes réalisations pour découvrir les technologies
                    que j'utilise et les projets sur lesquels je travaille.
                </p>

                <Link to="/projects" className={styles.button}>
                    Voir mes projets
                </Link>
            </section>
        </main>
    );
}

export default About;
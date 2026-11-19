import styles from "./Skills.module.css";

const skillCategories = [
    {
        title: "Développement web",
        description:
            "Conception d'interfaces web et développement d'applications dynamiques.",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    },

    {
        title: "Développement back-end",
        description:
            "Développement de fonctionnalités serveur, gestion des données et création d'API.",
        skills: ["PHP", "Symfony", "Node.js", "Express.js"],
    },

    {
        title: "Développement logiciel",
        description:
            "Conception d'applications multiplateformes et exploration du développement mobile.",
        skills: ["Dart", "Flutter"],
    },

    {
        title: "Bases de données",
        description:
            "Conception, manipulation et gestion de bases de données relationnelles.",
        skills: ["SQL", "MySQL", "Doctrine ORM"],
    },

    {
        title: "Outils et environnements",
        description:
            "Gestion de versions, environnement de développement et systèmes d'exploitation.",
        skills: ["Git", "GitHub", "Linux", "VS Code"],
    },

    {
        title: "Informatique et matériel",
        description:
            "Assemblage, diagnostic matériel et maintenance informatique.",
        skills: [
            "Montage PC",
            "Diagnostic matériel",
            "Maintenance informatique",
        ],
    },
];

function Skills() {
    return (
        <main className={styles.skills}>
            <section className={styles.introduction}>
                <p className={styles.eyebrow}>Mes compétences</p>

                <h1 className={styles.title}>
                    Des compétences techniques au service de mes projets.
                </h1>

                <p className={styles.lead}>
                    Je développe progressivement mes compétences en
                    développement web, logiciel et informatique à travers
                    ma formation et mes projets personnels.
                </p>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeading}>
                    <h2>Domaines de compétences</h2>

                    <p>
                        Les technologies et outils que j'utilise ou que
                        j'explore dans mon parcours.
                    </p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map((category) => (
                        <article
                            className={styles.card}
                            key={category.title}
                        >
                            <h3>{category.title}</h3>

                            <p className={styles.cardDescription}>
                                {category.description}
                            </p>

                            <ul className={styles.skillList}>
                                {category.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Skills;
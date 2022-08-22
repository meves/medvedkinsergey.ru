import React, { useRef } from "react";
import styles from './index.module.scss';

export const Concept: React.FC = () => {
    const refConcepts = useRef([
        {id: 1, title: "Fundamental", items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Responsive']},
        {id: 2, title: "Front-end", items: ['React', 'Redux', 'Next', 'Babel', 'CSS Frameworks']},
        {id: 3, title: "Back-end", items: ['Express', 'Next', 'Nodejs', 'TypeScript', 'MySQL']},
        {id: 4, title: "Testing", items: ['Jest', 'React-test-renderer', 'Mocha', 'Enzyme', 'Unit-testing']},
        {id: 5, title: "Hosting", items: ['Hosting', 'VPS/VDS', 'AWS', 'Vercel', 'GitHub Pages']},
        {id: 6, title: "Tools", items: ['Git', 'Webpack', 'Postman', 'Figma', 'Bash']},
    ]);
    return (
        <section className={styles.concepts}>
            <h1>Concept of Development</h1>
            <p>Development is based on the use of modern and reliable tools and approaches.
            </p>
            <div className={styles.wrapper}>
            {refConcepts.current.map(concept => (
                <div className={styles.conceptBlock} key={concept.id}>
                    <h4>{concept.title}</h4>
                    {concept.items.map(item => (
                        <div className={styles.item} key={item}>
                            + {item}
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </section>
    )
}
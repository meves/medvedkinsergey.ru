import React, { useRef } from "react";
import { AppButton } from "../../widgets/Button";
import styles from './index.module.scss';
const list1 = [
    { id: 1, text: 'HTML / CSS' },
    { id: 2, text: 'Responsive site layout' },
    { id: 3, text: 'Adaptive site layout' },
    { id: 4, text: 'JavaScript ES-5, ES-6+' },
    { id: 5, text: 'TypeScript, generic types, decorators' },
    { id: 6, text: 'React UI framework' },
    { id: 7, text: 'React Context for state managment' },
    { id: 8, text: 'Redux state managment' },
    { id: 9, text: 'REST API and HTTP protocol' },
    { id: 10, text: 'Next framework for SEO improving' },
]

const list2 = [
    { id: 1, text: 'Express with TypeScript on server side' },
    { id: 2, text: 'SPA, CSR, SSR, SSG and ISR' },
    { id: 3, text: 'Nest framework' },
    { id: 4, text: 'Hosting, VPS/VDS, AWS' },
    { id: 5, text: 'SQL databases, MySQL, PostgreSQL' },
    { id: 6, text: 'ORM: TypeORM, Sequalize' },
    { id: 7, text: 'Git and Github' },
    { id: 8, text: 'Webpack for project packeting' },
]

export const MySkills: React.FC = () => {
    const listsRef = useRef({list1, list2})
    return (
        <section className={styles.skills}>
            <header>
                <h5>My Skills</h5>
                <h1>Expertise</h1>
                <p>
                    I studied web-development fundamental: HTML, CSS, JavaScript, TypeScript, React, Redux, Next, Express,
                    I also have experience with such tools and technologies like SASS, CSS frameworks, unit testing, Webpack, 
                    Git, REST, HTTP and other like C, Java, SQL.
                </p>
                <AppButton
                    label="Resume"
                    picture={{image: "/images/icons/resume.svg", width: 12, height: 12}}
                />
            </header>
            <ul>
                {listsRef.current.list1.map(el => (
                    <li key={el.id}>{el.text}</li>
                ))}
            </ul>
            <ul>
            {listsRef.current.list2.map(el => (
                    <li key={el.id}>{el.text}</li>
                ))}
            </ul>
        </section>
    )
}
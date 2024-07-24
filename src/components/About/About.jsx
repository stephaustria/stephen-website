import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("about/aboutImg.png")}
                alt="Lion Emoji"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/grad.png")} 
                        alt="Grad Cap" 
                        className={styles.gradIcon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Arizona State University</h3>
                            <p>I graduated Magna Cum Laude with a Bachelor's Degree in Computer Science with a concentration in Software Engineering on May 2024</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursor.png")} 
                        alt="Cursor"
                        className={styles.cursorIcon} 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Developer</h3>
                            <p>I am a full-stack developer with experience in both frontend development and backend development</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/computer.png")} 
                        alt="Computer" 
                        className={styles.computerIcon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Interests</h3>
                            <p>I am interested in many varying positions including: machine learning, artificial intelligence, 
                            web development, mobile development, and quality assurance</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

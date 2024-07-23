import React from "react";
import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

export const Me = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Stephen!</h1>
            <p className={styles.description}>
                Results oriented and highly motivated college graduate with a strong foundation in computer science and software engineering. Eager to leverage technical skills and academic knowledge to contribute effectively as a software engineer in an innovative and dynamic company. 
                Adept at problem-solving, collaboration, and quick learning in fast-paced environments. 
            </p>
            <a href="mailto:stephaustria30@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img 
        src={getImageUrl("me/Me.png")}
        alt="Image of Me"
        className={styles.meImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
}
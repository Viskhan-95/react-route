import React from 'react';
import styles from './styles.module.css'

const Homepage = () => {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                Cover your homepage
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium asperiores autem illo! Voluptatem neque tempore officiis,
                quo nostrum autem, eaque dolorum ipsa, labore veniam repellendus ab ex
                aliquam pariatur aperiam.
            </div>
            <div className={styles.btn_block}>
                <button className={styles.btn} >
                    Homepage learn more
                </button>
            </div>
        </div>
    );
};

export default Homepage;
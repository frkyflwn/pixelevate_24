import React from 'react'
import styles from './HeroBackground.module.css';

const HeroBackground = () => {
    return (
        <div className={styles['bubblesCon']}>
            <div className={styles['bubbles']}>
                <span className={styles.span11}></span>
                <span className={styles.span24}></span>
                <span className={styles.span14}></span>
                <span className={styles.span18}></span>
                <span className={styles.span19}></span>
                <span className={styles.span22}></span>
                <span className={styles.span21}></span>
                <span className={styles.span13}></span>
                <span className={styles.span17}></span>
                <span className={styles.span28}></span>
            </div>
        </div>
    )
}

export default HeroBackground
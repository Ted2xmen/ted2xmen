import React from 'react'
import styles from './badges.module.css'
import { aboutMe } from '../cms'


const Badges = () => {
    return (
        <div className={styles.badgeContainer}>
            {aboutMe.map((badge) => {
                return (
                    <span className={styles.badge}> {badge} </span>);
            })}
        </div>
    )
}

export default Badges
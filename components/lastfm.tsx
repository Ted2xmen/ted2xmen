// @ts-nocheck
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './lastfm.module.css'
import { lastFmAPI } from '../cms'
import { FaLastfm } from 'react-icons/fa'


const Lastfm = () => {
    const [item, setItem] = useState([])
    const api_key = lastFmAPI
    useEffect(() => {
        fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ted2xmen&api_key=${api_key}&format=json`
        )
            .then((response) => response.json())
            .then((data) => setItem(data))
    }, [api_key])

    return (
        <div className={styles.flex}>
            <FaLastfm />
            <img
                src={item.recenttracks?.track[0].image[0]['#text']}
                alt={item.recenttracks?.track[0].artist['#text']} />
            <h1 className="font-bold"> {item.recenttracks?.track[0].artist['#text']} </h1>
            <h1> {item.recenttracks?.track[0].name} </h1>
        </div>
    )
}

export default Lastfm
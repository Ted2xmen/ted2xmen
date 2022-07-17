import React from 'react'
import { useEffect, useState } from 'react'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const LastFM = () => {
  const [item, setItem] = useState([])
  const iconw = 8
  const api_key = process.env.NEXT_PUBLIC_LASTFM_API
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ted2xmen&api_key=${api_key}&format=json`
    )
      .then((response) => response.json())
      .then((data) => setItem(data))
  }, [])

  return (
    <div>
      <div className="inline-flex items-center space-x-3 rounded-lg bg-green-700 p-1 px-2 text-gray-100 shadow-md dark:bg-green-900 dark:text-gray-300">
        <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={iconw} />
        <img
          className="rounded-lg p-1"
          src={item.recenttracks?.track[0].image[0]['#text']}
          alt={item.recenttracks?.track[0].artist['#text']}
        />
        <h1 className="font-bold"> {item.recenttracks?.track[0].artist['#text']} </h1>
        <h1> {item.recenttracks?.track[0].name} </h1>
      </div>
    </div>
  )
}

export default LastFM

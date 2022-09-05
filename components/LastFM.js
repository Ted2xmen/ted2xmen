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
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ted2xmen&api_key=${api_key}&format=json`
    )
      .then((response) => response.json())
      .then((data) => setItem(data))
  }, [api_key])

  return (
    <div>
      <div className="lastfm-box">
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

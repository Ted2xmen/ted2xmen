import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import LastFM from '../LastFM'

const SocialLinks = () => {
  const iconw = 10

  return (
    <div>
      <div className="my-6 flex flex-wrap items-center justify-center gap-3 space-x-3 md:justify-center  2xl:justify-center">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
        <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
        <SocialIcon kind="medium" href={siteMetadata.medium} size={iconw} />
        <SocialIcon kind="behance" href={siteMetadata.behance} size={iconw} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={iconw} />
        <LastFM />
      </div>
    </div>
  )
}

export default SocialLinks

import Image from 'next/image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
function Info() {
  const iconw = 8

  return (
    <div className="py-6">
      <h2 className="flex items-center gap-4 bg-gradient-to-l from-green-300 to-green-600 bg-clip-text py-6 text-6xl font-extrabold text-transparent sm:text-5xl">
        Tuğrul Erdem Dogru
      </h2>
      <p className="block text-gray-600 dark:text-gray-500">
        <span className="text-xl font-bold dark:text-zinc-500">Frontend Developer.</span> Mostly{' '}
        <span className="text-lg italic text-sky-600"> React, </span>
        <span className="text-lg italic text-green-600"> Vue, </span>
        <span className="text-lg italic text-purple-600"> Tailwind </span> Lorem ipsum dolor sit
        amet. Familiar with <span className="text-lg italic text-yellow-600"> Firebase, </span>
        <span className="text-lg italic text-pink-600"> Node/Express, </span>
        <span className="text-lg italic text-orange-600"> Strapi </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vero. Also loving{' '}
        <span className="text-lg italic text-lime-600"> Next JS </span> Lorem, ipsum dolor. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Inventore!
      </p>
      <div className="my-6 flex gap-3 space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
        <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
        <SocialIcon kind="medium" href={siteMetadata.medium} size={iconw} />
        <SocialIcon kind="behance" href={siteMetadata.behance} size={iconw} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={iconw} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={iconw} />
      </div>
      <Link
        href="https://eleventree.netlify.app/"
        className="py-2 text-lg text-gray-600 dark:text-gray-300"
      >
        Check out my last project{' '}
        <span className="italic text-green-500 hover:underline">eleventree</span>
      </Link>
    </div>
  )
}

export default Info

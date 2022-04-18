import Image from 'next/image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
function Info() {
  const iconw = 8

  return (
    <div className="py-4">
      <h2 className="flex items-center bg-gradient-to-l from-green-500 to-green-700 bg-clip-text pb-4 text-center text-6xl font-extrabold text-transparent sm:text-5xl">
        Tuğrul Erdem Dogru
      </h2>
      <p className="block py-2 text-gray-800 dark:text-gray-400">
        <span className="text-xl font-bold dark:text-zinc-400">Frontend Developer.</span> Mostly{' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore minus quae cum placeat eum
        et amet sunt quidem aliquid voluptate.{' '}
        <span className="text-lg font-bold dark:text-zinc-400">Mostly</span>{' '}
        <span className="font-bold italic text-orange-500">React, </span>
        <span className="font-bold italic text-green-500">Vue</span> and{' '}
        <span className="font-bold italic text-purple-500">TailwindCSS.</span> Voluptatibus saepe
        accusamus architecto, tempora sapiente doloremque aliquam adipisci dolor pariatur quod nihil
        magni, facilis porro placeat molestias cupiditate ad, eos ducimus.
      </p>
      <div className="my-6 flex gap-3 space-x-2">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
        <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
        <SocialIcon kind="medium" href={siteMetadata.medium} size={iconw} />
        <SocialIcon kind="behance" href={siteMetadata.behance} size={iconw} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        {/* <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={iconw} /> */}
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

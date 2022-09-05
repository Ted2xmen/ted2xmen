import Image from 'next/image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import LastFM from '@/components/LastFM'

function Info() {
  const iconw = 8

  return (
    <div className="py-4">
      <p className="block py-2 text-gray-800 dark:text-gray-400">
        <span className="text-xl font-bold dark:text-zinc-400">Frontend Developer.</span> Mostly{' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore minus quae cum placeat eum
        et amet sunt quidem aliquid voluptate.{' '}
        <span className="text-lg font-bold dark:text-zinc-400">Mostly</span>{' '}
        <span className="font-bold italic text-orange-500">React, </span>
        <span className="font-bold italic text-green-500">Vue</span> and{' '}
        <span className="font-bold italic text-purple-500">TailwindCSS.</span> Voluptatibus saepe
        accusamus architecto, tempora sapiente doloremque aliquam adipisci dolor pariatur quod nihil
        magni, eos ducimus.
      </p>
      <div className="my-6 flex flex-wrap items-center justify-center gap-3 space-x-2 md:justify-start  2xl:justify-start">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
        <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
        <SocialIcon kind="medium" href={siteMetadata.medium} size={iconw} />
        <SocialIcon kind="behance" href={siteMetadata.behance} size={iconw} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={iconw} />
        <LastFM />
      </div>
      <div className="">
        Check out my last projects
        <Link href="/projects" className="py-2 text-lg text-gray-600 dark:text-gray-300">
          <span className=" text-orange-500 hover:underline"> fixboard, </span>
        </Link>{' '}
        <Link
          href="https://showres.vercel.app/"
          className="py-2 text-lg text-gray-600 dark:text-gray-300"
        >
          <span className=" text-green-500 hover:underline"> showRes</span>
        </Link>{' '}
        and{' '}
        <Link
          href="https://read101.netlify.app/"
          className="py-2 text-lg text-gray-600 dark:text-gray-300"
        >
          <span className=" text-indigo-500 hover:underline"> read 101</span>
        </Link>
      </div>
    </div>
  )
}

export default Info

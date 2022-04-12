import Image from 'next/image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
function Info() {
  const iconw = 8

  return (
    <div className="py-6">
      <h2 className="bg-gradient-to-l  from-green-300 to-green-600 bg-clip-text py-6 text-6xl font-extrabold text-transparent sm:text-5xl">
        Tuğrul Erdem Dogru
      </h2>
      <p className="text-gray-600 dark:text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quibusdam provident eum,
        et nesciunt ab debitis at aliquid non rerum, itaque exercitationem saepe commodi libero quod
        natus cum officia reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tempora, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam
        harum. Assumenda non dolor exercitationem nemo cum tempora? Sed aspernatur officia maxime
        impedit dolorum provident eum, quo ipsum delectus! Temporibus.
      </p>
      <div className="my-6 flex gap-3 space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
        <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={iconw} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={iconw} />
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

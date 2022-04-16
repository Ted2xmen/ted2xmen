import Image from 'next/image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
function Info() {
  const iconw = 8

  return (
    <div className="py-6">
      <h2 className="flex  items-center gap-4 bg-gradient-to-l from-green-300 to-green-600 bg-clip-text py-6 text-6xl font-extrabold text-transparent sm:text-5xl">
        Tuğrul Erdem Dogru <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={10} />
      </h2>
      <p className="text-gray-600 dark:text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
        <span className="text-lg text-pink-600"> Jamstack </span>
        Tempora, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. harum. Assumenda
        non dolor exercitationem nemo cum tempora? Sed aspernatur officia maxime impedit dolorum{' '}
        <span className="text-lg font-bold text-yellow-600"> React </span> eum, quo ipsum
        Temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <span className="text-lg text-yellow-600"> Next JS </span> Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Modi?
        <span className="text-lg text-indigo-400"> Redux </span>enim culpa explicabo illo
        reprehenderit fuga totam laborum odit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
        <span className="text-lg text-green-600"> Vue 3 </span>
        perferendis maiores, officiis, cumque nam, animi sequi nostrum aspernatur incidunt eligendi
        accusamus. Veniam, sint id. Temporibus, delectus. Tenetur obcaecati magni{' '}
        <span className="text-lg text-orange-600"> Tailwind CSS </span>
        quaerat suscipit minus dolor iure dolorum, quasi quas autem blanditiis quae.
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

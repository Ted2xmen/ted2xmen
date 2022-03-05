import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const iconw = 8
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex gap-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconw} />
          <SocialIcon kind="github" href={siteMetadata.github} size={iconw} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={iconw} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={iconw} />
        </div>
        <div className="my-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="py-4"></div>
      </div>
    </footer>
  )
}

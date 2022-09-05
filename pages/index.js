import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import HeroText from '@/components/Landing/HeroText'
import SocialLinks from '@/components/Landing/SocialLinks'
import AboutText from '@/components/Landing/AboutText'
import SoftSkills from '@/components/Landing/SoftSkills'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-12 pb-8 text-center md:space-y-5">
        <HeroText />
        <SoftSkills />
        <AboutText />
        <SocialLinks />
      </div>
    </>
  )
}

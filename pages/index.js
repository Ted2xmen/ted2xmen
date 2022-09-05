import { PageSEO } from '@/components/SEO'
import Info from '@/components/Info'
import LastFM from '@/components/LastFM'

import siteMetadata from '@/data/siteMetadata'
import HeroText from '@/components/Landing/HeroText'
import SocialLinks from '@/components/Landing/SocialLinks'
import AboutText from '@/components/Landing/AboutText'
import SoftSkills from '@/components/Landing/SoftSkills'
import TechList from '@/components/Landing/TechList'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-16 pb-8 md:space-y-5">
        <HeroText />
        <AboutText />
        <SoftSkills />

        <SocialLinks />
        <LastFM />
        <TechList />
      </div>
    </>
  )
}

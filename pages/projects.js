import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
// import Stack from '@/components/Stack'
import { PageSEO } from '@/components/SEO'
import TechList from '@/components/Landing/TechList'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="flex space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="page-title">Projects</h1>
        </div>
        <TechList />

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                stack={d.stack}
                preview={d.preview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

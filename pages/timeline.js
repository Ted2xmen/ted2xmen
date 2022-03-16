import siteMetadata from '@/data/siteMetadata'
import bookmarks from '@/data/bookmarks'
import TimeLineList from '@/components/TimeLineList'
// import Stack from '@/components/Stack'
import { PageSEO } from '@/components/SEO'

export default function Timeline() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Timeline
          </h1>
          <p className="mx-5 mb-5 text-lg leading-7 text-gray-500 dark:text-gray-400">
            bookmarks...
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bookmarks.map((d, i) => (
              <TimeLineList key={i} title={d.title} href={d.href} stack={d.stack} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

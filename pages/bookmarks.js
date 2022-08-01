import siteMetadata from '@/data/siteMetadata'
import BookmarkCard from '@/components/BookmarkCard'
import { PageSEO } from '@/components/SEO'

export default function Timeline() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="pt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bookmarks
          </h1>
        </div>
        <div className="container-xl py-12">
          <div className=" flex justify-center">
            <BookmarkCard />
          </div>
        </div>
      </div>
    </>
  )
}

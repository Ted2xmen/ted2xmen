import { PageSEO } from '@/components/SEO'
import Info from '@/components/Info'
import LastFM from '@/components/LastFM'

import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-16 pb-8 md:space-y-5">
          <div className="">
            {/* <h2 className="flex items-center bg-gradient-to-l from-green-500 to-green-700 bg-clip-text pb-4 text-center text-5xl font-extrabold text-transparent ">
              Tuğrul Erdem Dogru
            </h2> */}
            <div className="grow basis-1/2 -rotate-1 skew-x-6">
              <h1 className="bg-gradient-to-l from-green-400  via-green-700 to-green-900 bg-clip-text p-3  font-sans text-7xl font-black text-transparent">
                Tuğrul Erdem Dogru
              </h1>
            </div>
            <Info />
          </div>
        </div>
      </div>
    </>
  )
}

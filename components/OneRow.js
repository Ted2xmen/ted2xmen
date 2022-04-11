import QuickLinks from './QuickLinks'
import Image from 'next/image'
function OneRow() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <QuickLinks />

            <div href="" className="block overflow-hidden rounded-2xl">
              <div className=" pl-12">
                <p className="text-sm text-gray-700 dark:text-gray-200">lomography.com</p>

                <h5 className="text-sm text-gray-700 dark:text-gray-400">Analog Gallery</h5>

                <p className="mt-1 text-xs text-gray-700 dark:text-gray-400">
                  check out my photo account
                </p>
              </div>
            </div>

            <div href="" className="block overflow-hidden rounded-2xl">
              <div className=" pl-12">
                <p className="text-sm text-gray-700 dark:text-gray-200">behance.com</p>
                <h5 className="text-sm text-gray-700 dark:text-gray-400">Behance</h5>

                <p className="mt-1 text-xs text-gray-700 dark:text-gray-400">
                  check out my behance account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OneRow

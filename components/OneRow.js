import QuickLinks from './QuickLinks'

function OneRow() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <QuickLinks />

            <div href="" className="block overflow-hidden rounded-2xl">
              <img
                className="h-56 w-full object-cover"
                src="https://assets.community.lomography.com/75/075b2348818cf352d917d7e2438a524627a194/386x256x2.jpg?auth=adcd759019c8497da4018a84edf53d794f88dc31"
                alt=""
              />

              <div className=" pl-12">
                <p className="text-sm text-gray-700 dark:text-gray-200">lomography.com</p>

                <h5 className="text-sm text-gray-700 dark:text-gray-400">Analog Gallery</h5>

                <p className="mt-1 text-xs text-gray-700 dark:text-gray-400">
                  check out my photo account
                </p>
              </div>
            </div>

            <div href="" className="block overflow-hidden rounded-2xl">
              <img
                className="h-56 w-full object-contain pr-6"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d4610f127700683.61478033a8ad8.png"
                alt=""
              />

              <div className=" pl-12">
                <p className="text-sm text-gray-700 dark:text-gray-200">behance.com</p>

                <h5 className="text-sm text-gray-700 dark:text-gray-400">
                  Rurouni Kenshin Movie Card
                </h5>

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

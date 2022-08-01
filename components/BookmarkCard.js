import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

const categories = [
  {
    name: 'public',
    value: '25912218',
  },
  {
    name: 'js101',
    value: '25919955',
  },
]

export default function BookmarkCard() {
  const [data, setData] = useState([])
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${categories[1].value}`
  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
      },
    }

    axios
      .get(raindropUrl, options)
      .then(function (response) {
        // handle success
        setData(response.data.items)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])

  return (
    <div className="p-2" style={{ maxWidth: '744px' }}>
      <div>
        <ul className="space-y-4">
          <h2 className="text-2xl font-bold">JavaScript 101</h2>
          {data.map((d) => (
            <li key={d._id} className="block h-24">
              <a
                href={d.link}
                className="block h-full rounded-lg p-4 hover:border-2 hover:border-green-600"
              >
                <div className="flex items-center justify-start space-x-2">
                  <img
                    src={d.media[0].link}
                    className=" h-20 w-20 rounded-xl object-contain p-1"
                    alt={d.title}
                  />
                  <h5 className="mb-2 font-medium text-gray-700 dark:text-white">{d.title}</h5>{' '}
                  {/* <span className="ml-2 text-xs">
                    {moment(d.lastUpdate).calendar()}{' '}
                  </span> */}
                </div>
                {d.tags.map((s, i) => (
                  <strong
                    key={i}
                    className="mx-1 px-3 py-1.5 text-[12px] font-medium text-green-800"
                  >
                    {s}
                  </strong>
                ))}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

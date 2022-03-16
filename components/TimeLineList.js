import Image from './Image'
import Link from './Link'

const Card = ({ title, description, href, stack }) => (
  <div className="md p-2 md:w-1/2" style={{ maxWidth: '644px' }}>
    <div className="">
      <ul className=" space-y-2">
        <li className="block h-24">
          <a
            href={href}
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600"
          >
            <h5 className="mb-2 font-medium text-gray-700 dark:text-white">{title}</h5>
            {stack.map((s, i) => (
              <strong key={i} className="mx-1 px-3 py-1.5 text-[12px] font-medium text-green-800">
                {s}
              </strong>
            ))}
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Card

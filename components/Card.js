import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, stack, preview }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '644px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-contain object-top md:h-32 lg:h-44"
              width={580}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-contain object-top md:h-36 lg:h-48"
            width={580}
            height={306}
          />
        ))}
      <div className="p-2">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={null} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        {stack.map((s, i) => (
          <strong key={i} className="badge">
            {s}
          </strong>
        ))}

        <p className="prose mb-3 max-w-none py-4 text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-green-800 hover:text-green-700 dark:hover:text-green-600"
            aria-label={`Link to ${href}`}
          >
            Repository
          </Link>
        )}
        {preview && (
          <Link
            href={preview}
            className="ml-4 text-base font-medium leading-6 text-green-800 hover:text-green-600 dark:hover:text-green-400"
            aria-label={`Link to ${preview}`}
          >
            Preview
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card

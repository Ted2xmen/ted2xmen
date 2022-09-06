import Image from '../Image'
import Link from '../Link'

const Card = ({ title, description, imgSrc, href, stack, preview, id }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '644px' }}>
    <div className={`${imgSrc && 'h-full'}  project-card-body`}>
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={`/githubimages/${id}.png`}
          className="object-contain object-top md:h-32 lg:h-44"
          width={580}
          height={306}
        />
      </Link>

      <div className="p-2">
        <h2 className="project-title">
          {href ? (
            <Link href={null} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        {stack.map((st, i) => {
          return (
            <span className="badge" key={i}>
              {st}
            </span>
          )
        })}

        <p className="project-desc">{description}</p>
        {href && (
          <Link href={href} className="project-link " aria-label={`Link to ${href}`}>
            Repository
          </Link>
        )}
        {preview && (
          <Link href={preview} className="project-link ml-3" aria-label={`Link to ${preview}`}>
            Preview
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
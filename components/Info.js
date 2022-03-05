import { techStack } from '@/data/siteMetadata'
import Image from 'next/image'

function Info() {
  return (
    <div className="py-10">
      <h2 className="bg-gradient-to-l  from-green-500 to-green-800   bg-clip-text py-2 text-5xl font-extrabold text-transparent sm:text-4xl">
        {/* <span className="sm:block italic ">Self taught.</span> */}
      </h2>

      <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
        <span
          data-content="Tugrul"
          className="before:animate-gradient-background-1 relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-br bg-clip-text px-2 text-transparent">
            Tuğrul
          </span>
        </span>
        <span
          data-content="Erdem"
          className="before:animate-gradient-background-2 relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-br bg-clip-text px-2 text-transparent">
            Erdem.
          </span>
        </span>
        <span
          data-content="Dogru"
          className="before:animate-gradient-background-3 relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-br bg-clip-text px-2 text-transparent">
            Dogru.
          </span>
        </span>
      </h1>

      {/* <div className=''>
        {techStack.map((stack,i) => (
          <span className='border rounded-lg dark:text-green-500 text-black border-current uppercase mx-1 px-5 py-1.5  text-[10px] tracking-wide'> {stack} </span>
        ))}
        </div> */}
      <div className="flex gap-5">
        {techStack.map((stack, i) => (
          <Image
            key={i}
            className="rounded-xl"
            width={45}
            height={45}
            src={`/static/images/${stack}`}
            alt="icons"
          />
        ))}
      </div>
    </div>
  )
}

export default Info

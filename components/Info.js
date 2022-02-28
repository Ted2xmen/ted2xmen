import { techStack } from '@/data/siteMetadata'
import Image from 'next/image'

function Info() {
  return (
    <div className="py-10">
      <h2 className="bg-gradient-to-l  from-green-500 to-green-800   bg-clip-text py-2 text-5xl font-extrabold text-transparent sm:text-4xl">
        {/* <span className="sm:block italic ">Self taught.</span> */}
      </h2>

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

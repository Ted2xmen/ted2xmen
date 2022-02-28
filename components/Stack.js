import { techStack } from '@/data/siteMetadata'
import Image from 'next/image'

function Stack() {
  return (
    <div className="flex gap-7">
      {techStack.map((t, i) => (
        <Image
          key={i}
          className="rounded-xl"
          width={50}
          height={45}
          src={`/static/images/${t}`}
          alt=""
        />
      ))}
    </div>
  )
}

export default Stack

import { techStack } from '@/data/siteMetadata'

function Stack() {
  return (
    <div>
      {techStack.map((t, i) => (
        <strong
          key={i}
          className="mx-1 rounded border border-current px-3 text-[12px] font-medium lowercase text-blue-500"
        >
          {t}
        </strong>
      ))}
    </div>
  )
}

export default Stack

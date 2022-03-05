import Link from 'next/link'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${text}`}>
      <a className=" my-1 mx-1.5 rounded-lg border border-current px-5 py-1.5 text-[10px]  uppercase tracking-wide text-green-700">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const BookmarkCard = ({ data, repo }) => {
  return (
    <div className="flex space-y-4">
      <div className="flex flex-col gap-4 mt-4 border border-slate-800 justify-between p-4 flex-wrap rounded-md w-full">
        <div className='flex space-y-2 justify-between'>
          <Link target='_blank' href={data?.link || repo?.html_url}> <h2 className='text-md xl:text-lg text-slate-100 hover:text-slate-400'> {data?.title || "★ " + repo?.name} </h2>
            <p className='text-sm mt-1'> {repo?.description?.slice(0, 120)}..</p>
          </Link>
          <span className='text-xs hidden sm:block'>
            {moment(data?.lastUpdate || repo?.updated_at).format('MM/YYYY')}
          </span>
        </div>
        <div className='gap-4 flex items-center'>
          <span className={`text-sm underline ${data ? "decoration-emerald-400" : "decoration-blue-600"}`}>   {data?.domain || repo?.language} </span>

          {data && data?.tags.map((tag: string, i: number) => {
            return (
              <span key={i} className='text-xs p-1 rounded-sm '> {tag} </span>
            );
          })}
          {repo && <span className='text-xs p-1 rounded-sm '> {null} </span>}
          <span className='text-xs sm:hidden'>
            {true && moment(data?.lastUpdate || repo?.updated_at).format('MM/YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BookmarkCard
import Link from 'next/link'
import React from 'react'

const AppsPage = () => {
  return (
    <section className="mx-auto max-w-3xl p-6 space-y-6">
      <Link href="/">Home</Link>
      <h1>Apps</h1>
      <p>Here are some of the apps I have built.</p>
      <div className='flex gap-2 justify-around items-center w-full'>
        <Link href="/apps/era-portrait" className='text-blue-500 hover:underline'>Era Portrait</Link>
        <Link href="/apps/subway-sudoku" className='text-blue-500 hover:underline'>Subway Sudoku</Link>
      </div>
    </section>
  )
}

export default AppsPage
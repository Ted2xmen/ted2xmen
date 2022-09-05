import React from 'react'

const AboutText = () => {
  return (
    <div>
      <p className="block py-2 text-gray-800 dark:text-gray-400">
        <span className="text-xl font-bold dark:text-zinc-400">Frontend Developer.</span> Mostly{' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore minus quae cum placeat eum
        et amet sunt quidem aliquid voluptate.{' '}
        <span className="text-lg font-bold dark:text-zinc-400">Mostly</span>{' '}
        <span className="font-bold italic text-orange-500">React, </span>
        <span className="font-bold italic text-green-500">Vue</span> and{' '}
        <span className="font-bold italic text-purple-500">TailwindCSS.</span> Voluptatibus saepe
        accusamus architecto, tempora sapiente doloremque aliquam adipisci dolor pariatur quod nihil
        magni, eos ducimus.
      </p>
    </div>
  )
}

export default AboutText

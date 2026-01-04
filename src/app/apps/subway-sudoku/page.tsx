'use client'
import React from 'react'
import AppStoreAppLayout from '@/components/AppStoreAppLayout'

import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'


const SubwaySudokuPage = () => {
  return (
    <AppStoreAppLayout
      title="Subway Sudoku"
      keywords={['sudoku', 'puzzle', 'game', 'offline', "brain"]}
      images={[image1.src, image2.src, image3.src]}
      privacyPolicyUrl="/apps/subway-sudoku/privacy-policy"
      termsOfServiceUrl="/apps/subway-sudoku/terms"
      supportUrl="mailto:ted2xmen@gmail.com"
    >
      <p>
        Immerse yourself in the ultimate puzzle experience with <strong>Subway Sudoku</strong>.
      </p>
      <p>
        Classic Sudoku meets a sleek, modern neon aesthetic inspired by the vibrant energy of subway maps. Whether you are a beginner or a master, challenge your mind anywhere, anytime—completely offline.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Classic Gameplay, Modern Look</strong>
          <div>Enjoy the timeless logic puzzle wrapped in a beautiful, dark-mode friendly neon design.</div>
        </li>
        <li>
          <strong>Play Offline</strong>
          <div>No internet? No problem. Subway Sudoku works perfectly without a connection, making it the perfect travel companion for your daily commute.</div>
        </li>
        <li>
          <strong>Three Difficulty Levels</strong>
          <ul>
            <li><strong>Easy:</strong> Perfect for beginners and quick brain warm-ups.</li>
            <li><strong>Medium:</strong> A balanced challenge for regular players.</li>
            <li><strong>Hard:</strong> Test your skills with complex grids that require deep concentration.</li>
          </ul>
        </li>
        <li>
          <strong>Helpful Tools</strong>
          <ul>
            <li><strong>Note Taking:</strong> Pencil in potential numbers to keep track of your thoughts.</li>
            <li><strong>Mistake Limit:</strong> Play carefully! You have 3 lives—make too many mistakes and it&apos;s game over.</li>
            <li><strong>Timer:</strong> Track how fast you can solve each puzzle.</li>
          </ul>
        </li>
        <li>
          <strong>Privacy Focused</strong>
          <div>We respect your privacy. No data collection, no tracking, just pure Sudoku.</div>
        </li>
      </ul>
      <p>
        <strong>
          Ready to train your brain?
          <br />
          Download Subway Sudoku today and start solving!
        </strong>
      </p>
    </AppStoreAppLayout>
  )
}

export default SubwaySudokuPage
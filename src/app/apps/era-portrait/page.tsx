'use client'
import React from 'react'
import AppStoreAppLayout from '@/components/AppStoreAppLayout'

import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'


const EraPortraitAppPage = () => {
  return (
    <AppStoreAppLayout
      title="Era Portrait: AI Avatar"
      keywords={['ai', 'avatar', 'photo', 'portrait', "history"]}
      images={[image1.src, image2.src, image3.src]}
      privacyPolicyUrl="/apps/era-portrait/privacy-policy"
      termsOfServiceUrl="/apps/era-portrait/terms"
      supportUrl="/apps/era-portrait/support"
    >
      <p>
        Ever wondered how you would look as a 19th-century aristocrat, a fearless Viking warrior, or a Renaissance muse?
      </p>
      <p>
        Era Portrait transforms your everyday photos into stunning, museum-quality artworks. Powered by advanced AI, the app reimagines your identity across history — from ancient empires to modern classics.
      </p>
      <p>
        Discover a side of yourself you’ve never seen before.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Diverse Artistic Styles</strong>
          <ul>
            <li>Photorealistic vintage imagery that feels pulled from another lifetime.</li>
            <li>Oil Painting portraits inspired by Renaissance and Baroque masters.</li>
            <li>Charcoal &amp; Sketch hand-drawn looks for a minimalist, elegant touch.</li>
          </ul>
        </li>
        <li>
          <strong>Timeless Transformations</strong>
          <div>Upload one photo and instantly travel across eras.</div>
          <div>Become a Victorian noble, a medieval warrior, a film-noir hero, a pharaoh, a samurai, and more.</div>
        </li>
        <li>
          <strong>Professional, High-Resolution Results</strong>
          <div>Perfect for profile photos, prints, gifts, or sharing on social media.</div>
          <div>Every image is crafted with cinematic detail and artistic precision.</div>
        </li>
        <li>
          <strong>Explore Iconic Themes</strong>
          <ul>
            <li>Royal Portraits &amp; Victorian Elegance</li>
            <li>1920s Vintage &amp; Film Noir</li>
            <li>Medieval Knights &amp; Fantasy Warriors</li>
            <li>Classical Oil Paintings</li>
            <li>Pencil &amp; Charcoal Sketches</li>
            <li>…and new themes added regularly.</li>
          </ul>
        </li>
        <li>
          <strong>Simple &amp; Fast</strong>
          <div>No design skills required.</div>
          <div>Pick a style → Upload a photo → Get your AI-generated art in seconds.</div>
        </li>
        <li>
          <strong>Privacy First</strong>
          <div>Your photos are used only to generate your portraits and are never stored permanently or shared with third parties.</div>
        </li>
      </ul>
      <p>
        <strong>
          Begin your journey through art history. Your masterpiece awaits.
          <br />
          Download Era Portrait today.
        </strong>
      </p>
    </AppStoreAppLayout>
  )
}

export default EraPortraitAppPage
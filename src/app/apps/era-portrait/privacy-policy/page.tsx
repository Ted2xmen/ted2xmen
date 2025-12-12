import React from 'react'
import Link from 'next/link'

const EraPortraitAppPrivacyPolicyPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="text-sm text-gray-500">Back to <Link href="/apps/era-portrait" className="text-blue-500 hover:underline">Era Portrait: AI Avatar</Link></div>
    <h1 className="text-3xl font-semibold">Privacy Policy</h1>
    <p><strong>Last Updated:</strong> December 8, 2025</p>

    <p>
      Tuğrul Erdem Dogru ("Developer", "we", "our", or "us") respects the privacy of our users
      ("user", "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your
      information when you use our mobile application, Era Portrait: AI Avatar (the "Application").
    </p>
    <p>
      Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
      please do not access the application.
    </p>

    <h2 className="text-2xl font-semibold">1. Collection of Your Information</h2>
    <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
    <p>
      <strong>Personal Data:</strong> Personally identifiable information, such as your name and email address,
      that you voluntarily give to us when you register with the Application (if applicable).
    </p>
    <p>
      <strong>Face Data (Images):</strong> The Application collects the facial photos you upload solely for the
      purpose of generating AI avatars.
    </p>
    <p>
      <strong>Derivative Data:</strong> Information our servers automatically collect when you access the
      Application, such as your native actions that are integral to the Application, including liking or
      re-generating avatars, and other interactions with the Application.
    </p>
    <p>
      <strong>Financial Data:</strong> We do not store any financial information. All subscriptions and in-app
      purchases are processed via Apple App Store or Google Play Store payment systems. We only receive transaction
      receipts to validate your purchase via RevenueCat.
    </p>
    <p>
      <strong>Device Data:</strong> We may collect information about your mobile device, such as your mobile
      device ID, model, and manufacturer, and information about the location of your device.
    </p>

    <h2 className="text-2xl font-semibold">2. Use of Your Information</h2>
    <p>
      Having accurate information about you permits us to provide you with a smooth, efficient, and customized
      experience. We use the information collected via the Application to:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Generate personalized AI avatars based on your uploaded photos.</li>
      <li>Create and manage your account.</li>
      <li>Process payments and manage your credits/subscriptions via RevenueCat.</li>
      <li>Email you regarding your account or order.</li>
      <li>Increase the efficiency and operation of the Application.</li>
      <li>Monitor and analyze usage and trends to improve your experience.</li>
    </ul>

    <h2 className="text-2xl font-semibold">3. Face Data Policy (Important)</h2>
    <p>We take the privacy of your facial data very seriously.</p>
    <p>
      <strong>Usage:</strong> Your photos are used exclusively to train the AI model temporarily or to generate
      the requested artwork.
    </p>
    <p>
      <strong>Storage &amp; Retention:</strong> The original photos you upload are stored on our secure servers
      only for the duration necessary to complete the AI generation process. They are automatically deleted from
      our servers after [e.g., 24 hours] or immediately upon the completion of the generation.
    </p>
    <p>
      <strong>Sharing:</strong> We do not share, sell, or trade your facial data or photos with any third parties
      for marketing or advertising purposes. Data is only shared with our AI processing infrastructure providers
      solely for the purpose of image generation.
    </p>

    <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
    <p>
      We may share information we have collected about you in certain situations. The Application uses third-party
      services that may collect information used to identify you:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>RevenueCat:</strong> Used for managing in-app purchases and subscriptions.</li>
      <li><strong>Supabase:</strong> Used for authentication and database management.</li>
      <li><strong>[Name of AI API Provider, e.g., Replicate / Stability AI]:</strong> Used for image processing and AI generation.</li>
    </ul>
    <p>Please review the privacy policies of these third-party service providers.</p>

    <h2 className="text-2xl font-semibold">5. Security of Your Information</h2>
    <p>
      We use administrative, technical, and physical security measures to help protect your personal information.
      While we have taken reasonable steps to secure the personal information you provide to us, please be aware
      that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
      can be guaranteed against any interception or other type of misuse.
    </p>

    <h2 className="text-2xl font-semibold">6. Policy for Children</h2>
    <p>
      We do not knowingly solicit information from or market to children under the age of 13. If you become aware
      of any data we have collected from children under age 13, please contact us using the contact information
      provided below.
    </p>

    <h2 className="text-2xl font-semibold">7. Your Rights (Account Deletion)</h2>
    <p>
      You have the right to request access to and deletion of your personal data. You can delete your account and all
      associated data directly within the Application&apos;s &quot;Settings&quot; menu or by contacting us. Upon
      request, we will permanently remove your account and data from our active databases.
    </p>

    <h2 className="text-2xl font-semibold">8. Contact Us</h2>
    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
    <p>
      <strong>Developer:</strong> Tuğrul Erdem Dogru<br />
      <strong>Email:</strong> ted2xmen@gmail.com
    </p>
  </div>
  )
}

export default EraPortraitAppPrivacyPolicyPage
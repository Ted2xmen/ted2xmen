import React from 'react'
import Link from 'next/link'

const SubwaySudokuPrivacyPolicyPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="text-sm text-gray-500">Back to <Link href="/apps/subway-sudoku" className="text-blue-500 hover:underline">Subway Sudoku</Link></div>
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p><strong>Last Updated:</strong> January 4, 2026</p>

      <p>
        Tuğrul Erdem Dogru (&quot;Developer&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects the privacy of our users
        (&quot;user&quot;, &quot;you&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our mobile application, Subway Sudoku (the &quot;Application&quot;).
      </p>
      <p>
        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
        please do not access the application.
      </p>

      <h2 className="text-2xl font-semibold">1. Collection of Your Information</h2>
      <p>
        We do not collect, store, or share any personal information. Subway Sudoku is a completely offline game.
        All game data, including your progress, scores, and settings, is stored locally on your device and is not transmitted to us or any third parties.
      </p>

      <h2 className="text-2xl font-semibold">2. Third-Party Services</h2>
      <p>
        The Application does not contain any third-party SDKs, analytics tools, or advertising networks. We do not use any external services that could track your activity or collect your data.
      </p>

      <h2 className="text-2xl font-semibold">3. Security</h2>
      <p>
        Because we do not collect any personal data, there is no risk of your information being intercepted or misused while using our Application. Your data resides solely on your device.
      </p>

      <h2 className="text-2xl font-semibold">4. Policy for Children</h2>
      <p>
        We do not knowingly collect information from or market to children under the age of 13. Since the Application does not collect any data, it is safe for users of all ages.
      </p>

      <h2 className="text-2xl font-semibold">5. Contact Us</h2>
      <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>Developer:</strong> Tuğrul Erdem Dogru<br />
        <strong>Email:</strong> ted2xmen@gmail.com
      </p>
    </div>
  )
}

export default SubwaySudokuPrivacyPolicyPage
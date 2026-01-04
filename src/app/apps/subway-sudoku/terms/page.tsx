import React from 'react'
import Link from 'next/link'

const SubwaySudokuTermsPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="text-sm text-gray-500">Back to <Link href="/apps/subway-sudoku" className="text-blue-500 hover:underline">Subway Sudoku</Link></div>
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p><strong>Last Updated:</strong> January 4, 2026</p>

      <h2 className="text-2xl font-semibold">1. Introduction</h2>
      <p>
        Welcome to Subway Sudoku. By downloading or using our mobile application, you agree to these Terms.
        As the App is a standalone, offline game, you do not need to create an account to use it.
      </p>

      <h2 className="text-2xl font-semibold">2. Usage Rights</h2>
      <p>
        We grant you a personal, non-transferable, non-exclusive license to use the Application on your devices
        solely for your personal, non-commercial use.
      </p>

      <h2 className="text-2xl font-semibold">3. Subscriptions and Purchases</h2>
      <p>The App offers the following premium access options:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Yearly Subscription:</strong> An auto-renewing subscription that grants premium access for one year. Payment is charged to your Apple ID upon purchase. Use your device settings to cancel at least 24 hours before the period ends to avoid renewal.</li>
        <li><strong>Lifetime Access:</strong> A one-time purchase granting permanent premium access. This is not a subscription and does not renew.</li>
      </ul>
      <p className="mt-2">
        All payments and transactions are handled directly by the Apple App Store. We do not process or store your financial information.
      </p>

      <h2 className="text-2xl font-semibold">4. User Conduct</h2>
      <p>
        Since the App is offline, you are responsible for your own device security. You agree not to attempt to reverse engineer,
        modify, or hack the Application.
      </p>

      <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
      <p>
        The Application, including its code, graphics, and design, is the property of Tuğrul Erdem Dogru and is protected by copyright and intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
      <p>
        The App is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from your use of the App,
        including data loss on your local device.
      </p>

      <h2 className="text-2xl font-semibold">7. Contact Us</h2>
      <p>
        <strong>Developer:</strong> Tuğrul Erdem Dogru<br />
        <strong>Email:</strong> ted2xmen@gmail.com
      </p>
    </div>
  )
}

export default SubwaySudokuTermsPage
import React from 'react'

const TermsPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p><strong>Last Updated:</strong> December 12, 2025</p>

      <h2 className="text-2xl font-semibold">1. Introduction</h2>
      <p>
        Welcome to Era Portrait (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By downloading or using our mobile application (&quot;App&quot;),
        you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
      </p>

      <h2 className="text-2xl font-semibold">2. Description of Service</h2>
      <p>
        Era Portrait is an AI-powered image generation tool that transforms user-uploaded photos into artistic portraits.
      </p>

      <h2 className="text-2xl font-semibold">3. AI Disclaimer</h2>
      <p>The App uses artificial intelligence algorithms to generate images. By using the App, you acknowledge that:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>AI generation is unpredictable and may produce artifacts, distortions, or unexpected results.</li>
        <li>We do not guarantee that the results will be 100% accurate or free of errors.</li>
        <li>The Service is provided &quot;as is&quot; without warranties of any kind regarding the quality of the generated images.</li>
      </ul>

      <h2 className="text-2xl font-semibold">4. Subscriptions and Billing</h2>
      <p>The App offers auto-renewing subscription options to access premium features.</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Payment:</strong> Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
        <li><strong>Auto-Renewal:</strong> Subscription automatically renews unless it is canceled at least 24 hours before the end of the current period.</li>
        <li><strong>Account Charge:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
        <li><strong>Management:</strong> You can manage and cancel your subscriptions by going to your App Store Account Settings after purchase.</li>
        <li><strong>No Refunds:</strong> Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription. We do not offer refunds for unused subscription periods.</li>
      </ul>

      <h2 className="text-2xl font-semibold">5. User Conduct and Content</h2>
      <p>You are solely responsible for the photos you upload and the content you generate. By using the App, you agree NOT to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Upload images of others without their consent.</li>
        <li>Upload or generate content that is illegal, hateful, sexually explicit (NSFW), or promotes violence.</li>
        <li>Use the App to harass, bully, or harm individuals.</li>
      </ul>
      <p>We reserve the right to ban users who violate these policies.</p>

      <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Your Content:</strong> You retain ownership of the original photos you upload.</li>
        <li><strong>Generated Content:</strong> Subject to these Terms, you own the images you generate using the App.</li>
        <li><strong>License to Us:</strong> By using the App, you grant us a limited, non-exclusive license to process your images solely for the purpose of providing the Service (generating your portraits). We do not sell your photos to third parties.</li>
      </ul>

      <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, we shall not be liable for any indirect,
        incidental, or consequential damages arising out of your use of the App.
      </p>

      <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Your continued use of the App after any changes indicates
        your acceptance of the new Terms.
      </p>
    </div>
  )
}

export default TermsPage
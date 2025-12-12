import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type AppStoreAppLayoutProps = {
    title: string
    keywords?: string[] | string
    images?: string[] // Expect up to 3 image URLs (public paths or remote)
    children?: React.ReactNode // Detailed description/content
    privacyPolicyUrl?: string
    termsOfServiceUrl?: string
    supportUrl?: string
}

const AppStoreAppLayout: React.FC<AppStoreAppLayoutProps> = ({
    title,
    keywords,
    images = [],
    children,
    privacyPolicyUrl,   
    termsOfServiceUrl,
    supportUrl
}) => {
    const normalizedKeywords = useMemo(() => {
        if (!keywords) return []
        if (Array.isArray(keywords)) return keywords
        return keywords
            .split(',')
            .map(k => k.trim())
            .filter(Boolean)
    }, [keywords])

    const firstThreeImages = (images ?? []).slice(0, 3)

    return (
        <div className="mx-auto max-w-4xl p-6 space-y-12">
            <header className="space-y-2">
                <h1 className="text-4xl font-semibold">{title}</h1>
                {normalizedKeywords.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {normalizedKeywords.map((k, i) => (
                            <span key={`${k}-${i}`} className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                {k}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {children && (
                <section className="prose max-w-none">
                    {children}
                </section>
            )}



            {firstThreeImages.length > 0 && (
                <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {firstThreeImages.map((src, idx) => (
                        <div key={idx} className="rounded-md">
                                <Image src={src} alt={`screenshot-${idx + 1}`} className="h-full shadow w-full rounded-xl object-contain" />
                        </div>
                    ))}
                </section>
            )}


            <div className="flex gap-2 justify-around items-center w-full">
                {privacyPolicyUrl && (
                    <Link href={privacyPolicyUrl} className="text-blue-500 hover:underline">Privacy Policy</Link>
                )}
                {termsOfServiceUrl && (
                    <Link href={termsOfServiceUrl} className="text-blue-500 hover:underline">Terms of Service</Link>
                )}
                {supportUrl && (
                    <Link href={supportUrl} className="text-blue-500 hover:underline">Support</Link>
                )}
            </div>
        </div>
    )
}

export default AppStoreAppLayout


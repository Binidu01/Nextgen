import React from 'react'

import './globals.css'

// metadata is read by bini-router at build time and injected into index.html.
// It is automatically stripped from the browser bundle — never ships to the client.
export const metadata = {
  title: 'Nextgen Solutions',
  description:
    'A digital agency specializing in social media advertising, modern web development, and academic support services.',
  keywords: [
    'Nextgen',
    'NextGen Ads',
    'NextGen Digital',
    'NextGen Edu',
    'Digital Agency',
    'Web Development',
    'Social Media Advertising',
    'Academic Support',
    'Portfolio',
    'Marketing',
    'Education',
  ],
  themeColor: '#00CFFF',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Nextgen Solutions',
    description:
      'A digital agency specializing in social media advertising, modern web development, and academic support services.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextgen Solutions',
    creator: '@binidu01',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

// Root layout — wraps every page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>
}

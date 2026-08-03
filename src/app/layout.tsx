import React from 'react';
import './globals.css';

export const metadata = {
  title      : 'Nexgen Group',
  description: 'Nextgen Group of company',
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
  themeColor : '#00CFFF',
  manifest   : '/site.webmanifest',
  openGraph: {
    title      : 'Nexgen Group',
    description: 'Nextgen Group of company',
    images     : [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card   : 'summary_large_image',
    title  : 'Nexgen Group',
    creator: '@nexgen',
    images : ['/og-image.png'],
  },
  icons: {
    icon : [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}

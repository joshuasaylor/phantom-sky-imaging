import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './styles.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Phantom Sky Imaging | Drone Photography & Videography — Southeast Pennsylvania',
  description:
    'FAA Part 107 certified drone photography and videography for real estate listings and roofing inspections. Serving Chester, Delaware, Montgomery, and Bucks counties in Southeast Pennsylvania — 48-hour delivery.',
  alternates: {
    canonical: 'https://phantomskyimaging.com',
  },
  openGraph: {
    title: 'Phantom Sky Imaging | Drone Photography & Videography',
    description:
      'FAA Part 107 certified aerial photography and videography for real estate and roofing inspections in Southeast Pennsylvania. 48-hour delivery.',
    url: 'https://phantomskyimaging.com',
    siteName: 'Phantom Sky Imaging',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Sky Imaging | Drone Photography & Videography',
    description:
      'FAA Part 107 certified aerial photography and videography for real estate and roofing inspections in Southeast Pennsylvania.',
  },
}

const schemaProfessionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Phantom Sky Imaging',
  url: 'https://phantomskyimaging.com',
  telephone: '+14846840579',
  email: 'joshuasaylor@phantomskyimaging.com',
  description:
    'FAA Part 107 certified drone photography and videography serving Southeast Pennsylvania. Specializing in real estate aerial photography, real estate video tours, and roofing inspection video with 48-hour delivery.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Chester County, Pennsylvania' },
    { '@type': 'AdministrativeArea', name: 'Delaware County, Pennsylvania' },
    { '@type': 'AdministrativeArea', name: 'Montgomery County, Pennsylvania' },
    { '@type': 'AdministrativeArea', name: 'Bucks County, Pennsylvania' },
    { '@type': 'AdministrativeArea', name: 'Philadelphia, Pennsylvania' },
  ],
  serviceType: [
    'Drone Photography',
    'Aerial Videography',
    'Real Estate Photography',
    'Real Estate Video',
    'Roofing Inspection Video',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'FAA Part 107 Remote Pilot Certificate',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Aerial Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Drone Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Drone Video' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roofing Inspection Video' } },
    ],
  },
  knowsAbout: ['Drone Photography', 'Aerial Videography', 'Real Estate Marketing', 'Roofing Inspection', 'FAA Part 107 Regulations'],
  sameAs: [
    'https://share.google/GD8DWbMasJz5cZtdU',
  ],
  slogan: 'Aerial Imagery Elevated.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14846840579',
    email: 'joshuasaylor@phantomskyimaging.com',
    contactType: 'customer service',
    areaServed: 'US-PA',
    availableLanguage: 'English',
  },
}

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Phantom Sky Imaging',
  url: 'https://phantomskyimaging.com',
  description: 'Professional drone photography and videography for real estate and roofing inspection in Southeast Pennsylvania.',
  publisher: {
    '@type': 'ProfessionalService',
    name: 'Phantom Sky Imaging',
    url: 'https://phantomskyimaging.com',
  },
}

const schemaServices = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Drone Photography',
    name: 'Real Estate Photography',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'High-resolution aerial still photography for real estate listings. Captures the full property footprint, lot size, neighborhood context, and surroundings. Delivered as MLS-ready edited images in RAW and JPEG formats within 48 hours.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Aerial Videography',
    name: 'Real Estate Video',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'Cinematic 4K aerial video tours for real estate listings. Smooth, stabilized footage professionally color-graded and set to licensed music. Delivered within 48 hours with social media cuts included.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Drone Roofing Inspection Video',
    name: 'Roofing Inspection Video',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'Detailed aerial video documentation for roofing contractors, insurance adjusters, and property managers. Full perimeter coverage, timestamped footage, and insurance claim-ready deliverables across Southeast Pennsylvania.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
    audience: { '@type': 'Audience', audienceType: 'Roofing Contractors, Insurance Adjusters, Property Managers' },
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfessionalService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        {schemaServices.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}

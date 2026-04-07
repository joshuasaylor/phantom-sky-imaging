import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
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
  metadataBase: new URL('https://phantomskyimaging.com'),
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
    images: [
      {
        url: '/steepleFrontRight.jpg',
        width: 1920,
        height: 1080,
        alt: 'Aerial drone shot of church steeple roofline — Phantom Sky Imaging, Southeast Pennsylvania',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Sky Imaging | Drone Photography & Videography',
    description:
      'FAA Part 107 certified aerial photography and videography for real estate and roofing inspections in Southeast Pennsylvania.',
    images: ['/steepleFrontRight.jpg'],
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
    'Commercial Inspection',
    'Events Aerial Coverage',
    'Storm Damage Assessment',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Property Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Events Aerial Coverage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storm Damage Assessment' } },
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
      'High-resolution aerial still photography for real estate listings. Captures the full property footprint, lot size, neighborhood context, and surroundings. Delivered as MLS-ready edited JPEG images within 48 hours.',
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
      'Cinematic HD aerial video tours for real estate listings. Smooth, stabilized footage professionally color-graded and set to licensed music. Delivered within 48 hours with social media cuts included.',
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
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Aerial Inspection',
    name: 'Commercial Inspection',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'Comprehensive aerial inspection for commercial properties, warehouses, and large-scale facilities. Documents structural conditions, HVAC units, signage, and parking lots safely from above. Timestamped HD footage and insurance-ready reports.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
    audience: { '@type': 'Audience', audienceType: 'Commercial Property Owners, Facility Managers, Insurance Adjusters' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Events Aerial Videography',
    name: 'Events Coverage',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'Cinematic aerial footage for outdoor festivals, community gatherings, sporting events, and corporate functions across Southeast Pennsylvania. Captures full scale and energy from above with highlight reel delivery.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Storm Damage Aerial Assessment',
    name: 'Storm Damage Assessment',
    url: 'https://phantomskyimaging.com/#services',
    description:
      'Rapid aerial documentation after severe weather events. Safe, same-day or next-day documentation of wind and fallen tree damage for homeowners, contractors, and insurance adjusters. Timestamped HD footage and insurance claim-ready deliverables.',
    provider: { '@type': 'ProfessionalService', name: 'Phantom Sky Imaging', url: 'https://phantomskyimaging.com' },
    areaServed: { '@type': 'State', name: 'Southeast Pennsylvania' },
    audience: { '@type': 'Audience', audienceType: 'Homeowners, Contractors, Insurance Adjusters' },
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
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TJXC0JLYK1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TJXC0JLYK1');
          `}
        </Script>
      </body>
    </html>
  )
}

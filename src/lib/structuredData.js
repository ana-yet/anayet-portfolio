/**
 * Structured Data (JSON-LD) Schemas for SEO
 */

const baseUrl = 'https://ana-yet.vercel.app';

export function generatePersonSchema(personalInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location.split(',')[0] || personalInfo.location,
      addressRegion: personalInfo.location.split(',')[1]?.trim() || '',
      addressCountry: 'Bangladesh',
    },
    url: baseUrl,
    sameAs: [
      personalInfo.social.github,
      personalInfo.social.linkedin,
      personalInfo.social.twitter,
    ],
    knowsAbout: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'Full Stack Development',
      'Web Development',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MD ANAYET MIAH Portfolio',
    url: baseUrl,
    description: 'Portfolio website of MD ANAYET MIAH - MERN Stack Developer specializing in MongoDB, Express, React, and Node.js',
    author: {
      '@type': 'Person',
      name: 'MD ANAYET MIAH',
    },
  };
}

export function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${baseUrl}/#about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: `${baseUrl}/#projects`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: `${baseUrl}/#skills`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: `${baseUrl}/#contact`,
      },
    ],
  };
}

export function generateProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    image: project.image,
    url: project.liveUrl,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: project.features || [],
    keywords: project.tags?.join(', ') || '',
    author: {
      '@type': 'Person',
      name: 'MD ANAYET MIAH',
    },
    datePublished: project.datePublished || new Date().toISOString(),
  };
}

export function generateProfessionalServiceSchema(personalInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} - ${personalInfo.title}`,
    description: 'Full-stack web development services specializing in MERN stack technologies',
    url: baseUrl,
    provider: {
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: personalInfo.location.split(',')[0] || personalInfo.location,
        addressCountry: 'Bangladesh',
      },
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Full Stack Development',
      'MERN Stack Development',
      'React Development',
      'Node.js Development',
    ],
  };
}

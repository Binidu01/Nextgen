import { useState } from 'react'
import { Link } from 'react-router-dom'

/* -----------------------------------------------------------
   DIGITAL PAGE COMPONENT
   ----------------------------------------------------------- */
export default function DigitalPage() {
  const [logoError, setLogoError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Project data with images and URLs
  const projects = [
    {
      image: '/digital/1.png',
      title: 'Red Bull',
      description: 'Energy Drink Brand Website',
      url: 'https://red-bull-dusky.vercel.app',
    },
    {
      image: '/digital/2.png',
      title: 'Travel Assistant',
      description: 'AI-Powered Travel Planning Platform',
      url: 'https://travel-assistant-lac.vercel.app',
    },
    {
      image: '/digital/3.png',
      title: 'Island Link',
      description: 'Online Shopping Mall',
      url: 'https://island-link-rust.vercel.app',
    },
    {
      image: '/digital/4.png',
      title: 'Eiko Lanka',
      description: 'Landing Page for Eiko Lanka Company',
      url: 'https://binidu01.github.io/eiko-lanka',
    },
  ]

  const openFullscreen = (e: React.MouseEvent, image: string) => {
    e.stopPropagation()
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const handleVisitWebsite = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built with React, Next.js, Bini.js, and TypeScript for maximum performance and scalability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed with Tailwind CSS and modern design systems that enhance user experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'E-Commerce',
      description:
        'Full-featured online stores with Shopify, headless CMS solutions, and custom e-commerce platforms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Scalable cloud infrastructure with AWS, Vercel, and Docker for reliable deployment and hosting solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
  ]

  const techStack = [
    'React',
    'Next.js',
    'Bini.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Vercel',
    'Docker',
    'Shopify',
    'Sanity',
    'Git',
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We understand your requirements, analyze your goals, and create a detailed project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Our designers create wireframes and high-fidelity prototypes that align with your brand vision.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'We build your application using modern technologies with clean, maintainable code.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description:
        'Rigorous testing, optimization, and seamless deployment to ensure a flawless launch.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </Link>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Logo Section */}
        <div className="flex flex-col items-center w-full mb-16">
          <div className="w-full max-w-xl">
            {!logoError ? (
              <div className="relative w-full" style={{ height: 'clamp(120px, 15vw, 200px)' }}>
                <img
                  src="/nextgendigital.png"
                  alt="NextGen Digital"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <h1 className="text-5xl font-black text-white uppercase tracking-tight mb-4 text-center">
                NextGen Digital
              </h1>
            )}
          </div>

          <p className="text-lg md:text-xl text-purple-400 mt-4 opacity-80 text-center">
            Modern web development for modern businesses
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-6 text-justify w-full max-w-7xl">
            We are a forward-thinking web development agency specializing in building cutting-edge
            digital solutions. Our team combines technical expertise with creative innovation to
            deliver high-performance applications that drive business growth. From responsive
            websites to complex enterprise platforms, we leverage the latest technologies including
            React, Next.js, Bini.js, and TypeScript to create scalable, secure, and user-friendly
            digital experiences that exceed expectations.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-purple-400">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Modern technologies we use to build powerful digital solutions
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-purple-400">Process</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional digital products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 h-full">
                  <div className="text-4xl font-bold text-purple-500/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Work Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-purple-400">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore our portfolio of successful web development projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Image - only this triggers fullscreen */}
                <div className="aspect-video overflow-hidden">
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={(e) => openFullscreen(e, project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder.png'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        Click to view screenshot
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content - clicking here does NOT trigger fullscreen */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <button
                    onClick={(e) => handleVisitWebsite(e, project.url)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300 text-sm"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-purple-400 transition-colors"
            aria-label="Close fullscreen view"
            title="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        body {
          background: #000;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  )
}
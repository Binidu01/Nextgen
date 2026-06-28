import { useState } from 'react'
import { Link } from 'react-router-dom'

/* -----------------------------------------------------------
   ADS PAGE COMPONENT
   ----------------------------------------------------------- */
export default function AdsPage() {
  const [logoError, setLogoError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Generate array of image paths from 1 to 12
  const adImages = Array.from({ length: 12 }, (_, i) => `/ads/${i + 1}.jpeg`)

  const openFullscreen = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const services = [
    {
      title: 'Meta Advertising',
      description:
        'Advanced Facebook & Instagram campaigns with precise audience targeting, custom audiences, and pixel-perfect conversion tracking.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'TikTok Marketing',
      description:
        'Viral-worthy short-form content strategies that capture Gen Z and Millennial audiences with authentic brand storytelling.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Performance Marketing',
      description:
        'Data-driven campaigns optimized for maximum ROI with continuous A/B testing and conversion rate optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Creative Studio',
      description:
        'Scroll-stopping ad creatives, motion graphics, and video content designed to captivate and convert your target audience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Strategy Development',
      description:
        'We analyze your brand, audience, and competition to create a tailored advertising strategy.',
    },
    {
      step: '02',
      title: 'Creative Production',
      description:
        'Our team designs compelling ad creatives, copy, and landing pages optimized for conversion.',
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description:
        'We launch and manage campaigns across selected platforms with precise targeting and budget optimization.',
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description:
        'Continuous monitoring, A/B testing, and scaling to maximize your return on investment.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/20 transition-all duration-300"
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
          {/* Logo - Center aligned with max width */}
          <div className="w-full max-w-xl">
            {!logoError ? (
              <div className="relative w-full" style={{ height: 'clamp(120px, 15vw, 200px)' }}>
                <img
                  src="/nextgenads.png"
                  alt="NextGen Ads"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <h1 className="text-5xl font-black text-white uppercase tracking-tight mb-4 text-center">
                NextGen Ads
              </h1>
            )}
          </div>

          {/* Tagline under logo */}
          <p className="text-lg md:text-xl text-green-400 mt-4 opacity-80 text-center">
            Social media advertising that delivers results
          </p>

          {/* Description - Full width justified */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-6 text-justify w-full max-w-7xl">
            We're a full-service social media advertising agency specializing in creating
            high-impact campaigns that drive real business results. Our data-driven approach
            combines creative excellence with advanced targeting to maximize your ROI and scale your
            brand's digital presence. From startups to enterprise brands, we deliver measurable
            outcomes through strategic campaign management, innovative creative design, and
            continuous optimization across all major social platforms.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-green-400">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive advertising solutions tailored to drive measurable growth for your
            business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 group"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
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
            Our <span className="text-green-400">Process</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A proven approach to delivering exceptional advertising results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5 h-full">
                  <div className="text-4xl font-bold text-green-500/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Work Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-green-400">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore our portfolio of successful campaigns and creative designs
          </p>

          {/* Ad Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-green-500/20 bg-green-500/5 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => openFullscreen(image)}>
                  <img
                    src={image}
                    alt={`Ad Post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/placeholder.png'
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                      Click to view post
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-sm">Campaign {index + 1}</h3>
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
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-green-400 transition-colors"
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

          {/* Image */}
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
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

// ============================================================
// CONFIGURATION - Change this to your desired company name
// ============================================================
const COMPANY_NAME = "Nexgen Ads"  // ← Changed to Nexgen Ads
const COMPANY_LOGO_PATH = "/nexgenads.png"  // ← Logo path (updated to nex)

// ============================================================
// CONTACT MESSAGE - Message to be sent via WhatsApp
// ============================================================
const WHATSAPP_NUMBER = "94782366132" // Without '+' for URL
const WHATSAPP_MESSAGE = `hii i like to work with ${COMPANY_NAME} send me the process`

/* -----------------------------------------------------------
   ADS PAGE COMPONENT
   ----------------------------------------------------------- */
export default function AdsPage() {
  const [logoError, setLogoError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const [servicesInView, setServicesInView] = useState(false)
  const [processInView, setProcessInView] = useState(false)

  // Generate array of image paths from 1 to 12
  const adImages = Array.from({ length: 12 }, (_, i) => `/ads/${i + 1}.jpeg`)

  // Auto-play carousel
  useEffect(() => {
    if (!selectedImage) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % adImages.length)
      }, 3000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [selectedImage, adImages.length])

  // Intersection Observer for Services section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Intersection Observer for Process section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openFullscreen = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % adImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + adImages.length) % adImages.length)
  }

  // WhatsApp handler
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(url, '_blank')
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
      color: '#10b981',
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
      color: '#10b981',
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
      color: '#10b981',
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
      color: '#10b981',
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
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* Background Gradient - Same as main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
        }} />
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 pb-safe-bottom">
        
        {/* Hero Section with Logo */}
        <div className="flex flex-col items-center w-full mb-16">
          <div className="w-full max-w-xl">
            {!logoError ? (
              <div className="relative w-full" style={{ height: 'clamp(100px, 12vw, 160px)' }}>
                <img
                  src={COMPANY_LOGO_PATH}
                  alt={COMPANY_NAME}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={() => setLogoError(true)}
                  style={{
                    WebkitFilter: 'none',
                  }}
                />
              </div>
            ) : (
              <h1 className="text-5xl font-black text-white uppercase tracking-tight mb-4 text-center">
                {COMPANY_NAME}
              </h1>
            )}
          </div>

          <p className="text-lg md:text-xl text-emerald-400 mt-4 text-center font-medium">
            Social media advertising that delivers results
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 text-center max-w-4xl">
            We're a full-service social media advertising agency specializing in creating
            high-impact campaigns that drive real business results. Our data-driven approach
            combines creative excellence with advanced targeting to maximize your ROI and scale your
            brand's digital presence.
          </p>
        </div>

        {/* MacBook Section - Matching main page style */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20">
          {/* Left side - Brand info */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">
              Performance Marketing That Drives Revenue
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Data-driven campaigns across all major platforms optimized for measurable business growth and ROI.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: '150+', label: 'Active Campaigns' },
                { value: '3.2x', label: 'Average ROAS' },
                { value: '15+', label: 'Platform Partners' },
              ].map((m, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all duration-300">
                  <div className="text-lg sm:text-xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg group"
              style={{ 
                backgroundColor: '#25D366',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.25)',
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact via WhatsApp
            </button>
          </div>

          {/* Right side - MacBook */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* MacBook Body */}
              <div className="relative bg-gradient-to-b from-[#1a1a1e] to-[#0a0a0b] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="relative aspect-[16/10] m-[5px] rounded-lg overflow-hidden bg-[#0a0a0b]">
                  <img
                    src={adImages[currentSlide]}
                    alt={`Ad Post ${currentSlide + 1}`}
                    className="w-full h-full object-contain p-2 cursor-pointer"
                    onClick={() => openFullscreen(adImages[currentSlide])}
                    style={{
                      WebkitFilter: 'none',
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Slide Counter */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/50 text-white/70 text-[10px] backdrop-blur-sm">
                    {currentSlide + 1} / {adImages.length}
                  </div>
                </div>
                
                {/* MacBook Camera Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1e] border border-white/5" />
              </div>
              
              {/* MacBook Base */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-[#1a1a1e] rounded-b-sm" />
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mb-20 flex-wrap">
          {adImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentSlide === index
                  ? 'border-emerald-400 scale-110 shadow-lg shadow-emerald-400/20'
                  : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/placeholder.png'
                }}
                style={{
                  WebkitFilter: 'none',
                }}
              />
            </button>
          ))}
        </div>

        {/* Services Section - With scroll animation */}
        <div ref={servicesRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${
            servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-emerald-400">Services</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              Comprehensive advertising solutions tailored to drive measurable growth for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? 'translateY(0)' : `translateY(40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section - With scroll animation */}
        <div ref={processRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${
            processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-emerald-400">Process</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              A proven approach to delivering exceptional advertising results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
                style={{
                  opacity: processInView ? 1 : 0,
                  transform: processInView ? 'translateX(0)' : `translateX(-40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                }}
              >
                <div className="p-6 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-emerald-500/20 mb-4 font-mono">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-1/2 -right-3 transition-all duration-700"
                    style={{
                      width: processInView ? '24px' : '0px',
                      height: '2px',
                      backgroundColor: 'rgba(16, 185, 129, 0.3)',
                      transition: `all 0.7s ease ${index * 0.2 + 0.3}s`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-emerald-500/30" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-[0.2em]">
              Let's Work Together
            </span>
            <div className="w-12 h-px bg-emerald-500/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your advertising?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's create campaigns that drive real results for your business.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              backgroundColor: '#25D366',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.25)',
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact via WhatsApp
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-emerald-400 transition-colors duration-300"
            aria-label="Close fullscreen view"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              WebkitFilter: 'none',
            }}
          />
        </div>
      )}

      <style>{`
        body {
          background: #0a0a0b;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .pb-safe-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }

        @supports (-webkit-touch-callout: none) {
          .sticky {
            position: -webkit-sticky;
            position: sticky;
          }
          
          [style*="min-height: 100dvh"] {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  )
}
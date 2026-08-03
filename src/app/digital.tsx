import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'

// ============================================================
// CONFIGURATION - Change this to your desired company name
// ============================================================
const COMPANY_NAME = "Nexgen Digital"  // ← Changed to Nextgen Digital
const COMPANY_LOGO_PATH = "/nextgendigital.png"  // ← Logo path

// ============================================================
// CONTACT MESSAGE - Message to be sent via WhatsApp
// ============================================================
const WHATSAPP_NUMBER = "94782366132" // Without '+' for URL
const WHATSAPP_MESSAGE = `hii i like to work with ${COMPANY_NAME} send me the process`

/* -----------------------------------------------------------
   DIGITAL PAGE COMPONENT
   ----------------------------------------------------------- */
export default function DigitalPage() {
  const [logoError, setLogoError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const [servicesInView, setServicesInView] = useState(false)
  const [processInView, setProcessInView] = useState(false)
  const [workInView, setWorkInView] = useState(false)

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

  // Auto-play carousel
  useEffect(() => {
    if (!selectedImage) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }, 3000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [selectedImage, projects.length])

  // Intersection Observers
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    
    const servicesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setServicesInView(true); servicesObserver.disconnect() }
    }, observerOptions)
    
    const processObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setProcessInView(true); processObserver.disconnect() }
    }, observerOptions)
    
    const workObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWorkInView(true); workObserver.disconnect() }
    }, observerOptions)

    if (servicesRef.current) servicesObserver.observe(servicesRef.current)
    if (processRef.current) processObserver.observe(processRef.current)
    if (workRef.current) workObserver.observe(workRef.current)

    return () => {
      servicesObserver.disconnect()
      processObserver.disconnect()
      workObserver.disconnect()
    }
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
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleVisitWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
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
      title: 'Web Development',
      description:
        'Custom websites and web applications built with React, Next.js, Bini.js, and TypeScript for maximum performance and scalability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed with Tailwind CSS and modern design systems that enhance user experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'E-Commerce',
      description:
        'Full-featured online stores with Shopify, headless CMS solutions, and custom e-commerce platforms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Scalable cloud infrastructure with AWS, Vercel, and Docker for reliable deployment and hosting solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ]

  const techStack = [
    'React', 'Next.js', 'Bini.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS',
    'Vercel', 'Docker', 'Shopify', 'Sanity', 'Git',
  ]

  const processSteps = [
    { step: '01', title: 'Discovery & Planning', description: 'We understand your requirements, analyze your goals, and create a detailed project roadmap.' },
    { step: '02', title: 'Design & Prototyping', description: 'Our designers create wireframes and high-fidelity prototypes that align with your brand vision.' },
    { step: '03', title: 'Development', description: 'We build your application using modern technologies with clean, maintainable code.' },
    { step: '04', title: 'Testing & Launch', description: 'Rigorous testing, optimization, and seamless deployment to ensure a flawless launch.' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-hidden">
      {/* Background Gradient - Violet theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        }} />
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-violet-500/30 text-violet-400 rounded-lg hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        
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
                />
              </div>
            ) : (
              <h1 className="text-5xl font-black text-white uppercase tracking-tight mb-4 text-center">
                {COMPANY_NAME}
              </h1>
            )}
          </div>

          <p className="text-lg md:text-xl text-violet-400 mt-4 text-center font-medium">
            Modern web development for modern businesses
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 text-center max-w-4xl">
            We are a forward-thinking web development agency specializing in building cutting-edge
            digital solutions. Our team combines technical expertise with creative innovation to
            deliver high-performance applications that drive business growth.
          </p>
        </div>

        {/* MacBook Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20">
          {/* Left side - Brand info */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-violet-400">
              Enterprise-Grade Software Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Production-ready web applications built with modern stack technologies and enterprise-grade security.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '25+', label: 'Enterprise Clients' },
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
              <div className="relative bg-gradient-to-b from-[#1a1a1e] to-[#0a0a0b] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative aspect-[16/10] m-[5px] rounded-lg overflow-hidden bg-[#0a0a0b]">
                  <img
                    src={projects[currentSlide].image}
                    alt={projects[currentSlide].title}
                    className="w-full h-full object-contain p-2 cursor-pointer"
                    onClick={() => openFullscreen(projects[currentSlide].image)}
                  />
                  
                  <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/50 text-white/70 text-[10px] backdrop-blur-sm">
                    {currentSlide + 1} / {projects.length}
                  </div>
                </div>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1e] border border-white/5" />
              </div>
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-[#1a1a1e] rounded-b-sm" />
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mb-20 flex-wrap">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentSlide === index
                  ? 'border-violet-400 scale-110 shadow-lg shadow-violet-400/20'
                  : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png' }}
              />
            </button>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-violet-400">Tech Stack</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
            Modern technologies we use to build powerful digital solutions
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Services Section - With scroll animation */}
        <div ref={servicesRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-violet-400">Services</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-violet-500/10 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? 'translateY(0)' : `translateY(40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <div className="text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section - With scroll animation */}
        <div ref={processRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-violet-400">Process</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              A systematic approach to delivering exceptional digital products
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
                <div className="p-6 rounded-xl border border-violet-500/10 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-violet-500/20 mb-4 font-mono">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-1/2 -right-3 transition-all duration-700"
                    style={{
                      width: processInView ? '24px' : '0px',
                      height: '2px',
                      backgroundColor: 'rgba(139, 92, 246, 0.3)',
                      transition: `all 0.7s ease ${index * 0.2 + 0.3}s`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Work Section - With scroll animation */}
        <div ref={workRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${workInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-violet-400">Work</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              Explore our portfolio of successful web development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-violet-500/10 bg-violet-500/5 hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.01]"
                style={{
                  opacity: workInView ? 1 : 0,
                  transform: workInView ? 'translateY(0)' : `translateY(40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => openFullscreen(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png' }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        Click to view screenshot
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <button
                    onClick={() => handleVisitWebsite(project.url)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-violet-500/30 text-violet-400 rounded-lg hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-300 text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-violet-500/30" />
            <span className="text-sm font-medium text-violet-400 uppercase tracking-[0.2em]">
              Let's Work Together
            </span>
            <div className="w-12 h-px bg-violet-500/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build your next project?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's create powerful digital solutions that drive your business forward.
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
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-violet-400 transition-colors duration-300"
            aria-label="Close fullscreen view"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        body {
          background: #0a0a0b;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  )
}
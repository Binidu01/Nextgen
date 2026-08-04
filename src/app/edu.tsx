import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

// ============================================================
// CONFIGURATION - Change this to your desired company name
// ============================================================
const COMPANY_NAME = "NexGen Edu"  // ← CHANGE THIS TO YOUR DESIRED NAME
const COMPANY_LOGO_PATH = "/nexgenedu.png"  // ← Update logo path if needed

// ============================================================
// CONTACT MESSAGE - Message to be sent via WhatsApp
// ============================================================
const WHATSAPP_NUMBER = "94782366132" // Without '+' for URL
const WHATSAPP_MESSAGE = `hii i like to work with ${COMPANY_NAME} send me the process`

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function EduPage() {
  const [logoError, setLogoError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const guaranteesRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const [guaranteesInView, setGuaranteesInView] = useState(false)
  const [servicesInView, setServicesInView] = useState(false)
  const [processInView, setProcessInView] = useState(false)

  // Educational visuals for MacBook carousel
  const eduVisuals = [
    { title: 'Assignment Support', subtitle: 'HND, BTEC & Diploma Programs' },
    { title: 'Research & Dissertations', subtitle: 'PhD-Level Guidance' },
    { title: 'Academic Writing', subtitle: 'Essays, Reports & Papers' },
    { title: 'One-on-One Tutoring', subtitle: 'Personalized Learning' },
    { title: 'Quality Assurance', subtitle: 'Plagiarism-Free Guarantee' },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!selectedImage) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % eduVisuals.length)
      }, 3000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [selectedImage, eduVisuals.length])

  // Intersection Observers
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    
    const guaranteesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setGuaranteesInView(true); guaranteesObserver.disconnect() }
    }, observerOptions)
    
    const servicesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setServicesInView(true); servicesObserver.disconnect() }
    }, observerOptions)
    
    const processObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setProcessInView(true); processObserver.disconnect() }
    }, observerOptions)

    if (guaranteesRef.current) guaranteesObserver.observe(guaranteesRef.current)
    if (servicesRef.current) servicesObserver.observe(servicesRef.current)
    if (processRef.current) processObserver.observe(processRef.current)

    return () => {
      guaranteesObserver.disconnect()
      servicesObserver.disconnect()
      processObserver.disconnect()
    }
  }, [])

  const closeFullscreen = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eduVisuals.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eduVisuals.length) % eduVisuals.length)
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
      title: 'HND & BTEC Support',
      description:
        'Comprehensive assignment assistance for HND and BTEC programs with in-depth research, proper referencing, and high-quality submissions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Diploma Programs',
      description:
        'Expert guidance for diploma and certification programs across various disciplines with personalized mentorship and academic support.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Academic Writing',
      description:
        'Professional dissertation guidance, research paper support, and academic writing assistance with proper formatting and citations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: 'Tutoring & Mentorship',
      description:
        'One-on-one tutoring sessions and mentorship programs across multiple subjects to help students excel in their academic journey.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  const subjects = [
    'Business Management', 'Marketing', 'Accounting & Finance',
    'Information Technology', 'Computer Science', 'Engineering',
    'Healthcare Management', 'Hospitality Management', 'Law',
    'Psychology', 'Sociology', 'English Literature',
  ]

  const guarantees = [
    {
      title: 'Plagiarism-Free',
      description: 'All work is original and checked with advanced plagiarism detection tools',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'On-Time Delivery',
      description: 'We guarantee timely submission of all assignments before your deadline',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Expert Writers',
      description: 'Qualified professionals with advanced degrees and subject matter expertise',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
    },
    {
      title: 'Confidential Service',
      description: 'Complete privacy and confidentiality guaranteed for all academic support services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const processSteps = [
    { step: '01', title: 'Submit Requirements', description: 'Share your assignment details, guidelines, and deadlines with our team for review.' },
    { step: '02', title: 'Expert Assignment', description: 'We match your work with a subject matter expert who understands your curriculum.' },
    { step: '03', title: 'Research & Writing', description: 'Our experts conduct thorough research and create original, high-quality content.' },
    { step: '04', title: 'Quality Check & Delivery', description: 'Rigorous quality assurance, plagiarism check, and timely delivery of your work.' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* Background Gradient - Sky blue theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
        }} />
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-sky-500/30 text-sky-400 rounded-lg hover:bg-sky-500/10 hover:border-sky-500/60 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
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

          <p className="text-lg md:text-xl text-sky-400 mt-4 text-center font-medium">
            Academic excellence through expert support
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 text-center max-w-4xl">
            We are dedicated to helping students achieve academic success through comprehensive
            educational support services. Our team of experienced academic professionals provides
            personalized guidance, research assistance, and assignment support across multiple
            disciplines.
          </p>
        </div>

        {/* MacBook Section - Fixed with smaller inside content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20">
          {/* Left side - Brand info */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-400">
              Academic Support That Gets Results
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Expert academic guidance from subject matter specialists helping students achieve their educational goals.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: '1,000+', label: 'Assignments Done' },
                { value: '98.5%', label: 'Satisfaction Rate' },
                { value: '50+', label: 'Expert Tutors' },
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

          {/* Right side - MacBook with FIXED SIZE and SMALLER inside content */}
          <div className="flex-1 flex justify-center">
            <div className="w-[320px] sm:w-[400px] md:w-[480px]">
              <div className="relative bg-gradient-to-b from-[#1a1a1e] to-[#0a0a0b] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative aspect-[16/10] m-[5px] rounded-lg overflow-hidden bg-[#0a0a0b]">
                  {/* Educational content display */}
                  <div className="w-full h-full bg-gradient-to-br from-[#0a0a0b] to-[#1a1a1e] rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute bottom-0 left-0 w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 80%, #0ea5e9 0%, transparent 50%)',
                      }} />
                    </div>
                    
                    <div className="relative z-10 text-center w-full space-y-2 sm:space-y-3">
                      {/* Icon - Smaller */}
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Title - Smaller */}
                      <h3 className="text-white text-sm sm:text-base font-bold leading-tight">
                        {eduVisuals[currentSlide].title}
                      </h3>
                      
                      {/* Subtitle - Smaller */}
                      <p className="text-sky-400 text-xs sm:text-sm font-medium">
                        {eduVisuals[currentSlide].subtitle}
                      </p>
                      
                      {/* Progress bars - Smaller */}
                      <div className="space-y-1.5 sm:space-y-2 max-w-[200px] sm:max-w-[220px] mx-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] sm:text-[9px] text-gray-400 font-medium w-12 sm:w-14 text-right">Quality</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-400 rounded-full" style={{ width: '98%' }} />
                          </div>
                          <span className="text-[8px] sm:text-[9px] text-sky-400 font-mono">98%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] sm:text-[9px] text-gray-400 font-medium w-12 sm:w-14 text-right">Original</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-400 rounded-full" style={{ width: '100%' }} />
                          </div>
                          <span className="text-[8px] sm:text-[9px] text-sky-400 font-mono">100%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] sm:text-[9px] text-gray-400 font-medium w-12 sm:w-14 text-right">On Time</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-400 rounded-full" style={{ width: '99%' }} />
                          </div>
                          <span className="text-[8px] sm:text-[9px] text-sky-400 font-mono">99%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
                    className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Slide Counter */}
                  <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 text-white/80 text-[8px] sm:text-xs font-medium backdrop-blur-sm border border-white/10">
                    {currentSlide + 1} / {eduVisuals.length}
                  </div>
                </div>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1e] border border-white/5" />
              </div>
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-[#1a1a1e] rounded-b-sm" />
            </div>
          </div>
        </div>

        {/* Guarantees Section - With scroll animation */}
        <div ref={guaranteesRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${guaranteesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Why <span className="text-sky-400">Choose Us</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              We are committed to providing the highest quality academic support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-sky-500/10 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  opacity: guaranteesInView ? 1 : 0,
                  transform: guaranteesInView ? 'translateY(0)' : `translateY(40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <div className="text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {guarantee.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section - With scroll animation */}
        <div ref={servicesRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-sky-400">Services</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              Comprehensive academic support tailored to your educational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-sky-500/10 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? 'translateY(0)' : `translateY(40px)`,
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <div className="text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Subjects We <span className="text-sky-400">Cover</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
            Expert support across a wide range of academic disciplines
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 text-sm hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Process Section - With scroll animation */}
        <div ref={processRef} className="mb-20">
          <div className={`transition-all duration-1000 transform ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              How It <span className="text-sky-400">Works</span>
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm">
              Simple and straightforward process to get the academic support you need
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
                <div className="p-6 rounded-xl border border-sky-500/10 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-sky-500/20 mb-4 font-mono">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-1/2 -right-3 transition-all duration-700"
                    style={{
                      width: processInView ? '24px' : '0px',
                      height: '2px',
                      backgroundColor: 'rgba(14, 165, 233, 0.3)',
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
            <div className="w-12 h-px bg-sky-500/30" />
            <span className="text-sm font-medium text-sky-400 uppercase tracking-[0.2em]">
              Let's Work Together
            </span>
            <div className="w-12 h-px bg-sky-500/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to excel in your studies?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Get expert academic support tailored to your educational needs.
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
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-sky-400 transition-colors duration-300"
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
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  Code2,
  Cloud,
  BookOpen,
  PenTool,
  Users,
  CheckCircle2,
  ArrowRight,
  Shield,
  Database,
  Server,
  Search,
  Award,
  BarChart3,
  Zap,
  Rocket,
  ChevronDown,
} from 'lucide-react'
import {
  siInstagram,
  siFacebook,
  siTiktok,
  siGoogleads,
} from 'simple-icons'

// ---------------------------------------------------------------------------
// TYPE DEFINITIONS
// ---------------------------------------------------------------------------
interface Step {
  label: string
  description: string
  icon: React.ReactNode
  screenContent?: React.ReactNode
  status?: 'pending' | 'active' | 'complete'
}

interface SectionData {
  id: string
  name: string
  tagline: string
  description: string
  logo: string
  steps: Step[]
  linkTo: string
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  metrics: { value: string; label: string; target: number }[]
  background: string
  screenContent?: React.ReactNode
}

// ---------------------------------------------------------------------------
// SIMPLE ICON COMPONENT
// ---------------------------------------------------------------------------
function SimpleIcon({ icon, size = 16 }: { icon: { path: string }; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path d={icon.path} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// SCREEN CONTENT COMPONENTS
// ---------------------------------------------------------------------------
function AdsScreen({ activeStep }: { activeStep: number }) {
  const screens = [
    { 
      icon: <SimpleIcon icon={siInstagram} size={24} />, 
      label: 'Instagram Ads', 
      color: '#e4405f',
      metrics: { clicks: '12.4K', ctr: '1.8%', roas: '3.8x' }
    },
    { 
      icon: <SimpleIcon icon={siFacebook} size={24} />, 
      label: 'Facebook Targeting', 
      color: '#1877f2',
      metrics: { clicks: '28.5K', ctr: '2.2%', roas: '4.2x' }
    },
    { 
      icon: <SimpleIcon icon={siTiktok} size={24} />, 
      label: 'TikTok Strategy', 
      color: '#000000',
      metrics: { clicks: '45.2K', ctr: '3.1%', roas: '5.6x' }
    },
    { 
      icon: <SimpleIcon icon={siGoogleads} size={24} />, 
      label: 'Google Ads', 
      color: '#4285f4',
      metrics: { clicks: '18.9K', ctr: '2.7%', roas: '4.5x' }
    },
    { 
      icon: <BarChart3 size={24} />, 
      label: 'Analytics Dashboard', 
      color: '#10b981',
      metrics: { clicks: '104.3K', ctr: '3.2%', roas: '5.2x' }
    },
  ]

  const safeActiveStep = Math.max(0, Math.min(activeStep, screens.length - 1))

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0b] to-[#1a1a1e] rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
      </div>
      
      <div className="relative z-10 text-center w-full">
        {safeActiveStep >= 0 && safeActiveStep < screens.length && (
          <div className="transform transition-all duration-700 space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl" style={{ color: screens[safeActiveStep].color }}>
                {screens[safeActiveStep].icon}
              </div>
              <h3 className="text-white text-sm sm:text-lg font-bold">{screens[safeActiveStep].label}</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-[240px] sm:max-w-xs mx-auto">
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.clicks}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Clicks</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.ctr}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">CTR</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.roas}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">ROAS</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function DigitalScreen({ activeStep }: { activeStep: number }) {
  const screens = [
    { 
      icon: <Code2 size={24} />, 
      label: 'VS Code', 
      color: '#007acc',
      metrics: { files: '127', commits: '3.2K', tests: '89%' }
    },
    { 
      icon: <Zap size={24} />, 
      label: 'React Components', 
      color: '#61dafb',
      metrics: { files: '342', commits: '5.8K', tests: '94%' }
    },
    { 
      icon: <Cloud size={24} />, 
      label: 'Deploying...', 
      color: '#8b5cf6',
      metrics: { files: '458', commits: '7.1K', tests: '97%' }
    },
    { 
      icon: <Rocket size={24} />, 
      label: 'Launch!', 
      color: '#f59e0b',
      metrics: { files: '512', commits: '8.4K', tests: '99%' }
    },
    { 
      icon: <Globe size={24} />, 
      label: 'Live Website', 
      color: '#10b981',
      metrics: { files: '527', commits: '9.2K', tests: '99.9%' }
    },
  ]

  const safeActiveStep = Math.max(0, Math.min(activeStep, screens.length - 1))

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0b] to-[#1a1a1e] rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite 1s',
        }} />
      </div>
      
      <div className="relative z-10 text-center w-full">
        {safeActiveStep >= 0 && safeActiveStep < screens.length && (
          <div className="transform transition-all duration-700 space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl" style={{ color: screens[safeActiveStep].color }}>
                {screens[safeActiveStep].icon}
              </div>
              <h3 className="text-white text-sm sm:text-lg font-bold">{screens[safeActiveStep].label}</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-[240px] sm:max-w-xs mx-auto">
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.files}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Files</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.commits}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Commits</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.tests}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Coverage</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function EduScreen({ activeStep }: { activeStep: number }) {
  const screens = [
    { 
      icon: <BookOpen size={24} />, 
      label: 'Assignment', 
      color: '#0ea5e9',
      metrics: { words: '2.5K', sources: '12', grade: 'A' }
    },
    { 
      icon: <Search size={24} />, 
      label: 'Research', 
      color: '#0ea5e9',
      metrics: { words: '5.8K', sources: '24', grade: 'A+' }
    },
    { 
      icon: <PenTool size={24} />, 
      label: 'Writing', 
      color: '#0ea5e9',
      metrics: { words: '8.2K', sources: '36', grade: 'A+' }
    },
    { 
      icon: <Award size={24} />, 
      label: 'Review', 
      color: '#0ea5e9',
      metrics: { words: '9.5K', sources: '42', grade: 'A+' }
    },
    { 
      icon: <GraduationCap size={24} />, 
      label: 'Approved!', 
      color: '#0ea5e9',
      metrics: { words: '10K', sources: '48', grade: 'A+' }
    },
  ]

  const safeActiveStep = Math.max(0, Math.min(activeStep, screens.length - 1))

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0b] to-[#1a1a1e] rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 50% 80%, #0ea5e9 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite 2s',
        }} />
      </div>
      
      <div className="relative z-10 text-center w-full">
        {safeActiveStep >= 0 && safeActiveStep < screens.length && (
          <div className="transform transition-all duration-700 space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl" style={{ color: screens[safeActiveStep].color }}>
                {screens[safeActiveStep].icon}
              </div>
              <h3 className="text-white text-sm sm:text-lg font-bold">{screens[safeActiveStep].label}</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-[240px] sm:max-w-xs mx-auto">
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.words}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Words</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.sources}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Sources</div>
              </div>
              <div className="bg-white/5 rounded-lg p-1.5 sm:p-2">
                <div className="text-white text-xs sm:text-sm font-mono">{screens[safeActiveStep].metrics.grade}</div>
                <div className="text-[7px] sm:text-[8px] text-gray-500 uppercase tracking-wider">Grade</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Globe(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function GraduationCap(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.5 3 2.5 6 2.5s6-1 6-2.5v-5" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// SECTION DATA - Updated "Next" to "Nex"
// ---------------------------------------------------------------------------
const sections: SectionData[] = [
  {
    id: 'ads',
    name: 'NexGen Ads',
    tagline: 'Performance Marketing That Drives Revenue',
    description: 'Data-driven campaigns across all major platforms optimized for measurable business growth and ROI.',
    logo: '/nexgenads.png',
    color: '#10b981',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
    background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
    metrics: [
      { value: '150+', label: 'Active Campaigns', target: 150 },
      { value: '3.2x', label: 'Average ROAS', target: 3.2 },
      { value: '15+', label: 'Platform Partners', target: 15 },
    ],
    steps: [
      {
        label: 'Meta Advertising',
        description: 'Full-funnel campaigns across Facebook & Instagram with advanced pixel integration and custom audiences.',
        icon: <SimpleIcon icon={siInstagram} />,
      },
      {
        label: 'Facebook Targeting',
        description: 'Precision audience targeting using lookalike audiences, retargeting pools, and demographic segmentation.',
        icon: <SimpleIcon icon={siFacebook} />,
      },
      {
        label: 'TikTok Strategy',
        description: 'Native short-form video content designed for the TikTok algorithm with trend-jacking and creator partnerships.',
        icon: <SimpleIcon icon={siTiktok} />,
      },
      {
        label: 'Google Ads',
        description: 'Search, Display, Shopping, and YouTube campaigns managed by Google-certified specialists.',
        icon: <SimpleIcon icon={siGoogleads} />,
      },
      {
        label: 'Analytics & Reporting',
        description: 'Custom dashboards with real-time ROAS tracking, attribution modeling, and weekly performance insights.',
        icon: <BarChart3 className="w-4 h-4" />,
      },
    ],
    linkTo: '/ads',
    screenContent: <AdsScreen activeStep={0} />,
  },
  {
    id: 'digital',
    name: 'NexGen Digital',
    tagline: 'Enterprise-Grade Software Development',
    description: 'Production-ready web applications built with modern stack technologies and enterprise-grade security.',
    logo: '/nexgendigital.png',
    color: '#8b5cf6',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    textColor: 'text-violet-400',
    background: 'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
    metrics: [
      { value: '50+', label: 'Projects Delivered', target: 50 },
      { value: '99.9%', label: 'Uptime SLA', target: 99.9 },
      { value: '25+', label: 'Enterprise Clients', target: 25 },
    ],
    steps: [
      {
        label: 'Frontend Development',
        description: 'Pixel-perfect interfaces built with React, Next.js, and TypeScript with component libraries and responsive layouts.',
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        label: 'Backend Architecture',
        description: 'Scalable APIs and microservices using Node.js, Python, and Go with caching strategies and message queues.',
        icon: <Server className="w-4 h-4" />,
      },
      {
        label: 'Cloud Infrastructure',
        description: 'AWS, Google Cloud, and Vercel deployments with CI/CD pipelines, containerization, and infrastructure as code.',
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        label: 'Database & Storage',
        description: 'PostgreSQL, MongoDB, Redis, and edge-optimized data architectures with real-time sync and disaster recovery.',
        icon: <Database className="w-4 h-4" />,
      },
      {
        label: 'Security & Compliance',
        description: 'SOC 2 compliance, GDPR-ready implementations, penetration testing, and secure authentication systems.',
        icon: <Shield className="w-4 h-4" />,
      },
    ],
    linkTo: '/digital',
    screenContent: <DigitalScreen activeStep={0} />,
  },
  {
    id: 'edu',
    name: 'NexGen Edu',
    tagline: 'Academic Support That Gets Results',
    description: 'Expert academic guidance from subject matter specialists helping students achieve their educational goals.',
    logo: '/nexgenedu.png',
    color: '#0ea5e9',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    textColor: 'text-sky-400',
    background: 'radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
    metrics: [
      { value: '1,000+', label: 'Assignments Completed', target: 1000 },
      { value: '98.5%', label: 'Satisfaction Rate', target: 98.5 },
      { value: '50+', label: 'Expert Tutors', target: 50 },
    ],
    steps: [
      {
        label: 'Assignment Support',
        description: 'Comprehensive assistance for HND, BTEC, undergraduate, and postgraduate assignments with proper citations.',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        label: 'Research & Dissertations',
        description: 'Literature reviews, methodology design, data analysis, and full dissertation support from PhD researchers.',
        icon: <Search className="w-4 h-4" />,
      },
      {
        label: 'One-on-One Tutoring',
        description: 'Personalized sessions with industry professionals and academic experts with flexible scheduling and tracking.',
        icon: <Users className="w-4 h-4" />,
      },
      {
        label: 'Writing & Editing',
        description: 'Academic writing coaching, essay structure guidance, and professional proofreading to improve skills.',
        icon: <PenTool className="w-4 h-4" />,
      },
      {
        label: 'Quality Assurance',
        description: 'Every submission passes through rigorous quality checks with Turnitin reports and compliance guidelines.',
        icon: <Award className="w-4 h-4" />,
      },
    ],
    linkTo: '/edu',
    screenContent: <EduScreen activeStep={0} />,
  },
]

// ---------------------------------------------------------------------------
// HOOK: SCROLL-BASED ANIMATION
// ---------------------------------------------------------------------------
function useScrollProgress() {
  const [phase, setPhase] = useState<'hero' | 'ads' | 'digital' | 'edu' | 'cta'>('hero')
  const [activeStep, setActiveStep] = useState(-1)
  const [heroProgress, setHeroProgress] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stepsPerSection = sections[0].steps.length

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollOffset = -rect.top
      const containerHeight = rect.height
      const windowHeight = window.innerHeight
      const totalScroll = containerHeight - windowHeight
      const p = Math.max(0, Math.min(1, scrollOffset / totalScroll))
      setProgress(p)

      // Hero phase progress (0 to 1 within first 10%)
      if (p < 0.10) {
        setPhase('hero')
        setHeroProgress(p / 0.10) // 0 to 1 within hero phase
        setActiveStep(-1)
      } else if (p < 0.35) {
        setPhase('ads')
        setHeroProgress(1)
        const sectionProgress = (p - 0.10) / 0.25
        setActiveStep(Math.min(Math.floor(sectionProgress * stepsPerSection), stepsPerSection - 1))
      } else if (p < 0.60) {
        setPhase('digital')
        const sectionProgress = (p - 0.35) / 0.25
        setActiveStep(Math.min(Math.floor(sectionProgress * stepsPerSection), stepsPerSection - 1))
      } else if (p < 0.85) {
        setPhase('edu')
        const sectionProgress = (p - 0.60) / 0.25
        setActiveStep(Math.min(Math.floor(sectionProgress * stepsPerSection), stepsPerSection - 1))
      } else {
        setPhase('cta')
        setActiveStep(-1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { phase, activeStep, progress, heroProgress, containerRef }
}

// ---------------------------------------------------------------------------
// COUNT-UP METRIC COMPONENT
// ---------------------------------------------------------------------------
function CountUpMetric({ value, label, target, inView }: { value: string; label: string; target: number; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!inView) return
    
    let current = 0
    const steps = 60
    const increment = target / steps
    const isPercentage = value.includes('%')
    const isMoney = value.includes('$')
    const isPlus = value.includes('+')
    const isK = value.includes('K')
    
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        let formatted = ''
        if (isPercentage) formatted = `${Math.round(target)}%`
        else if (isMoney) formatted = `$${Math.round(target)}M+`
        else if (isPlus) formatted = `${Math.round(target)}+`
        else if (isK) formatted = `${Math.round(target / 1000)}K+`
        else formatted = `${Math.round(target)}`
        setDisplayValue(formatted)
        clearInterval(interval)
      } else {
        let formatted = ''
        if (isPercentage) formatted = `${Math.round(current)}%`
        else if (isMoney) formatted = `$${Math.round(current)}M+`
        else if (isPlus) formatted = `${Math.round(current)}+`
        else if (isK) formatted = `${Math.round(current / 1000)}K+`
        else formatted = `${Math.round(current)}`
        setDisplayValue(formatted)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [inView, target, value])

  return (
    <div className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all duration-300">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 tabular-nums transition-all duration-300">
        {displayValue}
      </div>
      <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// HOOK: INTERSECTION OBSERVER
// ---------------------------------------------------------------------------
function useInView(options = { threshold: 0.3, triggerOnce: true }) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.triggerOnce) {
            observer.disconnect()
          }
        } else if (!options.triggerOnce) {
          setInView(false)
        }
      },
      { threshold: options.threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.triggerOnce])

  return [ref, inView] as const
}

// ---------------------------------------------------------------------------
// STEP COMPONENT - Mobile optimized version
// ---------------------------------------------------------------------------
function StepItem({ step, index, activeStep, color }: {
  step: Step
  index: number
  activeStep: number
  color: string
}) {
  const isActive = index === activeStep
  const isComplete = index < activeStep
  const isVisible = index <= activeStep

  return (
    <>
      {/* Desktop Version */}
      <div
        className={`hidden sm:flex group relative items-start gap-3 p-4 rounded-xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        } ${
          isActive 
            ? 'bg-white/5 scale-[1.02] border-2 shadow-2xl' 
            : isComplete 
              ? 'bg-white/[0.02] border border-white/[0.04]' 
              : 'border border-transparent'
        }`}
        style={{
          borderColor: isActive ? color : isComplete ? `${color}30` : 'transparent',
          boxShadow: isActive ? `0 0 30px ${color}15` : 'none',
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl overflow-hidden">
          <div 
            className="h-full transition-all duration-700"
            style={{
              width: isComplete ? '100%' : isActive ? '50%' : '0%',
              backgroundColor: color,
              opacity: isComplete || isActive ? 1 : 0,
            }}
          />
        </div>

        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 mt-0.5"
          style={{ 
            backgroundColor: isActive || isComplete ? `${color}20` : 'transparent',
            color: isActive || isComplete ? color : '#444',
            border: isActive ? `2px solid ${color}40` : isComplete ? `1px solid ${color}20` : '1px solid transparent',
          }}
        >
          {step.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-medium transition-all duration-500 ${
              isActive ? 'text-white' : isComplete ? 'text-white/80' : 'text-white/30'
            }`}>
              {step.label}
            </span>
            {isComplete && <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />}
          </div>
          
          <p className={`text-xs leading-relaxed transition-all duration-500 ${
            isActive ? 'text-gray-300' : isComplete ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {step.description}
          </p>
        </div>
      </div>

      {/* Mobile Version - Compact without descriptions */}
      <div
        className={`flex sm:hidden items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
          isActive 
            ? 'bg-white/10 scale-[1.02]' 
            : isComplete 
              ? 'bg-white/[0.05]' 
              : 'bg-transparent'
        }`}
        style={{
          borderColor: isActive ? color : 'transparent',
          borderWidth: isActive ? '1px' : '0px',
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ 
            backgroundColor: isActive || isComplete ? `${color}20` : 'transparent',
            color: isActive || isComplete ? color : '#555',
          }}
        >
          {step.icon}
        </div>

        <span className={`text-xs font-medium flex-1 transition-all duration-300 ${
          isActive ? 'text-white' : isComplete ? 'text-white/80' : 'text-white/40'
        }`}>
          {step.label}
        </span>

        {isComplete && (
          <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />
        )}
        
        {isActive && (
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        )}
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// MACBOOK SCREEN COMPONENT
// ---------------------------------------------------------------------------
function MacBookScreen({ section, activeStep }: { section: SectionData; activeStep: number }) {
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (activeStep >= 0) {
      setRotation(activeStep * 1.5)
      setScale(1 + (activeStep * 0.005))
    }
  }, [activeStep])

  const getScreenContent = () => {
    switch (section.id) {
      case 'ads':
        return <AdsScreen activeStep={activeStep} />
      case 'digital':
        return <DigitalScreen activeStep={activeStep} />
      case 'edu':
        return <EduScreen activeStep={activeStep} />
      default:
        return <AdsScreen activeStep={activeStep} />
    }
  }

  return (
    <div 
      className="relative w-full max-w-[280px] sm:max-w-sm mx-auto aspect-[16/10] transition-all duration-1000"
      style={{
        transform: `perspective(1000px) rotateY(${rotation}deg) scale(${scale})`,
        WebkitTransform: `perspective(1000px) rotateY(${rotation}deg) scale(${scale})`,
      }}
    >
      <div className="relative w-full h-full bg-gradient-to-b from-[#1a1a1e] to-[#0a0a0b] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute inset-[5px] rounded-lg overflow-hidden bg-[#0a0a0b]">
          {getScreenContent()}
        </div>
        
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1e] border border-white/5" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-[#1a1a1e] rounded-b-sm" />
    </div>
  )
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function NexGenPage() {
  const { phase, activeStep, progress, heroProgress, containerRef } = useScrollProgress()
  const currentSection = sections.find(s => s.id === phase) || sections[0]
  const isHero = phase === 'hero'
  const isCTA = phase === 'cta'
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })

  const companyCards = [
    {
      id: 'ads',
      name: 'NexGen Ads',
      tagline: 'Performance Marketing',
      description: 'Data-driven campaigns across all major platforms optimized for measurable business growth and ROI.',
      color: '#10b981',
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: 'digital',
      name: 'NexGen Digital',
      tagline: 'Software Development',
      description: 'Production-ready web applications built with modern stack technologies and enterprise-grade security.',
      color: '#8b5cf6',
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: 'edu',
      name: 'NexGen Edu',
      tagline: 'Academic Excellence',
      description: 'Expert guidance from subject matter specialists helping students achieve their educational goals.',
      color: '#0ea5e9',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  // Calculate card reveal animation based on heroProgress
  const getCardStyle = (index: number) => {
    const cardStart = index * 0.25 // Each card starts at 0%, 25%, 50% of hero progress
    const cardDuration = 0.25 // Each card takes 25% of hero progress to fully reveal
    
    if (heroProgress < cardStart) {
      return {
        opacity: 0,
        transform: 'translateY(60px) scale(0.8)',
        pointerEvents: 'none' as const,
        boxShadow: 'none',
      }
    }
    
    const cardProgress = Math.min(1, (heroProgress - cardStart) / cardDuration)
    
    return {
      opacity: cardProgress,
      transform: `translateY(${(1 - cardProgress) * 60}px) scale(${0.8 + cardProgress * 0.2})`,
      pointerEvents: cardProgress > 0.5 ? 'auto' as const : 'none' as const,
      boxShadow: cardProgress > 0 ? `0 0 40px ${companyCards[index].color}${Math.floor(cardProgress * 15).toString(16)}` : 'none',
    }
  }

  return (
    <>
      <div ref={containerRef} className="relative bg-[#0a0a0b]" style={{ height: '550dvh' }}>
        <div className={`sticky top-0 flex items-center justify-center overflow-hidden px-4 sm:px-6`} style={{ height: '100dvh', maxHeight: '-webkit-fill-available' }}>
          
          {/* Background effects */}
          {!isHero && !isCTA && (
            <div 
              className="absolute inset-0 transition-all duration-1000"
              style={{ background: currentSection.background }}
            />
          )}

          {(isHero || isCTA) && (
            <div
              className="absolute inset-0 transition-all duration-1000"
              style={{
                background: `
                  radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
                  radial-gradient(circle at 85% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 45%),
                  radial-gradient(circle at 50% 85%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)
                `,
              }}
            />
          )}
          
          {/* Hero Section */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            isHero ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 w-full pb-safe-bottom">
              {/* NXG Group Brand - Fixed for mobile */}
              <div className="mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 sm:w-12 h-px bg-white/20" />
                  <span className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-[0.3em]">
                    NexGen Group of Company
                  </span>
                  <div className="w-8 sm:w-12 h-px bg-white/20" />
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 leading-none tracking-tighter flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                  <span>NXG</span>
                  <span className="text-gray-600 font-light">GROUP</span>
                </h1>
                
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4 px-2">
                  Three specialized divisions, one unified mission delivering 
                  exceptional digital solutions that transform businesses and empower individuals.
                </p>
              </div>

              {/* 3 Company Cards - Reveal on scroll */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
                {companyCards.map((company, index) => {
                  const style = getCardStyle(index)
                  
                  return (
                    <Link
                      key={company.id}
                      to={`/${company.id}`}
                      className="group relative bg-[#0a0a0b] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:border-white/[0.15]"
                      style={{
                        ...style,
                        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {/* Hover glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${company.color}10 0%, transparent 70%)`,
                        }}
                      />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110"
                          style={{ 
                            backgroundColor: `${company.color}15`,
                            color: company.color,
                          }}
                        >
                          {company.icon}
                        </div>
                        
                        {/* Company Name */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors duration-300">
                          {company.name}
                        </h3>
                        
                        {/* Tagline */}
                        <p className="text-xs sm:text-sm font-medium mb-2 transition-colors duration-300"
                          style={{ color: company.color }}
                        >
                          {company.tagline}
                        </p>
                        
                        {/* Description */}
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                          {company.description}
                        </p>
                        
                        {/* Arrow indicator */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-300 opacity-50 group-hover:opacity-100"
                          style={{ color: company.color }}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Progress indicator dots */}
              <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
                {companyCards.map((company, index) => {
                  const cardStart = index * 0.25
                  const cardEnd = cardStart + 0.25
                  const isRevealed = heroProgress > cardStart
                  const isFullyRevealed = heroProgress > cardEnd
                  
                  return (
                    <div
                      key={index}
                      className="transition-all duration-500 rounded-full"
                      style={{
                        width: isRevealed ? (isFullyRevealed ? '24px' : '16px') : '6px',
                        height: '6px',
                        backgroundColor: isRevealed ? company.color : '#333',
                        opacity: isRevealed ? 1 : 0.4,
                      }}
                    />
                  )
                })}
              </div>
            </div>

            {/* Scroll Indicator - Animated arrow bouncing down */}
            <div 
              className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700"
              style={{
                opacity: heroProgress > 0.8 ? 0 : 1,
                transform: `translateY(${heroProgress > 0.8 ? 20 : 0}px)`,
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
              
              {/* Animated scroll indicator */}
              <div className="relative w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 animate-scroll-bounce" />
              </div>
              
              {/* Animated chevron arrows */}
              <div className="flex flex-col items-center gap-0">
                <ChevronDown className="w-4 h-4 text-gray-600 animate-chevron-1" />
                <ChevronDown className="w-4 h-4 text-gray-600 -mt-2 animate-chevron-2" />
                <ChevronDown className="w-4 h-4 text-gray-600 -mt-2 animate-chevron-3" />
              </div>
            </div>
          </div>

          {/* Content Sections - Responsive Layout */}
          <div id="content" className={`absolute inset-0 flex items-center transition-all duration-1000 ${
            !isHero && !isCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start px-4 sm:px-6 pb-safe-bottom">
              
              {/* Left Column - Brand Info */}
              <div className="lg:col-span-4 flex flex-col justify-center order-1 lg:order-1">
                {/* Logo */}
                <div className="relative w-full mb-3 sm:mb-4" style={{ height: 'clamp(100px, 15vw, 160px)' }}>
                  <img
                    src={currentSection.logo}
                    alt={currentSection.name}
                    className="absolute inset-0 w-full h-full object-cover object-left transition-all duration-700"
                    style={{
                      filter: activeStep >= 0 ? 'blur(0px)' : 'blur(4px)',
                      opacity: activeStep >= 0 ? 1 : 0.5,
                      WebkitFilter: activeStep >= 0 ? 'blur(0px)' : 'blur(4px)',
                    }}
                  />
                </div>

                <h3 className={`text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 transition-all duration-500 ${currentSection.textColor}`}>
                  {currentSection.tagline}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2 mb-4 sm:mb-6 transition-all duration-500 max-w-md">
                  {currentSection.description}
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-8" ref={ref}>
                  {currentSection.metrics.map((m, i) => (
                    <CountUpMetric 
                      key={i} 
                      value={m.value} 
                      label={m.label} 
                      target={m.target}
                      inView={inView} 
                    />
                  ))}
                </div>

                <Link
                  to={currentSection.linkTo}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 w-fit shadow-lg group"
                  style={{ 
                    backgroundColor: currentSection.color,
                    boxShadow: `0 4px 20px ${currentSection.color}40`,
                  }}
                >
                  Explore {currentSection.name}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Center Column - MacBook */}
              <div className="lg:col-span-4 flex items-center justify-center order-2 lg:order-2 mb-4 sm:mb-0">
                <MacBookScreen section={currentSection} activeStep={activeStep} />
              </div>

              {/* Right Column - Steps/Timeline */}
              <div className="lg:col-span-4 flex flex-col justify-center order-3 lg:order-3">
                <div className="flex items-center justify-between mb-1 sm:mb-2 px-1">
                  <span className="text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                    Process Timeline
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-gray-600 font-mono">
                    {activeStep >= 0 ? `${activeStep + 1}/${currentSection.steps.length}` : '—'}
                  </span>
                </div>

                {/* Desktop: Animated steps */}
                <div className="hidden sm:flex sm:flex-col space-y-2.5">
                  {currentSection.steps.map((step, i) => (
                    <StepItem
                      key={i}
                      step={step}
                      index={i}
                      activeStep={activeStep}
                      color={currentSection.color}
                    />
                  ))}
                </div>
                
                {/* Mobile: Compact list showing all steps */}
                <div className="flex sm:hidden flex-col space-y-1.5">
                  {currentSection.steps.map((step, i) => (
                    <StepItem
                      key={i}
                      step={step}
                      index={i}
                      activeStep={activeStep}
                      color={currentSection.color}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            isCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 w-full pb-safe-bottom">
              <div className="mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 sm:w-12 h-px bg-white/20" />
                  <span className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-[0.3em]">
                    Let's Collaborate
                  </span>
                  <div className="w-8 sm:w-12 h-px bg-white/20" />
                </div>
                
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-tighter">
                  Ready to build
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                    something great?
                  </span>
                </h2>
                
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
                  Tell us about your project and we'll get back to you within 24 hours 
                  with a tailored strategy for your success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
                {companyCards.map((company) => (
                  <Link
                    key={company.id}
                    to={`/${company.id}`}
                    className="group relative bg-[#0a0a0b] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:border-white/[0.15] hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      boxShadow: `0 0 40px ${company.color}05`,
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${company.color}10 0%, transparent 70%)`,
                      }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto transition-all duration-500 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${company.color}15`,
                          color: company.color,
                        }}
                      >
                        {company.icon}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {company.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-medium mb-4"
                        style={{ color: company.color }}
                      >
                        {company.tagline}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: `${company.color}20`,
                          color: company.color,
                        }}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

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

        /* Bouncing dot animation */
        @keyframes scroll-bounce {
          0%, 100% { 
            transform: translateY(0); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(20px); 
            opacity: 1; 
          }
        }

        @-webkit-keyframes scroll-bounce {
          0%, 100% { 
            -webkit-transform: translateY(0); 
            opacity: 0.4; 
          }
          50% { 
            -webkit-transform: translateY(20px); 
            opacity: 1; 
          }
        }

        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
          -webkit-animation: scroll-bounce 2s ease-in-out infinite;
        }

        /* Cascading chevron animations */
        @keyframes chevron-fade {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.6; transform: translateY(4px); }
        }

        @-webkit-keyframes chevron-fade {
          0%, 100% { opacity: 0.2; -webkit-transform: translateY(0); }
          50% { opacity: 0.6; -webkit-transform: translateY(4px); }
        }

        .animate-chevron-1 {
          animation: chevron-fade 2s ease-in-out infinite;
          -webkit-animation: chevron-fade 2s ease-in-out infinite;
        }
        .animate-chevron-2 {
          animation: chevron-fade 2s ease-in-out infinite 0.2s;
          -webkit-animation: chevron-fade 2s ease-in-out infinite 0.2s;
        }
        .animate-chevron-3 {
          animation: chevron-fade 2s ease-in-out infinite 0.4s;
          -webkit-animation: chevron-fade 2s ease-in-out infinite 0.4s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @-webkit-keyframes pulse {
          0%, 100% { opacity: 0.5; -webkit-transform: scale(1); }
          50% { opacity: 0.8; -webkit-transform: scale(1.05); }
        }

        @supports (-webkit-touch-callout: none) {
          .sticky {
            position: -webkit-sticky;
            position: sticky;
          }
          
          [style*="height: 100dvh"] {
            height: -webkit-fill-available;
          }
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  )
}
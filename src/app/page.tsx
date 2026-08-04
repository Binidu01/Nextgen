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
// SECTION DATA
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
      { value: '450+', label: 'Assignments Completed', target: 450 },
      { value: '98.5%', label: 'Satisfaction Rate', target: 98.5 },
      { value: '22+', label: 'Expert Tutors', target: 22 },
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
// HOOK: SCROLL-BASED LOOP NAVIGATION
// ---------------------------------------------------------------------------
function useScrollNavigation() {
  const [phase, setPhase] = useState<
    'hero' | 'card1' | 'section1' | 'collapse1' | 'card2' | 'section2' | 'collapse2' | 'card3' | 'section3'
  >('hero')
  const [activeStep, setActiveStep] = useState(-1)
  const [progress, setProgress] = useState(0)
  const [heroLoop, setHeroLoop] = useState(0)
  const [heroProgress, setHeroProgress] = useState(0)
  const [cardDisappearProgress, setCardDisappearProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stepsPerSection = sections[0].steps.length

    const B = {
      hero0End: 0.08,
      card1End: 0.16,
      section1End: 0.36,
      collapse1End: 0.42,
      hero1End: 0.50,
      card2End: 0.58,
      section2End: 0.78,
      collapse2End: 0.84,
      hero2End: 0.90,
      card3End: 0.94,
    }

    const reverseStep = (localProgress: number) => {
      const stepsFromEnd = Math.floor(localProgress * (stepsPerSection + 1))
      return Math.max(-1, stepsPerSection - 1 - stepsFromEnd)
    }

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollOffset = -rect.top
      const containerHeight = rect.height
      const windowHeight = window.innerHeight
      const totalScroll = containerHeight - windowHeight
      const p = Math.max(0, Math.min(1, scrollOffset / totalScroll))
      setProgress(p)

      // Calculate card disappear progress (0 to 1) within the card phase
      if (p >= B.hero0End && p < B.card1End) {
        const cardProgress = (p - B.hero0End) / (B.card1End - B.hero0End)
        setCardDisappearProgress(cardProgress)
      } else if (p >= B.collapse1End && p < B.hero1End) {
        setCardDisappearProgress(0)
      } else if (p >= B.hero1End && p < B.card2End) {
        const cardProgress = (p - B.hero1End) / (B.card2End - B.hero1End)
        setCardDisappearProgress(cardProgress)
      } else if (p >= B.collapse2End && p < B.hero2End) {
        setCardDisappearProgress(0)
      } else if (p >= B.hero2End && p < B.card3End) {
        const cardProgress = (p - B.hero2End) / (B.card3End - B.hero2End)
        setCardDisappearProgress(cardProgress)
      } else {
        setCardDisappearProgress(0)
      }

      if (p < B.hero0End) {
        setPhase('hero')
        setActiveStep(-1)
        setHeroLoop(0)
        setHeroProgress(p / B.hero0End)
      } else if (p < B.card1End) {
        setPhase('card1')
        setActiveStep(-1)
      } else if (p < B.section1End) {
        setPhase('section1')
        const stepProgress = (p - B.card1End) / (B.section1End - B.card1End)
        setActiveStep(Math.min(Math.floor(stepProgress * stepsPerSection), stepsPerSection - 1))
      } else if (p < B.collapse1End) {
        setPhase('collapse1')
        const collapseProgress = (p - B.section1End) / (B.collapse1End - B.section1End)
        setActiveStep(reverseStep(collapseProgress))
      } else if (p < B.hero1End) {
        setPhase('hero')
        setActiveStep(-1)
        setHeroLoop(1)
        setHeroProgress((p - B.collapse1End) / (B.hero1End - B.collapse1End))
      } else if (p < B.card2End) {
        setPhase('card2')
        setActiveStep(-1)
      } else if (p < B.section2End) {
        setPhase('section2')
        const stepProgress = (p - B.card2End) / (B.section2End - B.card2End)
        setActiveStep(Math.min(Math.floor(stepProgress * stepsPerSection), stepsPerSection - 1))
      } else if (p < B.collapse2End) {
        setPhase('collapse2')
        const collapseProgress = (p - B.section2End) / (B.collapse2End - B.section2End)
        setActiveStep(reverseStep(collapseProgress))
      } else if (p < B.hero2End) {
        setPhase('hero')
        setActiveStep(-1)
        setHeroLoop(2)
        setHeroProgress((p - B.collapse2End) / (B.hero2End - B.collapse2End))
      } else if (p < B.card3End) {
        setPhase('card3')
        setActiveStep(-1)
      } else {
        setPhase('section3')
        const stepProgress = (p - B.card3End) / (1 - B.card3End)
        setActiveStep(Math.min(Math.floor(stepProgress * stepsPerSection), stepsPerSection - 1))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { phase, activeStep, progress, heroLoop, heroProgress, cardDisappearProgress, containerRef }
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
// STEP COMPONENT
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
      <div
        className={`hidden sm:flex group relative items-start gap-3 p-4 rounded-xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        } ${
          isActive 
            ? 'bg-white/5 border-2' 
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

  useEffect(() => {
    if (activeStep >= 0) {
      setRotation(activeStep * 1.5)
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
        transform: `perspective(1000px) rotateY(${rotation}deg)`,
        WebkitTransform: `perspective(1000px) rotateY(${rotation}deg)`,
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
  const { phase, activeStep, progress, heroLoop, heroProgress, cardDisappearProgress, containerRef } = useScrollNavigation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })

  const companyCards = [
    {
      id: 'ads',
      name: 'NexGen Ads',
      tagline: 'Performance Marketing That Drives Revenue',
      description: 'Data-driven campaigns across all major platforms optimized for measurable business growth and ROI.',
      color: '#10b981',
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      section: sections[0],
    },
    {
      id: 'digital',
      name: 'NexGen Digital',
      tagline: 'Enterprise-Grade Software Development',
      description: 'Production-ready web applications built with modern stack technologies and enterprise-grade security.',
      color: '#8b5cf6',
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      section: sections[1],
    },
    {
      id: 'edu',
      name: 'NexGen Edu',
      tagline: 'Academic Support That Gets Results',
      description: 'Expert academic guidance from subject matter specialists helping students achieve their educational goals.',
      color: '#0ea5e9',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      section: sections[2],
    },
  ]

  const getCurrentSection = () => {
    if (phase === 'section1' || phase === 'card1' || phase === 'collapse1') return sections[0]
    if (phase === 'section2' || phase === 'card2' || phase === 'collapse2') return sections[1]
    if (phase === 'section3' || phase === 'card3') return sections[2]
    return sections[0]
  }

  const currentSection = getCurrentSection()
  const isShowingSection =
    phase === 'section1' ||
    phase === 'section2' ||
    phase === 'section3' ||
    phase === 'collapse1' ||
    phase === 'collapse2'
  const isCollapsing = phase === 'collapse1' || phase === 'collapse2'
  const collapseOpacity = isCollapsing ? Math.max(0, (activeStep + 1) / currentSection.steps.length) : 1
  const isShowingCard = phase === 'card1' || phase === 'card2' || phase === 'card3'
  const isHero = phase === 'hero'

  const getActiveCardIndex = () => {
    if (phase === 'card1' || phase === 'section1' || phase === 'collapse1') return 0
    if (phase === 'card2' || phase === 'section2' || phase === 'collapse2') return 1
    if (phase === 'card3' || phase === 'section3') return 2
    return -1
  }

  const activeCardIndex = getActiveCardIndex()

  // Calculate disappear effect values
  const disappearProgress = isShowingCard ? cardDisappearProgress : 0
  const easedDisappear = 1 - Math.pow(1 - disappearProgress, 2)
  const blurAmount = easedDisappear * 4
  const opacityAmount = 1 - easedDisappear * 0.4
  const translateAmount = easedDisappear * 20

  const getCardStyle = (index: number) => {
    if (isHero) {
      const clampedProgress = Math.min(1, Math.max(0, heroProgress))

      if (index === heroLoop) {
        const eased = 1 - Math.pow(1 - clampedProgress, 3)
        return {
          opacity: eased,
          transform: `translateY(${(1 - eased) * 40}px)`,
          pointerEvents: eased > 0.5 ? 'auto' as const : 'none' as const,
          borderColor: eased > 0.5 ? companyCards[index].color : 'transparent',
          boxShadow: 'none',
        }
      }

      if (index === heroLoop - 1) {
        const easedOut = 1 - Math.pow(1 - clampedProgress, 3)
        const remaining = 1 - easedOut
        return {
          opacity: remaining,
          transform: `translateY(${(1 - remaining) * -30}px)`,
          pointerEvents: 'none' as const,
          borderColor: remaining > 0.5 ? companyCards[index].color : 'transparent',
          boxShadow: 'none',
        }
      }

      return {
        opacity: 0,
        transform: 'translateY(40px)',
        pointerEvents: 'none' as const,
      }
    }

    if (isShowingCard) {
      const isActive = index === activeCardIndex
      
      if (isActive) {
        const translateY = easedDisappear * 80
        const opacity = 1 - easedDisappear * 0.8
        const scale = 1 - easedDisappear * 0.08
        
        return {
          opacity: opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          pointerEvents: opacity > 0.3 ? 'auto' as const : 'none' as const,
          borderColor: isActive ? companyCards[index].color : 'transparent',
          boxShadow: 'none',
        }
      }
      
      return {
        opacity: 0,
        transform: 'translateY(40px)',
        pointerEvents: 'none' as const,
      }
    }

    if (isShowingSection) {
      return {
        opacity: 0,
        transform: 'translateY(-100px)',
        pointerEvents: 'none' as const,
      }
    }

    return {
      opacity: 0,
      transform: 'translateY(40px)',
      pointerEvents: 'none' as const,
    }
  }

  return (
    <>
      <div ref={containerRef} className="relative bg-[#0a0a0b]" style={{ height: '1500dvh' }}>
        <div className={`sticky top-0 flex items-center justify-center overflow-hidden px-4 sm:px-6`} style={{ height: '100dvh', maxHeight: '-webkit-fill-available' }}>
          
          {isShowingSection && (
            <div 
              className="absolute inset-0 transition-all duration-1000"
              style={{ background: currentSection.background }}
            />
          )}

          {!isShowingSection && (
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
          
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">
            
            {/* Hero Section - Everything blurs together */}
            {isHero && (
              <div 
                className="text-center animate-fadeIn w-full transition-all duration-700 flex flex-col items-center justify-center"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  opacity: opacityAmount,
                  transform: `translateY(${translateAmount}px)`,
                  minHeight: '100%',
                }}
              >
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

                {/* Single Card */}
                <div className="max-w-sm mx-auto mt-8 sm:mt-12 transition-all duration-700 min-h-[400px] w-full flex items-center justify-center">
                  {heroLoop >= 0 && heroLoop < companyCards.length && (() => {
                    const company = companyCards[heroLoop]
                    const style = getCardStyle(heroLoop)

                    return (
                      <Link
                        key={company.id}
                        to={`/${company.id}`}
                        className="group relative bg-[#0a0a0b] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:border-white/[0.15] w-full overflow-hidden"
                        style={style}
                      >
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at center, ${company.color}10 0%, transparent 70%)`,
                          }}
                        />
                        
                        <div className="relative z-10">
                          <div 
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110"
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
                          
                          <p className="text-xs sm:text-sm font-medium mb-2"
                            style={{ color: company.color }}
                          >
                            {company.tagline}
                          </p>
                          
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                            {company.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-300 opacity-50 group-hover:opacity-100"
                            style={{ color: company.color }}
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    )
                  })()}
                </div>

                {/* Progress dots - these also blur */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                  {companyCards.map((company, index) => {
                    const isRevealed =
                      index < heroLoop || (index === heroLoop && heroProgress > 0.1)
                    
                    return (
                      <div
                        key={index}
                        className="transition-all duration-500 rounded-full"
                        style={{
                          width: isRevealed ? '20px' : '6px',
                          height: '6px',
                          backgroundColor: isRevealed ? company.color : '#333',
                          opacity: isRevealed ? 1 : 0.3,
                        }}
                      />
                    )
                  })}
                </div>

                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-[0.2em]">
                      Scroll to explore
                    </span>
                    
                    <div className="relative w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 animate-scroll-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Card Display (non-hero) - Everything blurs together */}
            {isShowingCard && !isHero && (
              <div
                className="transition-all duration-700 w-full flex flex-col items-center justify-center"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  opacity: opacityAmount,
                  transform: `translateY(${translateAmount}px)`,
                  minHeight: '100%',
                }}
              >
                <div className="text-center mb-6 sm:mb-10">
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
                </div>

                <div className="max-w-sm mx-auto transition-all duration-700 min-h-[400px] w-full flex items-center justify-center">
                  {activeCardIndex >= 0 && (() => {
                    const company = companyCards[activeCardIndex]
                    const style = getCardStyle(activeCardIndex)

                    return (
                      <Link
                        key={company.id}
                        to={`/${company.id}`}
                        className="group relative bg-[#0a0a0b] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:border-white/[0.15] w-full overflow-hidden"
                        style={style}
                      >
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at center, ${company.color}10 0%, transparent 70%)`,
                          }}
                        />
                        
                        <div className="relative z-10">
                          <div 
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110"
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
                          
                          <p className="text-xs sm:text-sm font-medium mb-2"
                            style={{ color: company.color }}
                          >
                            {company.tagline}
                          </p>
                          
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                            {company.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-300 opacity-50 group-hover:opacity-100"
                            style={{ color: company.color }}
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    )
                  })()}
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                  {companyCards.map((company, index) => {
                    const isActive = index === activeCardIndex
                    
                    return (
                      <div
                        key={index}
                        className="transition-all duration-500 rounded-full"
                        style={{
                          width: isActive ? '24px' : '6px',
                          height: '6px',
                          backgroundColor: isActive ? company.color : '#333',
                          opacity: isActive ? 1 : 0.3,
                        }}
                      />
                    )
                  })}
                </div>

                <div className="flex justify-center mt-4 sm:mt-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-[0.2em]">
                      Scroll for details
                    </span>
                    
                    <div className="relative w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 animate-scroll-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section Detail View - Full screen with steps from 1 to 5 */}
            {isShowingSection && (
              <div
                className="w-full animate-fadeIn transition-opacity duration-300"
                style={{ opacity: collapseOpacity }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center min-h-[70vh]">
                  
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="relative w-full mb-3 sm:mb-4" style={{ height: 'clamp(80px, 12vw, 130px)' }}>
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

                  <div className="lg:col-span-4 flex items-center justify-center mb-4 sm:mb-0">
                    <MacBookScreen section={currentSection} activeStep={activeStep} />
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1 sm:mb-2 px-1">
                      <span className="text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                        Process Timeline
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-gray-600 font-mono">
                        {activeStep >= 0 ? `${activeStep + 1}/${currentSection.steps.length}` : '—'}
                      </span>
                    </div>

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

                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-[0.2em]">
                      {activeStep === currentSection.steps.length - 1 ? 'Section complete — scrolling up...' : 'Keep scrolling...'}
                    </span>
                    
                    <div className="relative w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 animate-scroll-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #0a0a0b;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding-bottom: env(safe-area-inset-bottom);
        }

        /* Coloured scrollbar — Firefox */
        html {
          scrollbar-width: thin;
          scrollbar-color: #10b981 #0a0a0b;
        }

        /* Coloured scrollbar — WebKit (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0b;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #10b981 0%, #8b5cf6 50%, #0ea5e9 100%);
          border-radius: 999px;
          border: 2px solid #0a0a0b;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #34d399 0%, #a78bfa 50%, #38bdf8 100%);
        }

        .pb-safe-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }

        @keyframes scroll-bounce {
          0%, 100% { 
            transform: translateY(0); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(12px); 
            opacity: 1; 
          }
        }

        @-webkit-keyframes scroll-bounce {
          0%, 100% { 
            -webkit-transform: translateY(0); 
            opacity: 0.4; 
          }
          50% { 
            -webkit-transform: translateY(12px); 
            opacity: 1; 
          }
        }

        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
          -webkit-animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
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
      `}</style>
    </>
  )
}
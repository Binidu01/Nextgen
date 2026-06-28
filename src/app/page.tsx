'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

/* -----------------------------------------------------------
   1. LOAD GOOGLE MODEL-VIEWER
   ----------------------------------------------------------- */
if (typeof window !== 'undefined') {
  const scriptId = 'model-viewer-script'
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js'
    script.type = 'module'
    document.head.appendChild(script)
  }
}

/* -----------------------------------------------------------
   2. DOM-TRACKED FLOATING MACBOOK
   ----------------------------------------------------------- */
const FloatingMacBook = ({ isMobile }: { isMobile: boolean }) => {
  const modelRef = useRef<HTMLElement & { updateComplete?: Promise<void> }>(null)
  const [coords, setCoords] = useState({ x: -1000, y: -1000, scale: 1 })

  const updatePosition = useCallback(() => {
    if (isMobile) return
    const docks = Array.from(document.querySelectorAll('.laptop-dock'))
    if (docks.length === 0) return

    const viewportMidY = window.innerHeight / 2
    const dockStates = docks.map((dock) => {
      const rect = dock.getBoundingClientRect()
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width }
    })

    if (dockStates[0].y >= viewportMidY) {
      setCoords({ x: dockStates[0].x, y: viewportMidY, scale: dockStates[0].width })
    } else if (dockStates[dockStates.length - 1].y <= viewportMidY) {
      setCoords({
        x: dockStates[dockStates.length - 1].x,
        y: viewportMidY,
        scale: dockStates[dockStates.length - 1].width,
      })
    } else {
      for (let i = 0; i < dockStates.length - 1; i++) {
        const current = dockStates[i],
          next = dockStates[i + 1]
        if (current.y <= viewportMidY && next.y >= viewportMidY) {
          const progress = (viewportMidY - current.y) / (next.y - current.y)
          const ease = -(Math.cos(Math.PI * progress) - 1) / 2
          setCoords({
            x: current.x + (next.x - current.x) * ease,
            y: viewportMidY,
            scale: current.width + (next.width - current.width) * ease,
          })
          break
        }
      }
    }
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)
    setTimeout(updatePosition, 100)
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [updatePosition])

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
      style={
        isMobile
          ? {
              width: '140px',
              height: '140px',
              bottom: '20px',
              right: '20px',
              top: 'auto',
              left: 'auto',
              opacity: 0.6,
            }
          : {
              width: `${coords.scale}px`,
              height: `${coords.scale}px`,
              top: `${coords.y}px`,
              left: `${coords.x}px`,
              transform: 'translate(-50%, -50%)',
              opacity: coords.x === -1000 ? 0 : 1,
            }
      }
    >
      <model-viewer
        ref={modelRef}
        src="/macbook.glb"
        alt="MacBook"
        camera-controls
        disable-zoom
        disable-pan
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          background: 'transparent',
        }}
      />
    </div>
  )
}

/* -----------------------------------------------------------
   3. SECTION COMPONENT
   ----------------------------------------------------------- */
function Section({
  id,
  logo,
  title,
  subtitle,
  description,
  items,
  itemsTitle,
  color,
  align = 'left',
  linkTo,
}: any) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [logoError, setLogoError] = useState(false)
  const colorMap: any = {
    green: 'text-green-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
  }

  const buttonColorMap: any = {
    green: 'border-green-500 text-green-400 hover:bg-green-500/20',
    purple: 'border-purple-500 text-purple-400 hover:bg-purple-500/20',
    blue: 'border-blue-500 text-blue-400 hover:bg-blue-500/20',
  }

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center bg-[#0a0a0a] py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className={`${align === 'left' ? 'order-1' : 'order-2'} max-w-xl`}>
            <div className="flex flex-col items-start w-full">
              {!logoError ? (
                <div className="relative w-full" style={{ height: 'clamp(120px, 15vw, 200px)' }}>
                  <img
                    src={logo}
                    alt={id}
                    className="absolute inset-0 w-full h-full object-cover object-left"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <span className="text-5xl font-black text-white uppercase tracking-tight mb-4">
                  {id}
                </span>
              )}

              <div className="mt-4">
                <h3 className={`text-xl md:text-2xl font-bold ${colorMap[color]}`}>{title}</h3>
                <p className={`text-sm ${colorMap[color]} mt-1 opacity-80`}>{subtitle}</p>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4">
                {description}
              </p>
            </div>

            <h4
              className={`text-xs font-semibold ${colorMap[color]} uppercase tracking-wider mt-8 mb-4`}
            >
              {itemsTitle}
            </h4>
            <ul className="space-y-3 text-base text-gray-300">
              {items.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 ${colorMap[color].replace('text', 'bg')} rounded-full shrink-0`}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to={linkTo}
              className={`inline-flex items-center gap-2 mt-8 px-6 py-3 border rounded-lg transition-all duration-300 ${buttonColorMap[color]}`}
            >
              See Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className={`${align === 'left' ? 'order-2' : 'order-1'} flex items-center justify-center w-full`}
          >
            <div className="laptop-dock w-full max-w-110 aspect-square" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------
   4. MAIN PAGE
   ----------------------------------------------------------- */
export default function NextGenPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', check)
    check()
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      <FloatingMacBook isMobile={isMobile} />
      <main className="relative z-10">
        <Section
          id="ads"
          logo="/nextgenads.png"
          title="NextGen Ads"
          subtitle="Social media advertising that delivers results"
          description="Transform your brand's digital presence with our comprehensive social media advertising solutions. We combine data-driven strategies with creative excellence to deliver campaigns that capture attention and drive meaningful engagement. From pixel-perfect ad creative to advanced audience targeting, we handle every aspect of your advertising ecosystem with precision and innovation."
          items={[
            'Meta (Facebook & Instagram) Advertising with advanced pixel integration',
            'TikTok & Short-form Video Content Strategy and Production',
            'Performance Marketing & Conversion Rate Optimization',
            'Creative Design & A/B Testing Frameworks',
            'Real-time Analytics & ROI Tracking Dashboards',
          ]}
          itemsTitle="Advertising Services"
          color="green"
          linkTo="/ads"
        />
        <Section
          id="digital"
          logo="/nextgendigital.png"
          title="NextGen Digital"
          subtitle="Modern web development for modern businesses"
          description="Build tomorrow's digital experiences today with our expert web development team. We specialize in creating high-performance, scalable applications using cutting-edge technologies. Whether you need a stunning landing page, a complex enterprise solution, or a full-stack web application, our expertise ensures your digital product exceeds expectations and drives measurable business growth."
          items={[
            'Custom React, Next.js & Bini.js Applications with TypeScript',
            'Headless CMS & E-commerce Solutions (Shopify, Sanity, Medusa)',
            'Tailwind CSS & Modern UI/UX Design Systems',
            'Full-Stack Development with Node.js, Python & PostgreSQL',
            'Cloud Infrastructure & DevOps with AWS, Vercel & Docker',
          ]}
          itemsTitle="Development Services"
          color="purple"
          align="right"
          linkTo="/digital"
        />
        <Section
          id="edu"
          logo="/nextgenedu.png"
          title="NextGen Edu"
          subtitle="Academic excellence through expert support"
          description="Excel in your academic journey with our comprehensive educational support services. Our team of experienced academic professionals provides personalized guidance, research assistance, and assignment support across multiple disciplines. We're committed to helping students achieve academic excellence while developing critical thinking, research skills, and subject matter expertise that lasts a lifetime."
          items={[
            'HND & BTEC Assignment Support with In-depth Research',
            'Diploma & Certification Program Assistance and Guidance',
            'Academic Writing & Dissertation Development Support',
            'Subject-specific Tutoring & Mentorship Programs',
            'Plagiarism-free Content with Comprehensive Quality Assurance',
          ]}
          itemsTitle="Educational Programs"
          color="blue"
          linkTo="/edu"
        />
      </main>
      <style>{`
        body {
          background: #000;
          overflow-x: hidden;
        }
        model-viewer {
          --poster-color: transparent;
        }
      `}</style>
    </>
  )
}

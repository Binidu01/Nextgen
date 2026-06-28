import { useState } from 'react'
import { Link } from 'react-router-dom'

/* -----------------------------------------------------------
   EDU PAGE COMPONENT
   ----------------------------------------------------------- */
export default function EduPage() {
  const [logoError, setLogoError] = useState(false)

  const services = [
    {
      title: 'HND & BTEC Support',
      description:
        'Comprehensive assignment assistance for HND and BTEC programs with in-depth research, proper referencing, and high-quality submissions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: 'Diploma Programs',
      description:
        'Expert guidance for diploma and certification programs across various disciplines with personalized mentorship and academic support.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: 'Academic Writing',
      description:
        'Professional dissertation guidance, research paper support, and academic writing assistance with proper formatting and citations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      title: 'Tutoring & Mentorship',
      description:
        'One-on-one tutoring sessions and mentorship programs across multiple subjects to help students excel in their academic journey.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

  const subjects = [
    'Business Management',
    'Marketing',
    'Accounting & Finance',
    'Information Technology',
    'Computer Science',
    'Engineering',
    'Healthcare Management',
    'Hospitality Management',
    'Law',
    'Psychology',
    'Sociology',
    'English Literature',
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Submit Requirements',
      description:
        'Share your assignment details, guidelines, and deadlines with our team for review.',
    },
    {
      step: '02',
      title: 'Expert Assignment',
      description:
        'We match your work with a subject matter expert who understands your curriculum.',
    },
    {
      step: '03',
      title: 'Research & Writing',
      description:
        'Our experts conduct thorough research and create original, high-quality content.',
    },
    {
      step: '04',
      title: 'Quality Check & Delivery',
      description:
        'Rigorous quality assurance, plagiarism check, and timely delivery of your work.',
    },
  ]

  const guarantees = [
    {
      title: 'Plagiarism-Free',
      description: 'All work is original and checked with advanced plagiarism detection tools',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'On-Time Delivery',
      description: 'We guarantee timely submission of all assignments before your deadline',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Expert Writers',
      description: 'Qualified professionals with advanced degrees and subject matter expertise',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Confidential Service',
      description:
        'Complete privacy and confidentiality guaranteed for all academic support services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
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
                  src="/nextgenedu.png"
                  alt="NextGen Edu"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <h1 className="text-5xl font-black text-white uppercase tracking-tight mb-4 text-center">
                NextGen Edu
              </h1>
            )}
          </div>

          <p className="text-lg md:text-xl text-blue-400 mt-4 opacity-80 text-center">
            Academic excellence through expert support
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-6 text-justify w-full max-w-7xl">
            We are dedicated to helping students achieve academic success through comprehensive
            educational support services. Our team of experienced academic professionals provides
            personalized guidance, research assistance, and assignment support across multiple
            disciplines. With a focus on quality, originality, and timely delivery, we empower
            students to excel in their studies while developing critical thinking skills and subject
            matter expertise that lasts a lifetime.
          </p>
        </div>

        {/* Guarantees Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Why <span className="text-blue-400">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We are committed to providing the highest quality academic support services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {guarantee.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive academic support tailored to your educational needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
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
            Subjects We <span className="text-blue-400">Cover</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Expert support across a wide range of academic disciplines
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            How It <span className="text-blue-400">Works</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Simple and straightforward process to get the academic support you need
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 h-full">
                  <div className="text-4xl font-bold text-blue-500/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        body {
          background: #000;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  )
}

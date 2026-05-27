import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
import CinematicLoader from './components/Loader/CinematicLoader'
import HeroReveal from './components/Hero/HeroReveal'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const users = [
  {
    img: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Always one booking away from the perfect shot. Freelance shooters who never miss the moment that matters.',
    tag: 'FREELANCER'
  },
  {
    img: 'https://images.unsplash.com/photo-1618847542523-de72df132f51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Precision is not a habit — it\'s a religion. Professionals who know exactly what they need before they walk on set.',
    tag: 'PROFESSIONAL'
  },
  {
    img: 'https://images.unsplash.com/photo-1643651577367-6a4f572aadfa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Home is wherever the light falls golden. Wanderers who carry their whole world in one lightweight mirrorless kit.',
    tag: 'NOMADIC'
  },
  {
    img: 'https://images.unsplash.com/photo-1652090504210-438ea92793a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    intro: 'Every great photographer once held a phone. The first real upgrade — chosen carefully, felt immediately.',
    tag: 'DREAMER'
  },
  {
    img: 'https://images.unsplash.com/photo-1632255977243-2c666c2f26c4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'One moment stills. The next — pure motion. Hybrid creators who refuse to choose between two worlds.',
    tag: 'HYBRID'
  },
  {
    img: 'https://images.unsplash.com/photo-1576262674899-d260b15b733c?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Not for likes. For the love of light. Students and hobbyists building their eye on trusted pre-owned gear.',
    tag: 'PURIST'
  }
]
  return (
    <div>
      <AnimatePresence mode='wait'>
        {!introComplete ? (
          <CinematicLoader key='loader' theme={theme} onComplete={() => setIntroComplete(true)} />
        ) : (
          <motion.div
            key='hero'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroReveal
              theme={theme}
              cameraSrc={'/camera-hero.png'}
              introComplete={introComplete}
              onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Section1 users={users} theme={theme} introComplete={introComplete} onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')} />
      <Section2 theme={theme} />
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
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
        intro: 'Freelance shooters moving fast between sets, events, and late-night bookings with backup bodies close at hand.',
        tag: 'Prepared'
      },

      {
        img: 'https://images.unsplash.com/photo-1618847542523-de72df132f51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Portrait specialists upgrading into cleaner, faster systems with the kind of quiet confidence that reads instantly on set.',
        tag: 'Satisfied' 
      },

      {
        img: 'https://images.unsplash.com/photo-1643651577367-6a4f572aadfa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Travel-led creators choosing lighter mirrorless kits that stay fluid through airports, streets, and changing light.',
        tag: 'Nomadic'
      },

      {
        img: 'https://images.unsplash.com/photo-1652090504210-438ea92793a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        intro: 'Beginners stepping beyond kit lenses with guided bundles that make the first serious upgrade feel measured and calm.',
        tag: 'Emerging'
      },

      {
        img: 'https://images.unsplash.com/photo-1632255977243-2c666c2f26c4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Hybrid creators balancing stills and motion with high frame-rate bodies, audio, and filters in one frame-ready kit.',
        tag: 'Versatile'
      },

      {
        img: 'https://images.unsplash.com/photo-1576262674899-d260b15b733c?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Students and hobbyists choosing trusted pre-owned gear that keeps the learning curve accessible without losing quality.',
        tag: 'Hobbyists'
      }
    ]
  return (
    <div>
      {!introComplete && (
        <CinematicLoader theme={theme} onComplete={() => setIntroComplete(true)} />
      )}

      {introComplete && (
        <HeroReveal
          theme={theme}
          cameraSrc={'/camera-hero.png'}
          introComplete={introComplete}
          onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        />
      )}

      <Section1 users={users} theme={theme} introComplete={introComplete} onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')} />
      <Section2 theme={theme} />
    </div>
  )
}

export default App

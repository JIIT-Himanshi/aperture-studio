import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const easing = [0.16, 1, 0.3, 1]

const quoteLines = ['Photography is the story', 'I fail to put into words.']

const cardItems = [
  {
    value: 73,
    suffix: '%',
    decimals: 0,
    label: 'Photographers upgrade within 18 months',
  },
  {
    value: 3.2,
    suffix: '×',
    decimals: 1,
    label: 'Average lenses owned before finding their style',
  },
  {
    value: 89,
    suffix: '%',
    decimals: 0,
    label: 'Say their best shot was completely unplanned',
  },
]

function useCountUp({ active, end, decimals = 0, duration = 2000 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    const startTime = window.performance.now()
    let intervalId = 0

    const tick = () => {
      const elapsed = window.performance.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3
      const nextValue = end * easedProgress
      const roundedValue = Number(nextValue.toFixed(decimals))

      setValue(progress >= 1 ? end : roundedValue)

      if (progress >= 1) {
        window.clearInterval(intervalId)
      }
    }

    tick()
    intervalId = window.setInterval(tick, 16)

    return () => window.clearInterval(intervalId)
  }, [active, decimals, duration, end])

  return value
}

function FlipCard({ item, index }) {
  const wrapperRef = useRef(null)
  const isInView = useInView(wrapperRef, { once: true, amount: 0.65 })
  const count = useCountUp({ active: isInView, end: item.value, decimals: item.decimals })
  const formattedValue = item.decimals > 0 ? count.toFixed(item.decimals) : String(Math.round(count))
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      ref={wrapperRef}
      className={`section4-card-outer ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.15, ease: easing }}
    >
      <div className='section4-card-inner'>
        <div className='section4-card-face section4-card-front'>
          <div className='section4-card-front-left'>
            <span className='section4-gold-dash section4-gold-dash--front' />
            <div className='section4-card-number section4-card-number--front'>
              {formattedValue}
              {item.suffix}
            </div>
          </div>

          <div className='section4-card-hint'>hover to reveal</div>
        </div>

        <div className='section4-card-face section4-card-back'>
          <span className='section4-gold-dash section4-gold-dash--back' />
          <div className='section4-card-back-number'>
            {formattedValue}
            {item.suffix}
          </div>
          <div className='section4-card-back-label'>{item.label}</div>
        </div>
      </div>
    </motion.div>
  )
}

const Section2 = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 })

  return (
    <section ref={sectionRef} id='section4' className='section4'>
      <div className='section4-quote'>
        <motion.div
          className='section4-quote-line'
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: easing }}
        />

        <motion.p
          className='section4-quote-label'
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easing }}
        >
          APERTURE — IN WORDS
        </motion.p>

        <div className='section4-quote-text'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easing }}
          >
            {quoteLines[0]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.65, ease: easing }}
          >
            {quoteLines[1]}
          </motion.p>
        </div>

        <motion.p
          className='section4-quote-author'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: easing }}
        >
          — Destin Sparks
        </motion.p>
      </div>

      <div className='section4-cards'>
        {cardItems.map((item, index) => (
          <FlipCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Section2

import React, { useEffect, useRef, useState } from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  const cards = [...props.users, ...props.users, ...props.users]
  const scrollRef = useRef(null)
  const cursorRef = useRef(null)
  const segmentWidthRef = useRef(0)
  const cursorTargetRef = useRef({ x: 0, y: 0 })
  const cursorCurrentRef = useRef({ x: 0, y: 0 })
  const draggingRef = useRef(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setIsFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isFinePointer) return undefined

    let rafId = null

    const tick = () => {
      const target = cursorTargetRef.current
      const current = cursorCurrentRef.current
      current.x += (target.x - current.x) * 0.22
      current.y += (target.y - current.y) * 0.22

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${draggingRef.current ? 1.06 : 1})`
      }

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [isFinePointer])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return undefined

    let releaseTimer = null

    const normalizeScroll = () => {
      const segment = segmentWidthRef.current
      if (!segment) return

      let nextScrollLeft = node.scrollLeft

      while (nextScrollLeft < segment) {
        nextScrollLeft += segment
      }

      while (nextScrollLeft >= segment * 2) {
        nextScrollLeft -= segment
      }

      if (nextScrollLeft !== node.scrollLeft) {
        node.scrollLeft = nextScrollLeft
      }
    }

    const recenter = () => {
      segmentWidthRef.current = node.scrollWidth / 3
      node.scrollLeft = segmentWidthRef.current
    }

    const pauseAnimation = () => {
      setIsInteracting(true)
      if (releaseTimer) window.clearTimeout(releaseTimer)
    }

    const resumeAnimation = () => {
      if (releaseTimer) window.clearTimeout(releaseTimer)
      releaseTimer = window.setTimeout(() => setIsInteracting(false), 80)
    }

    const handleWheel = () => pauseAnimation()
    const handleScroll = () => normalizeScroll()

    const handleMouseMove = (event) => {
      if (!isFinePointer) return
      cursorTargetRef.current = { x: event.clientX, y: event.clientY }
      cursorCurrentRef.current = cursorCurrentRef.current.x === 0 && cursorCurrentRef.current.y === 0
        ? { x: event.clientX, y: event.clientY }
        : cursorCurrentRef.current
      setIsCursorVisible(true)
    }

    const handlePointerDown = (event) => {
      pauseAnimation()
      draggingRef.current = true

      if (event.pointerType !== 'mouse') {
        const handleTouchEnd = () => {
          node.removeEventListener('pointerup', handleTouchEnd)
          node.removeEventListener('pointercancel', handleTouchEnd)
          draggingRef.current = false
          resumeAnimation()
        }

        node.addEventListener('pointerup', handleTouchEnd)
        node.addEventListener('pointercancel', handleTouchEnd)
        return
      }

      const startX = event.clientX
      const startScrollLeft = node.scrollLeft

      const handlePointerMove = (moveEvent) => {
        const deltaX = moveEvent.clientX - startX
        node.scrollLeft = startScrollLeft - deltaX
        normalizeScroll()
      }

      const handlePointerUp = () => {
        node.releasePointerCapture(event.pointerId)
        node.removeEventListener('pointermove', handlePointerMove)
        node.removeEventListener('pointerup', handlePointerUp)
        node.removeEventListener('pointercancel', handlePointerUp)
        draggingRef.current = false
        resumeAnimation()
      }

      node.setPointerCapture(event.pointerId)
      node.addEventListener('pointermove', handlePointerMove)
      node.addEventListener('pointerup', handlePointerUp)
      node.addEventListener('pointercancel', handlePointerUp)
    }

    const handleMouseEnter = () => {
      pauseAnimation()
      if (isFinePointer) setIsCursorVisible(true)
    }

    const handleMouseLeave = () => {
      draggingRef.current = false
      setIsCursorVisible(false)
      resumeAnimation()
    }

    const setup = () => {
      recenter()
      normalizeScroll()
    }

    setup()
    window.addEventListener('resize', setup)

    node.addEventListener('wheel', handleWheel, { passive: true })
    node.addEventListener('scroll', handleScroll, { passive: true })
    node.addEventListener('mousemove', handleMouseMove)
    node.addEventListener('pointerdown', handlePointerDown)
    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (releaseTimer) window.clearTimeout(releaseTimer)
      window.removeEventListener('resize', setup)
      node.removeEventListener('wheel', handleWheel)
      node.removeEventListener('scroll', handleScroll)
      node.removeEventListener('mousemove', handleMouseMove)
      node.removeEventListener('pointerdown', handlePointerDown)
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isFinePointer])

  return (
    <div
      id='right'
      className='flex h-full w-full overflow-hidden bg-transparent px-0 pb-2 pt-0 sm:px-1 sm:pt-1 lg:w-[78%] lg:pl-2 lg:pr-0'
    >
      <div
        ref={scrollRef}
        className={`archive-marquee-scroll flex h-full w-full overflow-x-auto overflow-y-hidden touch-pan-x ${isInteracting ? 'is-paused' : ''} ${isFinePointer ? 'archive-hide-cursor' : ''}`}
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', touchAction: 'pan-x' }}
      >
        <div className='archive-marquee-track flex h-full w-fit gap-4 sm:gap-6 will-change-transform'>
          {cards.map(function(elem, index) {
            return <RightCard key={`${index}-${elem.tag}`} index={(index % props.users.length) + 1} img={elem.img} tag={elem.tag} intro={elem.intro} />
          })}
        </div>
      </div>

      {isFinePointer && (
        <div
          ref={cursorRef}
          className={`archive-custom-cursor ${isCursorVisible ? 'is-visible' : ''}`}
          aria-hidden='true'
        >
          <span>DRAG</span>
        </div>
      )}
    </div>
  )
}

export default RightContent

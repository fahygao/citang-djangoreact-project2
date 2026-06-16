import { useState, useRef, useEffect, useCallback } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')
  const frontEl = useRef(null)
  const backEl = useRef(null)

  const setMaxHeight = useCallback(() => {
    const frontHeight = frontEl.current?.getBoundingClientRect().height ?? 0
    const backHeight = backEl.current?.getBoundingClientRect().height ?? 0
    setHeight(Math.max(frontHeight, backHeight, 200))
  }, [])

  useEffect(setMaxHeight, [setMaxHeight, flashcard.question, flashcard.answer])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [setMaxHeight])

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height }}
      onClick={() => setFlip(!flip)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlip(!flip) }}
    >
      <div className="front" ref={frontEl}>{flashcard.question}</div>
      <div className="back" ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}

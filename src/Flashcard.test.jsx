import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Flashcard from './Flashcard.jsx'

const flashcard = { id: 1, question: '测试词', answer: '测试释义' }

describe('Flashcard', () => {
  it('renders question on front', () => {
    render(<Flashcard flashcard={flashcard} />)
    expect(screen.getByText('测试词')).toBeInTheDocument()
  })

  it('flips on click', () => {
    const { container } = render(<Flashcard flashcard={flashcard} />)
    const card = container.querySelector('.card')
    expect(card).not.toHaveClass('flip')
    fireEvent.click(card)
    expect(card).toHaveClass('flip')
  })

  it('flips on Enter key', () => {
    const { container } = render(<Flashcard flashcard={flashcard} />)
    const card = container.querySelector('.card')
    fireEvent.keyDown(card, { key: 'Enter' })
    expect(card).toHaveClass('flip')
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

describe('App', () => {
  it('renders the header', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.header')).toHaveTextContent('词堂后花园')
  })

  it('renders search input', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.search-input')).toHaveAttribute('placeholder', '查找梗词')
  })

  it('renders sample flashcards', () => {
    const { container } = render(<App />)
    const cards = container.querySelectorAll('.card')
    expect(cards.length).toBeGreaterThanOrEqual(10)
  })
})

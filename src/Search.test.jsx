import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Search from './Search.jsx'

const details = [
  { id: 1, question: '恐龙抗狼', answer: 'test answer 1' },
  { id: 2, question: '逗比', answer: 'test answer 2' },
  { id: 3, question: '打脸', answer: 'test answer 3' },
]

describe('Search', () => {
  it('renders search header', () => {
    const { container } = render(<Search details={details} />)
    expect(container.querySelector('.searchheader')).toHaveTextContent('搜搜看你想了解的梗词吧！')
  })

  it('does not show cards when query is empty', () => {
    const { container } = render(<Search details={details} />)
    expect(container.querySelectorAll('.card')).toHaveLength(0)
  })

  it('filters cards by query', async () => {
    const user = userEvent.setup()
    const { container } = render(<Search details={details} />)

    await user.type(container.querySelector('.search-input'), '恐龙')

    const cards = container.querySelectorAll('.card')
    expect(cards).toHaveLength(1)
    expect(cards[0].querySelector('.front')).toHaveTextContent('恐龙抗狼')
  })

  it('is case insensitive', async () => {
    const user = userEvent.setup()
    const { container } = render(<Search details={[{ id: 99, question: 'ABC', answer: 'x' }]} />)

    await user.type(container.querySelector('.search-input'), 'abc')

    expect(container.querySelectorAll('.card')).toHaveLength(1)
  })
})

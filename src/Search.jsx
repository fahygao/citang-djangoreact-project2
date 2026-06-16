import { useState, useMemo } from 'react'
import Flashcard from './Flashcard.jsx'

export default function Search({ details }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => details.filter(f => f.question.toLowerCase().includes(query.toLowerCase())),
    [details, query]
  )

  return (
    <section>
      <h2 className="searchheader">搜搜看你想了解的梗词吧！</h2>
      <div className="search-box">
        <input
          className="search-input"
          type="search"
          placeholder="查找梗词"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {query && (
        <div className="container">
          <div className="card-grid">
            {filtered.map(f => <Flashcard flashcard={f} key={f.id} />)}
          </div>
        </div>
      )}
    </section>
  )
}

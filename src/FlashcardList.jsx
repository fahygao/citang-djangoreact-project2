import Flashcard from './Flashcard.jsx'

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => (
        <Flashcard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  )
}

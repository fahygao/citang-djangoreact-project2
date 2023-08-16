import React from "react";
import Flashcard from "./Flashcard";

export default function SearchList({filtereDefinitions}){

    const filtered = filtereDefinitions.map(flashcard =>  <Flashcard flashcard={flashcard} key={flashcard.id} />)
    return (
        <div className="card-grid">
            {filtered}
        </div>

    )

}
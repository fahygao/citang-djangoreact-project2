
import React, { useState } from "react";
import SearchList from "./SearchList";


export default function Search({details}) {
    const [searchField, setSearchField] = useState("")

    const filtereDefinitions = details.filter(
        flashcard => {
            return (
                flashcard
                .question
                .toLowerCase()
                .includes(searchField.toLowerCase())

            );

        }
    );
    const handleChange = e => {
        setSearchField(e.target.value);
    };


    function searchList() {
        return (
            <div className="container">
            <SearchList filtereDefinitions={filtereDefinitions} />
        </div>
        );
      }

      return (
        <section>
            <h2 className="searchheader">搜搜看你想了解的梗词吧！</h2>
          <div  className="pa2 bb br3">
            <input 
              className="pa3 bb grow b--none bg-lightest-white ma3"
              type = "search" 
              placeholder = "查找梗词" 
              onChange = {handleChange}
            />
          </div >
          {searchList()}
        </section>
      );
}
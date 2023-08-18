import React, { useState } from 'react';
import LibraryINFO from "../../data/publications";


const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (keyword) => {
    const results = {
      conferences: [],
      patents: [],
      bookchapters: [],
      journals: [],
      workshops: [],
      invited_papers: []
    };

    // Search in each section
    for (const section in LibraryINFO) {
      if (Array.isArray(LibraryINFO[section])) {
        LibraryINFO[section].forEach((item, index) => {
          // Check if any property in the item matches the keyword
          for (const prop in item) {
            if (typeof item[prop] === 'string' && item[prop].toLowerCase().includes(keyword.toLowerCase())) {
              results[section].push({ index, item });
              break; // No need to check further properties
            }
          }
        });
      }
    }

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a keyword..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      {Object.keys(searchResults).map((section) => (
        <div key={section}>
          <h2>{section}</h2>
          <ul>
            {searchResults[section].map(({ index, item }) => (
              <li key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchComponent;






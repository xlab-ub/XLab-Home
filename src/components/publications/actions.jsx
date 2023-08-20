import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Main from './main';
import LibraryINFO from "../../data/publications";

import "./styles/actions.css"

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchKeyword) => {
    const results = {
      conferences: [],
      patents: [],
      bookchapters: [],
      journals: [],
      workshops: [],
      invited_papers: []
    };

    // Search in each section
    if (searchKeyword.length > 0) {
      for (const section in LibraryINFO) {
        if (Array.isArray(LibraryINFO[section])) {
          LibraryINFO[section].forEach((item, index) => {
            // Check if any property in the item matches the keyword
            for (const prop in item) {
              if (typeof item[prop] === 'string' && item[prop].toLowerCase().includes(searchKeyword.toLowerCase())) {
                results[section].push({ index, item });
                break; // No need to check further properties
              }
            }
          });
        }
      }
    }
    setSearchResults(results);
  };

  return (
    <Main>
      <div className='searchWrapper'>
          <Space.Compact>
              <Input value={keyword} onPressEnter={() => handleSearch(keyword)} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter a keyword..." style={{ 'width': '600px', 'height': '40px', 'border-top-left-radius': '6px', 'border-bottom-left-radius': '6px', 'padding-top': '0', 'padding-bottom': '0', 'background': '#FFF' }} />
              <Button onClick={() => handleSearch(keyword)} icon={<SearchOutlined style={{ fontSize: '24px', color: '#FFF'}} />} style={{ 'width': '100px', 'height': '40px', 'border-top-right-radius': '6px', 'border-bottom-right-radius': '6px' }} type="primary" />
          </Space.Compact>

          {Object.keys(searchResults).map((section) => (
          <div key={section}>
            {searchResults[section].length > 0 ? (
              <div>
              <h2>{section}</h2>
              <ul>
                {searchResults[section].map(({ index, item }) => (
                  <li key={index}>
                    {item && (
                      <div>
                        {Object.entries(item).map(([key, value]) => (
                          <p key={key}>
                            <strong>{key}:</strong> {value}
                          </p>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        ))}
      </div>
    </Main>
  );
};

export default SearchComponent;

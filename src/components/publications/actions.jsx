import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Main from './main';
import LibraryINFO from "../../data/publications";
import Book from './book';
import Publication from './publication';
import Patent from './patent';

import "./styles/actions.css"

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchKeyword) => {
    const results = {
      Conferences: [],
      Patents: [],
      Bookchapters: [],
      Journals: [],
      Workshops: [],
      InvitedPapers: []
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
          <div className='searchInput'>
            <Space.Compact>
                <Input value={keyword} onPressEnter={() => handleSearch(keyword)} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter a keyword, eg. GPU" style={{ 'width': '500px', 'height': '40px', 'fontSize': '20px', 'border-top-left-radius': '6px', 'border-bottom-left-radius': '6px', 'padding-top': '0', 'padding-bottom': '0', 'background': '#FFF' }} />
                <Button onClick={() => handleSearch(keyword)} icon={<SearchOutlined style={{ fontSize: '24px', color: '#FFF'}} />} style={{ 'width': '80px', 'height': '40px', 'border-top-right-radius': '6px', 'border-bottom-right-radius': '6px' }} type="primary" />
            </Space.Compact>
          </div>

          {Object.keys(searchResults).map((section) => (
          <div key={section}>
            {searchResults[section].length > 0 ? (
              <div className='sectionWrapper'>
                <div className='sectionHead'>
                {section}
                </div>
                <p>{"(About"} {searchResults[section].length} {"results)"}</p>
                <div className='sectionContent'>
                  {searchResults[section].map(({ index, item }) => (
                    <div className="publications-article" key={(index + 1).toString()}>
                      {section === 'patents' ? (
                        <Patent
                          key={(index + 1).toString()}
                          date={item.date}
                          id={item.id}
                          title={item.title}
                          author={item.author}
                        />
                      ) : section === 'bookchapters' ? (
                        <Book
                          key={(index + 1).toString()}
                          date={item.date}
                          publish={item.publish}
                          title={item.title}
                          author={item.author}
                        />
                      ) : (
                        <Publication
                          key={(index + 1).toString()}
                          date={item.date}
                          source={item.source}
                          title={item.title}
                          author={item.author}
                          paper_link={item.paper_link}
                          code_link={item.code_link}
                        />
                      )}
                    </div>
                  ))}
                </div>
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

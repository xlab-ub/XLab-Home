import React, { useState, useEffect } from 'react';
import { Button, Select, Space } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import Main from './main';
import LibraryINFO from "../../data/publications";
import Book from './book';
import Publication from './publication';
import Patent from './patent';

import "./styles/filter.css"

const getContributionTypes = () => {
    return ['Conferences', 'Journals', 'Workshops', 'InvitedPapers'];
};

const generateYearList = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
    }
    return years.reverse();
};

const getSourceData = () => {
    const sourceData = {};
  
    // Iterate through each contribution type
    for (const contributionType in LibraryINFO) {
        // Create a Set to store unique sources
        const uniqueSources = new Set();
        // Collect unique sources for the current contribution type
        LibraryINFO[contributionType].forEach(item => {
            if (item.source) {
            uniqueSources.add(item.source);
            }
        });
        // Convert Set back to an array and store in sourceData
        sourceData[contributionType] = Array.from(uniqueSources);
    }
    return sourceData;
};

const FilterComponent = () => {
    // const currentYear = new Date().getFullYear()
    const SourceData = getSourceData();
    const ContributionData = getContributionTypes();
    const DateData = generateYearList(2001, new Date().getFullYear());
    const [selectedContribution, setSelectedContribution] = useState(ContributionData[0]);
    const [sources, setSources] = useState(SourceData[ContributionData[0]]);
    const [secondSources, setSecondSources] = useState([SourceData[ContributionData[0]][1], SourceData[ContributionData[0]][4], SourceData[ContributionData[0]][8], SourceData[ContributionData[0]][15]]);
    const [selectedDates, setSelectedDates] = useState(DateData);
    const [searchResults, setSearchResults] = useState([]);
    const handleContributionChange = (value) => {
        setSelectedContribution(value);
        setSources(SourceData[value]);
        setSecondSources(SourceData[value][0]);
    };
    const onSecondSourcesChange = (value) => {
        setSecondSources(value);
    };

    const handleDateChange = (value) => {
        setSelectedDates(value);
    };

    const handleSearch = () => {
        const results = {
            Conferences: [],
            Journals: [],
            Workshops: [],
            InvitedPapers: []
          };
        // console.error(`${selectedDates}`);
        LibraryINFO[selectedContribution].forEach((item, index) => {
            if (((secondSources.includes(item.source)) || (secondSources.length == 0)) && ((selectedDates.includes(item.date)) || (selectedDates.length == 0))) {
                results[selectedContribution].push({ index, item });
            }
        });
        setSearchResults(results);
        
    }

    const getDefault = () => {
        const results = {
            Conferences: [],
            Journals: [],
            Workshops: [],
            InvitedPapers: []
          };
        // console.error(`${selectedDates}`);
        LibraryINFO['Conferences'].forEach((item, index) => {
            if (((['NeurIPS', 'ICCV', 'ICML', 'ICCAD'].includes(item.source)) || (secondSources.length == 0)) && ((selectedDates.includes(item.date)) || (selectedDates.length == 0))) {
                results[selectedContribution].push({ index, item });
            }
        });
        setSearchResults(results);
    }

    useEffect(()=>{
        getDefault()
    }, [])
    
    return (
        <Main>
            <div className='searchWrapper'>
                <div className='searchInput'>
                    <Space wrap>
                        <Select
                            defaultValue={ContributionData[0]}
                            style={{
                            width: 200,
                            }}
                            onChange={handleContributionChange}
                            options={ContributionData.map((type) => ({
                            label: type,
                            value: type,
                            }))}
                        />
                        <Select
                            mode="multiple"
                            style={{
                            width: 400,
                            }}
                            value={secondSources}
                            onChange={onSecondSourcesChange}
                            options={sources.map((item) => ({
                            label: item,
                            value: item,
                            }))}
                        />
                        <Select
                            mode="multiple"
                            style={{
                            width: 200,
                            }}
                            onChange={handleDateChange}
                            options={DateData.map((year) => ({
                            label: year,
                            value: year,
                            }))}
                        />
                        <Button onClick={() => handleSearch()} icon={<FilterOutlined style={{ fontSize: '14px', color: '#FFF'}} />} style={{'height': '30px', 'border-top-right-radius': '6px', 'border-bottom-right-radius': '6px' }} type="primary" />
                    </Space>
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

export default FilterComponent;

import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Main from './main';
import LibraryINFO from "../../data/publications";

import "./styles/plot.css"

const PlotComponent = () => {
  // Extracting data from LibraryINFO

  // Data for pie chart (Number of items in each array)
  const pieChartData = [
    { name: 'Conferences', value: LibraryINFO['Conferences'].length },
    { name: 'Patents', value: LibraryINFO['Patents'].length },
    { name: 'Book Chapters', value: LibraryINFO['Bookchapters'].length },
    { name: 'Journals', value: LibraryINFO['Journals'].length },
    { name: 'Workshops', value: LibraryINFO['Workshops'].length },
    { name: 'Invited Papers', value: LibraryINFO['InvitedPapers'].length },
  ];

  // Data for line graph (Number of items over time for different arrays)
  const lineChartData = [
    {
        name: 'Conferences',
        data: LibraryINFO['Conferences'].reduce((acc, item) => {
        const year = item.date;
        acc[year] = (acc[year] || 0) + 1;
        return acc;
        }, {}),
    },
    {
        name: 'Patents',
        data: LibraryINFO['Patents'].reduce((acc, item) => {
        const year = item.date;
        acc[year] = (acc[year] || 0) + 1;
        return acc;
        }, {}),
    },
    {
        name: 'Book Chapters',
        data: LibraryINFO['Bookchapters'].reduce((acc, item) => {
          const year = item.date;
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {}),
    },
    {
        name: 'Journals',
        data: LibraryINFO['Journals'].reduce((acc, item) => {
            const year = item.date;
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {}),
    },
    {
        name: 'Workshops',
        data: LibraryINFO['Workshops'].reduce((acc, item) => {
            const year = item.date;
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {}),
    },
    {
        name: 'Invited Papers',
        data: LibraryINFO['InvitedPapers'].reduce((acc, item) => {
            const year = item.date;
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {}),
    },
    // Repeat the same pattern for other arrays
  ];

  const conferenceSources = LibraryINFO['Conferences'].reduce((acc, item) => {
        const source = item.source;
        acc[source] = (acc[source] || 0) + 1;
        return acc;
    }, {});

  const journalSources = LibraryINFO['Journals'].reduce((acc, item) => {
        const source = item.source;
        acc[source] = (acc[source] || 0) + 1;
        return acc;
    }, {});

  // ECharts options for the three charts
  const pieChartOptions = {
    title: {
      text: 'Overall Resource Distribution',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    series: [
      {
        name: 'Field',
        type: 'pie',
        radius: '50%',
        data: pieChartData,
      },
    ],
  };

  const lineChartOptions = {
    title: {
      text: 'Number of Publications Over Time',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Conferences', 'Patents', 'Book Chapters', 'Journals', 'Workshops', 'Invited Papers' /* Add legends for other arrays */],
      top: 'bottom',
    },
    xAxis: {
      type: 'category',
      data: Object.keys(lineChartData[0].data), // Use the years as x-axis labels
    },
    yAxis: {
      type: 'value',
    },
    series: lineChartData.map(entry => ({
      name: entry.name,
      type: 'line',
      data: Object.values(entry.data), // Use the aggregated values for each year
    })),
  };

  // ECharts options for the bar charts
  const conferenceBarOptions = {
    title: {
      text: 'Number of Conferences by Source',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: Object.keys(conferenceSources), // Use the sources as x-axis labels
      axisLabel: {
        rotate: 45, // Rotate the labels by 45 degrees
        formatter: function(value) {
            if (value.length > 10) {
              return value.substring(0, 10) + '...'; // Truncate and add ellipsis
            }
            return value;
        }
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Conferences',
        type: 'bar',
        data: Object.values(conferenceSources), // Use the aggregated values for conferences
      },
    ],
  };

  const journalBarOptions = {
    title: {
      text: 'Number of Journals by Source',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: Object.keys(journalSources), // Use the sources as x-axis labels
      axisLabel: {
        rotate: 45, // Rotate the labels by 45 degrees
        formatter: function(value) {
            if (value.length > 10) {
              return value.substring(0, 10) + '...'; // Truncate and add ellipsis
            }
            return value;
        },
      }
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Journals',
        type: 'bar',
        data: Object.values(journalSources), // Use the aggregated values for journals
      },
    ],
  };

  return (
    <Main>
        <div className='plotWrapper'>
            <p>Library Statistics</p>
            <div className='singlePlot'>
                <ReactEcharts option={lineChartOptions} />
            </div>
            <hr />
            <div className='singlePlot'>
                <ReactEcharts option={conferenceBarOptions} />
            </div>
            <hr />
            <div className='singlePlot'>
                <ReactEcharts option={journalBarOptions} />
            </div>
            <hr />
            <div className='singlePlot'>
                <ReactEcharts option={pieChartOptions} />
            </div>
        </div>
    </Main>
  );
};

export default PlotComponent;
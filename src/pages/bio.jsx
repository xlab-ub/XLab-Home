import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Side from '../components/common/side';

const Bio = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Side
      title="About"
    >
      <article className="post markdown" id="about">
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Side>
  );
};

export default Bio;

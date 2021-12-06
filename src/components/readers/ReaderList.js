import React from 'react';

import ReaderCard from './ReaderCard';
import readersData from '../../data/readersData';

const ReaderList = () => {
  return (
    <div className="grid">
      {readersData.map((reader) => (
        <ReaderCard key={reader.id} name={reader.name} books={reader.books} />
      ))}
    </div>
  );
};

export default ReaderList;

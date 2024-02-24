
import React from 'react';

const Pagination = ({ fetchNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={fetchNextPage}>Load More</button>
    </div>
  );
};

export default Pagination;

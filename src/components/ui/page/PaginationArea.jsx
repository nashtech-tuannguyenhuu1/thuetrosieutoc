// import {Pagination} from 'react-bootstrap';

// function PaginationArea() {
//   return (
//     <Pagination>
//       <Pagination.First />
//       <Pagination.Prev />
//       <Pagination.Item>{1}</Pagination.Item>
//       <Pagination.Ellipsis />

//       <Pagination.Item>{10}</Pagination.Item>
//       <Pagination.Item>{11}</Pagination.Item>
//       <Pagination.Item active>{12}</Pagination.Item>
//       <Pagination.Item>{13}</Pagination.Item>
//       <Pagination.Item disabled>{14}</Pagination.Item>

//       <Pagination.Ellipsis />
//       <Pagination.Item>{20}</Pagination.Item>
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default PaginationArea;

import { Pagination } from 'react-bootstrap';
import React from 'react';

function PaginationArea({ itemsPerPage, totalItems, currentPage, paginate }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Determine the range of page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Adjust startPage and endPage if currentPage is close to the beginning or end
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  } else if (currentPage >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {currentPage > 1 &&<><Pagination.First onClick={() => paginate(1)} />
      <Pagination.Prev onClick={() => paginate(Math.max(1, currentPage - 1))} /></>}

      {pageNumbers.map(number => (
        <Pagination.Item key={number} active={number === currentPage} disabled={number === currentPage} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}

      {
        totalPages - currentPage === 3 && <Pagination.Item onClick={() => paginate(totalPages)}>{totalPages}</Pagination.Item>
      }

      {
        totalPages - currentPage > 3 && <><Pagination.Ellipsis /><Pagination.Item onClick={() => paginate(totalPages)}>{totalPages}</Pagination.Item></>
      }

      {currentPage < totalPages && <><Pagination.Next onClick={() => paginate(Math.min(totalPages, currentPage + 1))} />
      <Pagination.Last onClick={() => paginate(totalPages)} /></>}
    </Pagination>
  );
}

export default PaginationArea;

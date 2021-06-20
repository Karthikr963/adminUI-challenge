// import { Pagination } from "react-bootstrap";
import React from "react";
// import Pagination from "react-bootstrap/Pagination";
import { Pagination } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
// import Pagination from "react-bootstrap/Pagination";
// import "bootstrap/dist/css/bootstrap.min.css";
const PaginationComponent = ({
  total = 0,
  itemsPerPage = 5,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    // console.log(pages);
    return pages;
  }, [totalPages, currentPage, onPageChange]);

  if (totalPages === 0) {
    return null;
  }

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;

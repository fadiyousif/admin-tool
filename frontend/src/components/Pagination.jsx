import ReactPaginate from "react-paginate";

export const Pagination = ({ contracts, contractsPerPage, setPageNumber }) => {
  const pageCount = Math.ceil(contracts.length / contractsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={pageCount}
      onPageChange={changePage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};

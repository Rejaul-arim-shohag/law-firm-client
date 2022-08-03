import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.sass'
export default function Pagination({ total, pageNo,handlePageClick }) {
    
    return (
        <ReactPaginate
            nextLabel=">"
             onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={total / pageNo}
            previousLabel="<"
            pageClassName="border py-1 px-3  duration-300 rounded-full hover:bg-primary text-white border-transparent bg-secondary "
            pageLinkClassName=" "
            previousClassName="border py-1 duration-300  px-3 rounded-full hover:bg-primary text-white border-transparent bg-secondary "
            previousLinkClassName=""
            nextClassName="border py-1 px-3 duration-300  rounded-full hover:bg-primary text-white border-transparent bg-secondary "
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="border py-1 px-3 rounded-full  border-secondary "
            breakLinkClassName="page-link"
            containerClassName=" flex space-x-5"
            activeClassName="border py-1 px-3 rounded-full bg-primary text-white border-transparent"
            renderOnZeroPageCount={null}
        />
    )
}

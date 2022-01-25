import React from 'react'
import classnames from 'classnames';
import { usePagination, DOTS } from './UsePagination';

// custom pagination component. Info is imported from the custom hook component UsePagination.js
const Pagination = props => {
    const {
      //props from usePagination
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className

    } = props;
    // setting config variables 
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });


    //functionality of clicking paginaton buttons
    if( currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () =>{
        onPageChange(currentPage + 1)
    }

    const onPrevious = () =>{
        onPageChange(currentPage - 1)
    }
    let lastPage = paginationRange[paginationRange.length - 1];
    let number = 1
    return (

      //pagination jsx
        <ul
          className={classnames('pagination-container', { [className]: className })}
        >
           {/* Left navigation arrow */}
          <li key="uniq1"
            className={classnames('pagination-item', {
              disabled: currentPage === 1
            })}
            onClick={onPrevious}
          >
            <div className="arrow left" />
          </li>
          {paginationRange.map(pageNumber => {
             
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              number ++
              return <li key={pageNumber + number} className="pagination-item dots">&#8230;</li>;

            }
            
            // Render our Page Pills
            return (
              <li key={pageNumber}
                className={classnames('pagination-item', {
                  selected: pageNumber === currentPage
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          {/*  Right Navigation arrow */}
          <li key="uniq4"
            className={classnames('pagination-item', {
              disabled: currentPage === lastPage
            })}
            onClick={onNext}
          >
            <div className="arrow right" />
          </li>
        </ul>
      );
    };
    
    export default Pagination;

import React from 'react';
import cn from 'classnames';

interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
    paginationWrapper?: string;
    pageView?: string;
  };
  onChangePage: (newPage: number) => void;
  decrementPage: () => void;
  incrementPage: () => void;
}

const Pagination = ({
  activePage,
  totalItems,
  perPage,
  withActions,
  classes,
  onChangePage,
  decrementPage,
  incrementPage
}: PaginationProps) => {
  const totalPages: number = Math.ceil(totalItems / perPage);
  const lastIndex: number = totalPages - 1;

  return (
    <div className={classes?.paginationWrapper}>
      <div className={classes?.pageView}>{activePage + 1}</div>
      <div>
        {withActions && (
          <button
            disabled={activePage === 0 ? true : false}
            className={cn(classes?.btn)}
            onClick={decrementPage}
          >
            prev
          </button>
        )}
        {Array.from({ length: totalPages }).map((page: any, index: number) => (
          <button
            onClick={() => onChangePage(index)}
            className={cn(classes?.btn, { [classes?.activeBtn || '']: index === activePage })}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        {withActions && (
          <button
            onClick={incrementPage}
            disabled={activePage === lastIndex ? true : false}
            className={classes?.btn}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

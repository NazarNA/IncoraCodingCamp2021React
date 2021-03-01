import React from 'react';
import Pagination from './components/Pagination/Pagination';

import styles from './components/Pagination/Pagination.module.scss';
import './App.scss';

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangePageHandler = (page: number) => {
    setCurrentPage(page);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Pagination
        totalItems={50}
        perPage={10}
        withActions={true}
        classes={{
          btn: styles.btn,
          paginationWrapper: styles.paginationWrapper,
          activeBtn: styles.active,
          pageView: styles.pageView
        }}
        activePage={currentPage}
        onChangePage={onChangePageHandler}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
    </div>
  );
}

export default App;

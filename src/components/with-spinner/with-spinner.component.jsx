import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <div className='spinner-overlay'>
      <div className='spinner' />
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default WithSpinner;
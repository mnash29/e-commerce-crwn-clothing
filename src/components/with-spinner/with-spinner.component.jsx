import React from 'react';

import './with-spinner.styles.scss';

const Spinner = WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <div className='spinner-overlay'>
      <div className='spinner' />
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default Spinner;
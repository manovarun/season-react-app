import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div className='ui segment' style={{ height: '100vh' }}>
      <div className='ui active dimmer'>
        <div className='ui big text loader'>{message}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;

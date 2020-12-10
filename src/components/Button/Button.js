import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function PageButton({ page, children, configMargin }) {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push(page)}
      style={{
        fontSize: '15px', margin: configMargin, color: 'white', fontFamily: 'inherit', outline: 'none',
      }}
    >
      {children}
    </Button>
  );
}
export default PageButton;

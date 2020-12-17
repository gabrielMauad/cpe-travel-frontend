import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

function PageButton({
  page, children, configMargin, user,
}) {
  const history = useHistory();
  const { signOut } = useAuth();
  return (
    <Button
      onClick={() => (user ? signOut() : history.push(page))}
      style={{
        fontSize: '15px', margin: configMargin, color: 'white', fontFamily: 'inherit', outline: 'none',
      }}
    >
      {children}
    </Button>
  );
}
export default PageButton;

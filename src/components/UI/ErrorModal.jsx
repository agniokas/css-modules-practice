import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onClick }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClick}>okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

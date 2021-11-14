import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './Form.module.css';

const AddUserForm = ({ onAddUser }) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [error, setError] = useState();

  const handleUserNameInput = (event) => {
    event.preventDefault();
    setUserNameInput(event.target.value);
  };

  const handleAgeInput = (event) => {
    event.preventDefault();
    setAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userNameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please eneter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please eneter a valid age (> 0).',
      });
      return;
    }
    onAddUser(userNameInput, ageInput);
    setUserNameInput('');
    setAgeInput('');
  };

  const closeErrorModal = () => {
    console.log('clicked');
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={closeErrorModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor='userName'>Username</label>
            <input
              id='userName'
              type='text'
              name='userName'
              onChange={handleUserNameInput}
              value={userNameInput}
            />
          </div>
          <div>
            <label htmlFor='age'>Age (Year)</label>
            <input
              name='age'
              id='age'
              type='number'
              onChange={handleAgeInput}
              value={ageInput}
            />
          </div>
          <Button>Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;

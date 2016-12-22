import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const ChordSearchPage = () => {
  const handleClick = () => alert('Yo!');

  return (
    <div>
      <h2>Chord Search</h2>
      <TextInput
        label="Artist"
        name="artist"
      />
      <br />
      <TextInput
        label="Title"
        name="title"
      />
      <Button
        text="Go!"
        onClick={handleClick}
      />
    </div>

  );
};


export default ChordSearchPage;

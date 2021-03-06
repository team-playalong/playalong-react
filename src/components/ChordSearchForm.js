// import React, { PropTypes } from 'react';
import React from 'react';
import RadioButtons from './RadioButtons';
import Button from './Button';
import TextInput from './TextInput';

class ChordSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSearchChordsClicked = this.onSearchChordsClicked.bind(this);
  }

  onSearchChordsClicked() {
    console.log(this);
  }

  render() {
    const radioInputs = [
      {
        label: 'Artist',
        value: 'artist',
      },
      {
        label: 'Title',
        value: 'title',
      },
    ];

    return (
      <div>
        <h2>Chord Search</h2>
        <RadioButtons
          inputs={radioInputs}
        />
        <TextInput
          name="searchInput"
        />
        <Button
          text="Go!"
          onClick={this.onSearchChordsClicked}
        />
      </div>
    );
  }
}

ChordSearchForm.propTypes = {

};

export default ChordSearchForm;

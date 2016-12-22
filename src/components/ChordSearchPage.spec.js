import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChordSearchPage from './ChordSearchPage';

describe('<ChordSearchPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChordSearchPage />);
  });

  it('should have a header called \'Chord Search\'', () => {
    const actual = wrapper.find('h2').text();
    const expected = 'Chord Search';

    expect(actual).to.equal(expected);
  });

  it('Should have a text input with an artist name', () => {
    const TextInput = wrapper.find('TextInput');
    const expectedName = 'artist';
    const actualName = TextInput.first().props().name;
    expect(actualName).to.equal(expectedName);
  });
});

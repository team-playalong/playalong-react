import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChordSearchPage from './ChordSearchPage';

describe('<ChordSearchPage />', () => {
  it('should have a header called \'Chord Search\'', () => {
    const wrapper = shallow(<ChordSearchPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'Chord Search';

    expect(actual).to.equal(expected);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RadioButtons from './RadioButtons';

chai.use(sinonChai);

describe('<RadioButtons />', () => {
  let wrapper;
  const props = {
    legend: 'My Radio Title',
    inputs: [
      {
        label: 'Radio 1',
        value: 'radio1',
      },
      {
        label: 'Radio 2',
        value: 'radio2',
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<RadioButtons inputs={props.inputs} legend={props.legend} />);
  });

  it('should contain radio button inputs', () => {
    const actual = wrapper.find('input[type="radio"]').length;
    const expected = 2;
    expect(actual).to.equal(expected);
  });

  it('should contain a legend for all the buttons', () => {
    const actual = wrapper.find('legend').first().text();
    const expected = 'My Radio Title';
    expect(actual).to.equal(expected);
  });
});

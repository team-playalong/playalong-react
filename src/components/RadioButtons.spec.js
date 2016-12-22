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
    wrapper = shallow(<RadioButtons {...props} />);
  });

  it('should contain radio button inputs', () => {
    const actual = wrapper.find('input[type="radio"]').length;
    const expected = 2;
    expect(actual).to.equal(expected);
  });
});
